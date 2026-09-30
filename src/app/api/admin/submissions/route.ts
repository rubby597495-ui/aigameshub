export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { getSubmissionsStore } from '@/lib/submissions-store';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export async function GET() {
  if (API_BASE) {
    try {
      const res = await fetch(`${API_BASE}/api/admin/submissions`, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data.submissions && data.submissions.length > 0) {
          return NextResponse.json({ success: true, submissions: data.submissions });
        }
      }
    } catch {
      // Fallback to internal store
    }
  }

  const submissions = getSubmissionsStore().filter((s) => s.status === 'PENDING');
  return NextResponse.json({ success: true, submissions });
}
