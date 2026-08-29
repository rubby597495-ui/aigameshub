import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { ADMIN_COOKIE_NAME, DEFAULT_ADMIN_PASSWORD } from '@/lib/admin-auth';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (password === DEFAULT_ADMIN_PASSWORD) {
      const cookieStore = await cookies();
      cookieStore.set(ADMIN_COOKIE_NAME, 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/'
      });

      return NextResponse.json({ success: true, message: 'Authentication successful' });
    }

    return NextResponse.json(
      { success: false, error: 'Invalid admin credentials' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
  return NextResponse.json({ success: true, message: 'Logged out' });
}
