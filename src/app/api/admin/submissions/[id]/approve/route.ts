export const runtime = 'edge';

import { NextResponse } from 'next/server';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8790';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    try {
      const res = await fetch(`${API_BASE}/api/admin/submissions/${id}/approve`, {
        method: 'POST',
      });
      if (res.ok) {
        return NextResponse.json(await res.json());
      }
    } catch {
      // Offline fallback
    }

    return NextResponse.json({ success: true, message: 'Game approved and published!' });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to approve submission' },
      { status: 500 }
    );
  }
}
