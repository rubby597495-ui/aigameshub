import { Hono } from 'hono';
import { drizzle } from 'drizzle-orm/d1';
import { sql, eq } from 'drizzle-orm';
import * as schema from '../db/schema';
import { EnvBindings } from '../auth';

export const statsRoute = new Hono<{ Bindings: EnvBindings }>();

statsRoute.get('/', async (c) => {
  const db = drizzle(c.env.DB, { schema });

  try {
    const [totalGamesRes, aiNativeRes, aiAugmentedRes, totalViewsRes, pendingSubsRes] = await Promise.all([
      db.select({ count: sql<number>`count(*)` }).from(schema.games),
      db.select({ count: sql<number>`count(*)` }).from(schema.games).where(eq(schema.games.tier, 'AI-Native')),
      db.select({ count: sql<number>`count(*)` }).from(schema.games).where(eq(schema.games.tier, 'AI-Augmented')),
      db.select({ sum: sql<number>`sum(view_count)` }).from(schema.games),
      db.select({ count: sql<number>`count(*)` }).from(schema.submissions).where(eq(schema.submissions.status, 'PENDING')),
    ]);

    return c.json({
      success: true,
      data: {
        totalGames: totalGamesRes[0]?.count || 0,
        aiNativeCount: aiNativeRes[0]?.count || 0,
        aiAugmentedCount: aiAugmentedRes[0]?.count || 0,
        totalViews: totalViewsRes[0]?.sum || 0,
        pendingSubmissions: pendingSubsRes[0]?.count || 0,
      },
    });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
