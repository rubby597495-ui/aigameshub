export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { updateUserInStore } from '@/lib/user-store';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();

  if (API_BASE) {
    try {
      const res = await fetch(`${API_BASE}/api/admin/users/${id}/role`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        const data = await res.json();
        return NextResponse.json(data);
      }
    } catch {
      // Fallback to internal user store
    }
  }

  const updated = updateUserInStore(id, { role: body.role });

  return NextResponse.json({
    success: true,
    data: updated,
    message: `Role updated to ${body.role} for user ${id}`,
  });
}
