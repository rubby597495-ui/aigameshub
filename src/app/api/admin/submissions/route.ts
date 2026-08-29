export const runtime = 'edge';

import { NextResponse } from 'next/server';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8790';

export async function GET() {
  try {
    const res = await fetch(`${API_BASE}/api/admin/submissions`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      return NextResponse.json({ success: true, submissions: data.submissions || data.data || [] });
    }
  } catch {
    // Offline fallback
  }
  return NextResponse.json({ success: true, submissions: [] });
}
