export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { getSubmissionsStore } from '@/lib/submissions-store';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8790';

export async function GET() {
  try {
    const res = await fetch(`${API_BASE}/api/admin/submissions`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data.submissions && data.submissions.length > 0) {
        return NextResponse.json({ success: true, submissions: data.submissions });
      }
    }
  } catch {
    // Fallback to local edge memory store
  }

  const submissions = getSubmissionsStore().filter(s => s.status === 'PENDING');
  return NextResponse.json({ success: true, submissions });
}
