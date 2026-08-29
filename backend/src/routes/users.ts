import { Hono } from 'hono';
import { drizzle } from 'drizzle-orm/d1';
import { eq, desc, or, like, sql } from 'drizzle-orm';
import * as schema from '../db/schema';
import { EnvBindings } from '../auth';

export const usersRoute = new Hono<{ Bindings: EnvBindings }>();

// =========================================================
// 1. GET /api/admin/users - List & Search Users
// =========================================================
usersRoute.get('/', async (c) => {
  const db = drizzle(c.env.DB, { schema });
  const search = c.req.query('search')?.trim() || '';
  const role = c.req.query('role') || 'ALL';
  const page = Math.max(1, parseInt(c.req.query('page') || '1'));
  const limit = Math.min(50, Math.max(1, parseInt(c.req.query('limit') || '20')));
  const offset = (page - 1) * limit;

  try {
    const conditions = [];

    if (search) {
      const term = `%${search}%`;
      conditions.push(or(like(schema.user.name, term), like(schema.user.email, term)));
    }

    if (role && role !== 'ALL') {
      conditions.push(eq(schema.user.role, role as any));
    }

    const whereClause = conditions.length > 0 ? (conditions.length === 1 ? conditions[0] : sql`(${conditions[0]} AND ${conditions[1]})`) : undefined;

    const [userList, countRes] = await Promise.all([
      db.select({
        id: schema.user.id,
        name: schema.user.name,
        email: schema.user.email,
        emailVerified: schema.user.emailVerified,
        image: schema.user.image,
        role: schema.user.role,
        createdAt: schema.user.createdAt,
      })
      .from(schema.user)
      .where(whereClause as any)
      .orderBy(desc(schema.user.createdAt))
      .limit(limit)
      .offset(offset),

      db.select({ count: sql<number>`count(*)` }).from(schema.user).where(whereClause as any)
    ]);

    const total = countRes[0]?.count || 0;

    return c.json({
      success: true,
      data: userList,
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

// =========================================================
// 2. PUT /api/admin/users/:id/role - Update User Role
// =========================================================
usersRoute.put('/:id/role', async (c) => {
  const db = drizzle(c.env.DB, { schema });
  const id = c.req.param('id');
  const { role } = await c.req.json();

  if (!['user', 'editor', 'admin'].includes(role)) {
    return c.json({ success: false, message: 'Invalid role. Must be user, editor, or admin.' }, 400);
  }

  try {
    const updated = await db
      .update(schema.user)
      .set({ role, updatedAt: new Date() })
      .where(eq(schema.user.id, id))
      .returning();

    if (updated.length === 0) {
      return c.json({ success: false, message: 'User not found' }, 404);
    }

    return c.json({ success: true, message: `User role updated to ${role}`, data: updated[0] });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// =========================================================
// 3. DELETE /api/admin/users/:id - Delete User
// =========================================================
usersRoute.delete('/:id', async (c) => {
  const db = drizzle(c.env.DB, { schema });
  const id = c.req.param('id');

  try {
    await db.delete(schema.user).where(eq(schema.user.id, id));
    return c.json({ success: true, message: 'User deleted successfully' });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});
