import { Hono } from 'hono';
import { drizzle } from 'drizzle-orm/d1';
import { eq, desc } from 'drizzle-orm';
import * as schema from '../db/schema';
import { EnvBindings } from '../auth';

export const submissionsRoute = new Hono<{ Bindings: EnvBindings }>();

// =========================================================
// 1. POST /api/submissions - Public Game Submission
// =========================================================
submissionsRoute.post('/', async (c) => {
  const db = drizzle(c.env.DB, { schema });
  const body = await c.req.json();

  try {
    const id = `sub-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    const platformsStr = Array.isArray(body.platforms)
      ? JSON.stringify(body.platforms)
      : JSON.stringify(['Browser']);

    const newSub = await db.insert(schema.submissions).values({
      id,
      userId: body.userId || null,
      title: body.title,
      websiteUrl: body.websiteUrl,
      developer: body.developer,
      contactEmail: body.contactEmail || null,
      tier: body.tier || 'AI-Native',
      genre: body.genre || 'narrative-adventure',
      mechanic: body.mechanic || 'ai-npc-interrogation',
      platforms: platformsStr,
      tagline: body.tagline || '',
      description: body.description || '',
      aiRoleDescription: body.aiRoleDescription || '',
      status: 'PENDING',
      createdAt: new Date().toISOString(),
    }).returning();

    return c.json({ success: true, data: newSub[0] }, 201);
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 400);
  }
});

// =========================================================
// 2. GET /api/submissions - List Pending Submissions
// =========================================================
submissionsRoute.get('/', async (c) => {
  const db = drizzle(c.env.DB, { schema });
  const status = c.req.query('status') || 'PENDING';

  try {
    const list = await db
      .select()
      .from(schema.submissions)
      .where(status !== 'ALL' ? eq(schema.submissions.status, status as any) : undefined)
      .orderBy(desc(schema.submissions.createdAt));

    return c.json({
      success: true,
      data: list.map((item) => ({
        ...item,
        platforms: JSON.parse(item.platforms || '["Browser"]'),
      })),
    });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// =========================================================
// 3. POST /api/submissions/:id/approve - Approve & Publish
// =========================================================
submissionsRoute.post('/:id/approve', async (c) => {
  const db = drizzle(c.env.DB, { schema });
  const id = c.req.param('id');

  try {
    const sub = await db.query.submissions.findFirst({
      where: eq(schema.submissions.id, id),
    });

    if (!sub) {
      return c.json({ success: false, message: 'Submission not found' }, 404);
    }

    // Generate slug from title
    const slug = sub.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    // Insert into games table
    await db.insert(schema.games).values({
      slug,
      title: sub.title,
      tagline: sub.tagline,
      description: sub.description || `${sub.title} is an AI game.`,
      aiRoleDescription: sub.aiRoleDescription,
      tier: sub.tier as any,
      aiType: sub.tier === 'AI-Native' ? 'AI_NATIVE' : 'AI_AUGMENTED',
      genreKey: sub.genre,
      genreName: sub.genre.replace('-', ' '),
      genreSlug: sub.genre,
      mechanicKey: sub.mechanic,
      mechanicName: sub.mechanic.replace('-', ' '),
      mechanicSlug: sub.mechanic,
      platforms: sub.platforms,
      websiteUrl: sub.websiteUrl,
      developer: sub.developer,
      publisher: sub.developer,
      coverUrl: '/images/placeholders/narrative-adventure.jpg',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    // Update submission status to APPROVED
    await db
      .update(schema.submissions)
      .set({ status: 'APPROVED' })
      .where(eq(schema.submissions.id, id));

    return c.json({ success: true, message: 'Submission approved and published to catalog' });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// =========================================================
// 4. POST /api/submissions/:id/reject - Reject
// =========================================================
submissionsRoute.post('/:id/reject', async (c) => {
  const db = drizzle(c.env.DB, { schema });
  const id = c.req.param('id');

  try {
    await db
      .update(schema.submissions)
      .set({ status: 'REJECTED' })
      .where(eq(schema.submissions.id, id));

    return c.json({ success: true, message: 'Submission rejected' });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
