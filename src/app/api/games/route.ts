export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { filterGames } from '@/lib/data';
import { FilterOptions } from '@/types/game';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const options: FilterOptions = {
    search: searchParams.get('search') || undefined,
    aiType: searchParams.get('aiType') || undefined,
    genre: searchParams.get('genre') || undefined,
    mechanic: searchParams.get('mechanic') || undefined,
    platform: searchParams.get('platform') || undefined,
    status: searchParams.get('status') || undefined,
    sort: (searchParams.get('sort') as FilterOptions['sort']) || 'hot'
  };

  const result = filterGames(options);

  return NextResponse.json({
    success: true,
    total: result.total,
    games: result.items
  });
}
