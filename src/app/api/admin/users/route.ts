export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { getUsersStore, registerOrUpdateUser } from '@/lib/user-store';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search')?.toLowerCase() || '';
  const role = searchParams.get('role') || 'ALL';
  const provider = searchParams.get('provider') || 'ALL';
  const status = searchParams.get('status') || 'ALL';

  let users = [...getUsersStore()];

  if (search) {
    users = users.filter(
      (u) =>
        u.name.toLowerCase().includes(search) ||
        u.email.toLowerCase().includes(search) ||
        u.id.toLowerCase().includes(search)
    );
  }

  if (role !== 'ALL') {
    users = users.filter((u) => u.role === role);
  }

  if (provider !== 'ALL') {
    users = users.filter((u) => u.provider === provider);
  }

  if (status !== 'ALL') {
    users = users.filter((u) => u.status === status);
  }

  return NextResponse.json({
    success: true,
    data: users,
    total: users.length,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.email) {
      return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 });
    }

    const user = registerOrUpdateUser(body);
    return NextResponse.json({ success: true, data: user });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
