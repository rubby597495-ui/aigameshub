export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { updateSubmissionStatus } from '@/lib/submissions-store';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8790';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const res = await fetch(`${API_BASE}/api/admin/submissions/${id}/reject`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data);
    }
  } catch {
    // Fallback to memory store update
  }

  updateSubmissionStatus(id, 'REJECTED');

  return NextResponse.json({
    success: true,
    message: `Submission ${id} rejected successfully`,
  });
}
