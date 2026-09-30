export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { updateGame, deleteGame } from '@/lib/data';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    if (API_BASE) {
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
        // Fallback to internal store
      }
    }

    const updated = updateGame(Number(id), body);
    return NextResponse.json({
      success: true,
      game: updated || { id: Number(id), ...body },
      message: 'Game updated successfully',
    });
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

    if (API_BASE) {
      try {
        const res = await fetch(`${API_BASE}/api/admin/games/${id}`, {
          method: 'DELETE',
        });
        if (res.ok) {
          return NextResponse.json(await res.json());
        }
      } catch {
        // Fallback to internal store
      }
    }

    const deleted = deleteGame(Number(id));
    return NextResponse.json({
      success: true,
      deleted,
      message: deleted ? 'Game deleted successfully' : 'Game not found',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to delete game' },
      { status: 500 }
    );
  }
}
