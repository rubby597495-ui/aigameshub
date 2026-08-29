import { Game, FilterOptions } from '@/types/game';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8790';

export interface FtsSearchResult {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  aiRoleDescription: string;
  tier: string;
  aiType: string;
  genreName: string;
  genreSlug: string;
  mechanicName: string;
  mechanicSlug: string;
  coverUrl: string;
  aiScore: number;
  funScore: number;
  isFeatured: boolean;
  isHot: boolean;
  title_match?: string;
  snippet_match?: string;
}

export interface FtsSearchResponse {
  success: boolean;
  query: string;
  engine: string;
  total: number;
  results: FtsSearchResult[];
}

export async function searchGamesFts(query: string, limit = 20): Promise<FtsSearchResponse> {
  if (!query.trim()) {
    return { success: true, query: '', engine: 'none', total: 0, results: [] };
  }

  try {
    const res = await fetch(`${API_BASE}/api/search?q=${encodeURIComponent(query)}&limit=${limit}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error('Search failed');
    return await res.json();
  } catch (err) {
    console.error('FTS5 Search API error:', err);
    return { success: false, query, engine: 'error', total: 0, results: [] };
  }
}

export async function fetchGamesApi(options: FilterOptions = {}, page = 1, limit = 50) {
  try {
    const params = new URLSearchParams();
    if (options.search) params.set('search', options.search);
    if (options.aiType && options.aiType !== 'ALL') params.set('aiType', options.aiType);
    if (options.genre && options.genre !== 'all') params.set('genre', options.genre);
    if (options.mechanic && options.mechanic !== 'all') params.set('mechanic', options.mechanic);
    if (options.platform && options.platform !== 'all') params.set('platform', options.platform);
    if (options.status && options.status !== 'all') params.set('status', options.status);
    if (options.sort) params.set('sort', options.sort);
    params.set('page', String(page));
    params.set('limit', String(limit));

    const res = await fetch(`${API_BASE}/api/games?${params.toString()}`, {
      next: { revalidate: 30 },
    });
    if (!res.ok) throw new Error('Fetch games failed');
    return await res.json();
  } catch (err) {
    console.error('Fetch games API error:', err);
    return null;
  }
}

export async function uploadToR2(file: File, folder = 'covers'): Promise<{ success: boolean; url?: string; error?: string }> {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', folder);

    const res = await fetch(`${API_BASE}/api/upload`, {
      method: 'POST',
      body: formData,
    });
    return await res.json();
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}
