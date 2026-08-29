import { cookies } from 'next/headers';

export const ADMIN_COOKIE_NAME = 'aigames_admin_session';
export const DEFAULT_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'aigameshub2026';

export async function verifyAdminAuth(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE_NAME);
  return session?.value === 'authenticated';
}
