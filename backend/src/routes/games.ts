import { Hono } from 'hono';
import { drizzle } from 'drizzle-orm/d1';
import { eq, sql, and, desc, asc, like, or } from 'drizzle-orm';
import * as schema from '../db/schema';
import { EnvBindings } from '../auth';

export const gamesRoute = new Hono<{ Bindings: EnvBindings }>();

// Helper to sanitize FTS5 query terms
function sanitizeFtsQuery(term: string): string {
  const words = term
    .replace(/[^\w\s\u4e00-\u9fff-]/g, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return '';
  return words.map((w) => `"${w}"*`).join(' AND ');
}

// ==========================================
// 1. GET /api/games - List & Filter Games
// ==========================================
gamesRoute.get('/', async (c) => {
  const db = drizzle(c.env.DB, { schema });
  const url = new URL(c.req.url);

  const search = url.searchParams.get('search')?.trim() || '';
  const aiType = url.searchParams.get('aiType');
  const genre = url.searchParams.get('genre');
  const mechanic = url.searchParams.get('mechanic');
  const platform = url.searchParams.get('platform');
  const status = url.searchParams.get('status');
  const sort = url.searchParams.get('sort') || 'hot';
  const isFeatured = url.searchParams.get('isFeatured');
  const isHot = url.searchParams.get('isHot');
  const page = Math.max(1, parseInt(url.searchParams.get('page') || '1'));
  const limit = Math.min(100, Math.max(1, parseInt(url.searchParams.get('limit') || '50')));
  const offset = (page - 1) * limit;

  try {
    let matchingIds: number[] | null = null;

    // Execute SQLite FTS5 Full-Text Search if query is present
    if (search) {
      const ftsTerm = sanitizeFtsQuery(search);
      if (ftsTerm) {
        try {
          const ftsResult = await c.env.DB.prepare(
            `SELECT rowid as id FROM games_fts WHERE games_fts MATCH ? ORDER BY rank LIMIT 100`
          ).bind(ftsTerm).all<{ id: number }>();

          if (ftsResult.results && ftsResult.results.length > 0) {
            matchingIds = ftsResult.results.map((r) => r.id);
          }
        } catch {
          // Fallback to null (will use LIKE query below)
          matchingIds = null;
        }
      }
    }

    // Build Drizzle Conditions
    const conditions = [];

    if (search) {
      if (matchingIds && matchingIds.length > 0) {
        conditions.push(sql`${schema.games.id} IN (${sql.join(matchingIds.map((id) => sql`${id}`), sql`, `)})`);
      } else {
        // Fallback: Multi-field LIKE search
        const term = `%${search}%`;
        conditions.push(
          or(
            like(schema.games.title, term),
            like(schema.games.tagline, term),
            like(schema.games.description, term),
            like(schema.games.genreName, term),
            like(schema.games.mechanicName, term),
            like(schema.games.developer, term)
          )
        );
      }
    }

    if (aiType && aiType !== 'ALL') {
      conditions.push(eq(schema.games.aiType, aiType as any));
    }
    if (genre && genre !== 'all') {
      conditions.push(eq(schema.games.genreSlug, genre));
    }
    if (mechanic && mechanic !== 'all') {
      conditions.push(eq(schema.games.mechanicSlug, mechanic));
    }
    if (status && status !== 'all') {
      conditions.push(eq(schema.games.status, status));
    }
    if (isFeatured === 'true') {
      conditions.push(eq(schema.games.isFeatured, true));
    }
    if (isHot === 'true') {
      conditions.push(eq(schema.games.isHot, true));
    }

    // Platform JSON check
    if (platform && platform !== 'all') {
      conditions.push(like(schema.games.platforms, `%${platform}%`));
    }

    const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

    // Sorting
    let orderBy = desc(schema.games.likeCount);
    if (sort === 'hot') {
      orderBy = desc(schema.games.isHot);
    } else if (sort === 'latest') {
      orderBy = desc(schema.games.releaseYear);
    } else if (sort === 'top_rated') {
      orderBy = desc(schema.games.aiScore);
    } else if (sort === 'most_liked') {
      orderBy = desc(schema.games.likeCount);
    } else if (sort === 'most_bookmarked') {
      orderBy = desc(schema.games.bookmarkCount);
    } else if (sort === 'random') {
      orderBy = sql`RANDOM()`;
    }

    // Query Data & Total Count
    const [allGames, countResult] = await Promise.all([
      db.select().from(schema.games).where(whereClause).orderBy(orderBy).limit(limit).offset(offset),
      db.select({ count: sql<number>`count(*)` }).from(schema.games).where(whereClause)
    ]);

    const total = countResult[0]?.count || 0;

    return c.json({
      success: true,
      data: allGames.map((g) => ({
        ...g,
        platforms: JSON.parse(g.platforms || '["Browser"]'),
        screenshots: JSON.parse(g.screenshots || '[]'),
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// ==========================================
// 2. GET /api/games/:slug - Game Detail
// ==========================================
gamesRoute.get('/:slug', async (c) => {
  const db = drizzle(c.env.DB, { schema });
  const slugOrId = c.req.param('slug');

  try {
    const isNumeric = /^\d+$/.test(slugOrId);
    const game = await db.query.games.findFirst({
      where: isNumeric
        ? eq(schema.games.id, parseInt(slugOrId))
        : eq(schema.games.slug, slugOrId),
    });

    if (!game) {
      return c.json({ success: false, message: 'Game not found' }, 404);
    }

    // Asynchronously increment view count in D1
    c.executionCtx.waitUntil(
      c.env.DB.prepare('UPDATE games SET view_count = view_count + 1 WHERE id = ?')
        .bind(game.id)
        .run()
    );

    return c.json({
      success: true,
      data: {
        ...game,
        platforms: JSON.parse(game.platforms || '["Browser"]'),
        screenshots: JSON.parse(game.screenshots || '[]'),
      },
    });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// ==========================================
// 3. POST /api/games - Create Game
// ==========================================
gamesRoute.post('/', async (c) => {
  const db = drizzle(c.env.DB, { schema });
  const body = await c.req.json();

  try {
    const platformsStr = Array.isArray(body.platforms)
      ? JSON.stringify(body.platforms)
      : body.platforms || '["Browser"]';
    const screenshotsStr = Array.isArray(body.screenshots)
      ? JSON.stringify(body.screenshots)
      : body.screenshots || '[]';

    const insertResult = await db.insert(schema.games).values({
      slug: body.slug,
      title: body.title,
      tagline: body.tagline,
      description: body.description,
      aiRoleDescription: body.aiRoleDescription,
      tier: body.tier || 'AI-Native',
      aiType: body.aiType || 'AI_NATIVE',
      genreKey: body.genreKey,
      genreName: body.genreName,
      genreSlug: body.genreSlug,
      mechanicKey: body.mechanicKey,
      mechanicName: body.mechanicName,
      mechanicSlug: body.mechanicSlug,
      releaseYear: body.releaseYear || '2026',
      status: body.status || 'Released',
      platforms: platformsStr,
      websiteUrl: body.websiteUrl,
      developer: body.developer,
      publisher: body.publisher || 'Independent Studio',
      coverUrl: body.coverUrl,
      screenshots: screenshotsStr,
      aiScore: body.aiScore || 9.0,
      funScore: body.funScore || 9.0,
      isFeatured: Boolean(body.isFeatured),
      isHot: Boolean(body.isHot),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }).returning();

    return c.json({ success: true, data: insertResult[0] }, 201);
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 400);
  }
});

// ==========================================
// 4. PUT /api/games/:id - Update Game
// ==========================================
gamesRoute.put('/:id', async (c) => {
  const db = drizzle(c.env.DB, { schema });
  const id = parseInt(c.req.param('id'));
  const body = await c.req.json();

  try {
    const updateData: any = {
      ...body,
      updatedAt: new Date().toISOString(),
    };
    if (body.platforms && Array.isArray(body.platforms)) {
      updateData.platforms = JSON.stringify(body.platforms);
    }
    if (body.screenshots && Array.isArray(body.screenshots)) {
      updateData.screenshots = JSON.stringify(body.screenshots);
    }

    const updated = await db
      .update(schema.games)
      .set(updateData)
      .where(eq(schema.games.id, id))
      .returning();

    return c.json({ success: true, data: updated[0] });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 400);
  }
});

// ==========================================
// 5. DELETE /api/games/:id - Delete Game
// ==========================================
gamesRoute.delete('/:id', async (c) => {
  const db = drizzle(c.env.DB, { schema });
  const id = parseInt(c.req.param('id'));

  try {
    await db.delete(schema.games).where(eq(schema.games.id, id));
    return c.json({ success: true, message: 'Game deleted successfully' });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// ==========================================
// 6. POST /api/games/:id/vote - Score & Vote
// ==========================================
gamesRoute.post('/:id/vote', async (c) => {
  const db = drizzle(c.env.DB, { schema });
  const id = parseInt(c.req.param('id'));
  const { aiScore, funScore, isUpvote = true, userId } = await c.req.json();

  try {
    await db.insert(schema.gameVotes).values({
      id: `vote-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      gameId: id,
      userId: userId || null,
      ipAddress: c.req.header('cf-connecting-ip') || '127.0.0.1',
      aiScore: aiScore || null,
      funScore: funScore || null,
      isUpvote: Boolean(isUpvote),
      createdAt: new Date().toISOString(),
    });

    if (isUpvote) {
      await c.env.DB.prepare('UPDATE games SET like_count = like_count + 1 WHERE id = ?')
        .bind(id)
        .run();
    }

    return c.json({ success: true, message: 'Vote recorded successfully' });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
