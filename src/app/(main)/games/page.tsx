export const runtime = 'edge';

import React from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { GameFilter } from '@/components/game/GameFilter';
import { GameCard } from '@/components/game/GameCard';
import { Pagination } from '@/components/ui/Pagination';
import { filterGames } from '@/lib/data';
import { constructMetadata, generateCollectionJsonLd } from '@/lib/seo';
import { FilterOptions } from '@/types/game';
import { Gamepad2 } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Play AI Games Online - Curated AI-Native Games Library',
  description:
    'Browse 90+ top AI video games, generative RPGs, AI NPC interrogations & infinite sandboxes. Filter by AI mechanic, platform & genre on AiGamesHub.',
  keywords: [
    'play AI games',
    'AI game library',
    'AI native games',
    'generative AI games online',
    'AI RPG list',
    'free AI video games'
  ]
});

interface GamesPageProps {
  searchParams: Promise<{
    search?: string;
    aiType?: string;
    genre?: string;
    mechanic?: string;
    platform?: string;
    status?: string;
    sort?: 'hot' | 'latest' | 'top_rated' | 'most_liked' | 'most_bookmarked' | 'random';
    page?: string;
  }>;
}

export default async function GamesPage({ searchParams }: GamesPageProps) {
  const params = await searchParams;
  const currentPage = params.page ? Math.max(1, parseInt(params.page, 10) || 1) : 1;
  const PAGE_SIZE = 24;

  const filterOptions: FilterOptions = {
    search: params.search,
    aiType: params.aiType,
    genre: params.genre,
    mechanic: params.mechanic,
    platform: params.platform,
    status: params.status,
    sort: params.sort || 'hot',
    page: currentPage,
    pageSize: PAGE_SIZE,
  };

  const { items: filteredGames, total, totalPages } = filterGames(filterOptions);

  const collectionJsonLd = generateCollectionJsonLd(
    'AI Video Games Catalog',
    'Curated directory of AI-native and AI-augmented games',
    filteredGames
  );

  return (
    <div className="space-y-6">
      {/* Schema.org CollectionPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Game Library', url: '/games' }
        ]}
      />

      {/* Page Header */}
      <div className="border-b border-white/10 pb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-100 flex items-center gap-2.5">
          <Gamepad2 className="h-7 w-7 text-emerald-400" />
          <span>AI Game Library</span>
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-stone-400 max-w-3xl leading-relaxed">
          Filter and discover 90+ verified titles where Large Language Models, generative diffusion, and autonomous agents transform interactive storytelling, puzzle solving, and roleplay.
        </p>
      </div>

      {/* Filter Matrix */}
      <GameFilter
        currentAiType={params.aiType}
        currentGenre={params.genre}
        currentMechanic={params.mechanic}
        currentPlatform={params.platform}
        currentSort={params.sort}
        currentSearch={params.search}
        totalCount={total}
      />

      {/* Games Grid */}
      {filteredGames.length > 0 ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          {/* Pagination Controls */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={total}
            pageSize={PAGE_SIZE}
            baseUrl="/games"
            searchParams={params}
          />
        </div>
      ) : (
        <div className="archive-surface rounded-2xl p-12 text-center space-y-3">
          <p className="text-base font-semibold text-stone-300">
            No games found matching your current filter criteria.
          </p>
          <p className="text-xs text-stone-500">
            Try adjusting your search query, or clear some filter dimensions.
          </p>
        </div>
      )}
    </div>
  );
}
