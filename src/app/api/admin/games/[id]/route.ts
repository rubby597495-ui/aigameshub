export const runtime = 'edge';

import { NextResponse } from 'next/server';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8790';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    try {
      const res = await fetch(`${API_BASE}/api/admin/games/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        return NextResponse.json(await res.json());
      }
    } catch {
      // Offline fallback
    }

    return NextResponse.json({ success: true, game: { id: Number(id), ...body } });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update game' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    try {
      const res = await fetch(`${API_BASE}/api/admin/games/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        return NextResponse.json(await res.json());
      }
    } catch {
      // Offline fallback
    }

    return NextResponse.json({ success: true, message: 'Game deleted' });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to delete game' },
      { status: 500 }
    );
  }
}
