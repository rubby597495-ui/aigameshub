'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { GameCard } from '@/components/game/GameCard';
import { Pagination } from '@/components/ui/Pagination';
import { getAllGames } from '@/lib/data';
import { useUserAuth } from '@/contexts/UserAuthContext';
import { 
  Bookmark, 
  Heart, 
  Gamepad2, 
  Sparkles, 
  ArrowRight, 
  User, 
  SlidersHorizontal,
  Trash2
} from 'lucide-react';
import { CATEGORIES, AI_TYPES } from '@/data/categories';

export default function BookmarksPage() {
  const { user, bookmarks, openAuthModal } = useUserAuth();
  const [selectedTier, setSelectedTier] = useState('ALL');
  const [selectedGenre, setSelectedGenre] = useState('ALL');
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 16;

  useEffect(() => {
    setPage(1);
  }, [selectedTier, selectedGenre]);

  const allGames = getAllGames();
  const bookmarkedGames = allGames.filter((g) => bookmarks.includes(g.id));

  // Filter
  const filteredGames = bookmarkedGames.filter((g) => {
    const matchesTier = selectedTier === 'ALL' || g.tier === selectedTier;
    const matchesGenre = selectedGenre === 'ALL' || g.genreSlug === selectedGenre;
    return matchesTier && matchesGenre;
  });

  const totalPages = Math.max(1, Math.ceil(filteredGames.length / PAGE_SIZE));
  const paginatedGames = filteredGames.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ name: 'My Bookmarks', url: '/bookmarks' }]} />

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-100 flex items-center gap-2.5">
            <Heart className="h-7 w-7 text-pink-400 fill-pink-400" />
            <span>My Bookmarks ({bookmarks.length})</span>
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-stone-400">
            Your saved AI games synced in real time across all your devices.
          </p>
        </div>

        {!user ? (
          <button
            type="button"
            onClick={() => openAuthModal('login')}
            className="inline-flex items-center gap-2 rounded-xl bg-[#8FAFA3] px-4 py-2.5 text-xs font-bold text-[#101715] hover:bg-[#A2BDB3] transition shadow-md"
          >
            <User className="h-4 w-4" />
            <span>Sign in to Sync Bookmarks</span>
          </button>
        ) : (
          <Link
            href="/profile"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-stone-200 hover:bg-white/10 transition"
          >
            <Gamepad2 className="h-4 w-4 text-emerald-400" />
            <span>View Play History & Ratings →</span>
          </Link>
        )}
      </div>

      {/* Empty State */}
      {bookmarks.length === 0 ? (
        <div className="archive-surface rounded-3xl border border-white/10 p-12 text-center space-y-4">
          <div className="grid h-16 w-16 mx-auto place-items-center rounded-2xl bg-white/[0.03] border border-white/10 text-stone-500">
            <Bookmark className="h-8 w-8 text-stone-500" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-100">No Bookmarks Saved Yet</h3>
            <p className="text-xs text-stone-400 max-w-md mx-auto">
              Explore our library of 90+ verified AI-native games and click the bookmark button (🔖) on any title to save it here.
            </p>
          </div>
          <Link
            href="/games"
            className="inline-flex items-center gap-2 rounded-xl bg-[#8FAFA3] px-5 py-2.5 text-xs font-bold text-[#101715] hover:bg-[#A2BDB3] transition shadow"
          >
            <Gamepad2 className="h-4 w-4" />
            <span>Explore AI Game Library</span>
          </Link>
        </div>
      ) : (
        <>
          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={selectedTier}
              onChange={(e) => setSelectedTier(e.target.value)}
              className="h-9 rounded-xl border border-white/10 bg-[#121619] px-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
            >
              <option value="ALL">All AI Tiers</option>
              <option value="AI-Native">AI-Native</option>
              <option value="AI-Augmented">AI-Augmented</option>
              <option value="AI-Boundary">AI-Boundary</option>
            </select>

            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="h-9 rounded-xl border border-white/10 bg-[#121619] px-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
            >
              <option value="ALL">All Genres</option>
              {CATEGORIES.map((c) => (
                <option key={c.slug} value={c.slug}>{c.name}</option>
              ))}
            </select>
          </div>

          {/* Games Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {paginatedGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>

            {/* Pagination Controls */}
            {filteredGames.length > PAGE_SIZE && (
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                totalItems={filteredGames.length}
                pageSize={PAGE_SIZE}
                onPageChange={setPage}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
