import { Hono } from 'hono';
import { drizzle } from 'drizzle-orm/d1';
import { sql, or, like } from 'drizzle-orm';
import * as schema from '../db/schema';
import { EnvBindings } from '../auth';

export const searchRoute = new Hono<{ Bindings: EnvBindings }>();

function sanitizeFts(term: string): string {
  const words = term
    .replace(/[^\w\s\u4e00-\u9fff-]/g, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return '';
  return words.map((w) => `"${w}"*`).join(' AND ');
}

// =========================================================
// GET /api/search?q=... - SQLite FTS5 Full-Text Search
// =========================================================
searchRoute.get('/', async (c) => {
  const query = c.req.query('q')?.trim() || '';
  const limit = Math.min(50, Math.max(1, parseInt(c.req.query('limit') || '20')));

  if (!query) {
    return c.json({ success: true, results: [], total: 0 });
  }

  const db = drizzle(c.env.DB, { schema });
  const ftsPattern = sanitizeFts(query);

  try {
    let results: any[] = [];

    // 1. Try SQLite FTS5 Full-Text Search with BM25 ranking & snippet extraction
    if (ftsPattern) {
      try {
        const ftsQuery = `
          SELECT 
            g.id, g.slug, g.title, g.tagline, g.description, g.ai_role_description,
            g.tier, g.ai_type, g.genre_name, g.genre_slug, g.mechanic_name, g.mechanic_slug,
            g.cover_url, g.ai_score, g.fun_score, g.is_featured, g.is_hot,
            snippet(games_fts, 0, '<mark>', '</mark>', '...', 15) AS title_match,
            snippet(games_fts, 1, '<mark>', '</mark>', '...', 25) AS snippet_match,
            games_fts.rank AS search_rank
          FROM games_fts
          JOIN games g ON g.id = games_fts.rowid
          WHERE games_fts MATCH ?
          ORDER BY games_fts.rank
          LIMIT ?
        `;

        const ftsResp = await c.env.DB.prepare(ftsQuery)
          .bind(ftsPattern, limit)
          .all();

        if (ftsResp.results && ftsResp.results.length > 0) {
          results = ftsResp.results;
        }
      } catch {
        // FTS syntax error or table missing; fall back to LIKE
      }
    }

    // 2. Fallback: Multi-column LIKE Search if FTS returned nothing
    if (results.length === 0) {
      const term = `%${query}%`;
      const likeResults = await db
        .select({
          id: schema.games.id,
          slug: schema.games.slug,
          title: schema.games.title,
          tagline: schema.games.tagline,
          description: schema.games.description,
          aiRoleDescription: schema.games.aiRoleDescription,
          tier: schema.games.tier,
          aiType: schema.games.aiType,
          genreName: schema.games.genreName,
          genreSlug: schema.games.genreSlug,
          mechanicName: schema.games.mechanicName,
          mechanicSlug: schema.games.mechanicSlug,
          coverUrl: schema.games.coverUrl,
          aiScore: schema.games.aiScore,
          funScore: schema.games.funScore,
          isFeatured: schema.games.isFeatured,
          isHot: schema.games.isHot,
        })
        .from(schema.games)
        .where(
          or(
            like(schema.games.title, term),
            like(schema.games.tagline, term),
            like(schema.games.description, term),
            like(schema.games.genreName, term),
            like(schema.games.mechanicName, term),
            like(schema.games.developer, term)
          )
        )
        .limit(limit);

      results = likeResults;
    }

    return c.json({
      success: true,
      query,
      engine: ftsPattern ? 'sqlite-fts5' : 'like-fallback',
      total: results.length,
      results,
    });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
