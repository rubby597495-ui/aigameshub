export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { getPlatformStats } from '@/lib/data';

export async function GET() {
  const stats = getPlatformStats();
  return NextResponse.json({
    success: true,
    stats
  });
}
