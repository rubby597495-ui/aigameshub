'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Flame, ExternalLink, Sparkles, Eye, ThumbsUp, Star } from 'lucide-react';
import { Game } from '@/types/game';
import { formatNumber, cn, getTierBadgeStyle } from '@/lib/utils';
import { useUserAuth } from '@/contexts/UserAuthContext';

interface GameCardProps {
  game: Game;
  priority?: boolean;
  compact?: boolean;
}

export function GameCard({ game, priority = false, compact = false }: GameCardProps) {
  const { 
    isBookmarked, 
    toggleBookmark: toggleUserBookmark,
    hasLiked: checkHasLiked,
    toggleLike: triggerUserLike,
    getUserRating
  } = useUserAuth();

  const bookmarked = isBookmarked(game.id);
  const isLiked = checkHasLiked(game.id);
  const userScore = getUserRating(game.id);

  // Compute live like count with local interaction
  const [localLikeOffset, setLocalLikeOffset] = useState(0);

  const handleToggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleUserBookmark(game.id);
  };

  const handleToggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const isNowLiked = triggerUserLike(game.id);
    setLocalLikeOffset((prev) => (isNowLiked ? prev + 1 : prev - 1));
  };

  const totalLikes = Math.max(0, game.likeCount + localLikeOffset);
  const effectiveScore = userScore || game.aiScore;
  const effectiveRatingsCount = (game.ratingCount || 0) + (userScore && game.aiScore === 0 ? 1 : 0);

  return (
    <article className="archive-surface group relative flex flex-col h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-black/40">
      {/* Top Floating Badges */}
      <div className="absolute left-2.5 top-2.5 z-20 flex items-center gap-1.5 pointer-events-none">
        <span className={cn(
          "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold backdrop-blur-md shadow-sm",
          getTierBadgeStyle(game.tier)
        )}>
          {game.tier === 'AI-Native' ? '🌱 AI Native' : game.tier === 'AI-Augmented' ? '🔵 Augmented' : '🟠 Boundary'}
        </span>
        {game.isHot && (
          <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/20 px-2 py-0.5 text-[10px] font-semibold text-amber-200 backdrop-blur-md shadow-sm">
            🔥 Hot
          </span>
        )}
      </div>

      {/* Floating Bookmark Button */}
      <div className="absolute right-2.5 top-2.5 z-20">
        <button
          type="button"
          onClick={handleToggleBookmark}
          aria-label={bookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
          className={cn(
            "grid h-8 w-8 place-items-center rounded-full border text-xs shadow-lg backdrop-blur-md transition duration-150",
            bookmarked
              ? "border-rose-500/50 bg-rose-500/30 text-rose-300"
              : "border-white/15 bg-black/50 text-stone-300 hover:bg-black/80 hover:text-white"
          )}
        >
          <Heart className={cn("h-4 w-4", bookmarked && "fill-rose-400 text-rose-400")} />
        </button>
      </div>

      {/* Game Cover Image */}
      <Link href={`/games/${game.slug}`} prefetch={true} className="relative block aspect-[16/9] w-full shrink-0 overflow-hidden bg-stone-900">
        <img
          src={game.coverUrl}
          alt={`${game.title} - AI Game`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Platforms Badge on Image */}
        <div className="absolute bottom-2 left-2.5 flex flex-wrap gap-1">
          {game.platforms.slice(0, 2).map((plat) => (
            <span key={plat} className="rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-medium text-stone-300 backdrop-blur">
              {plat}
            </span>
          ))}
        </div>

        {/* AI Score & Ratings Count Badge */}
        <div className="absolute bottom-2 right-2.5 flex items-center gap-1 rounded bg-emerald-950/85 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold text-emerald-300 backdrop-blur shadow">
          <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
          <span>
            {effectiveScore > 0 ? (
              `${effectiveScore.toFixed(1)} (${effectiveRatingsCount})`
            ) : (
              'Unrated (0)'
            )}
          </span>
        </div>
      </Link>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col justify-between p-3.5 gap-2.5">
        <div>
          {/* Title & Developer */}
          <div className="flex items-start justify-between gap-2">
            <Link 
              href={`/games/${game.slug}`}
              className="line-clamp-1 font-semibold text-stone-100 group-hover:text-emerald-300 transition text-sm sm:text-base"
              title={game.title}
            >
              {game.title}
            </Link>
          </div>
          
          <p className="text-[11px] text-stone-400 truncate mt-0.5">
            By <span className="text-stone-300">{game.developer}</span> • {game.releaseYear}
          </p>

          {/* Description Tagline (Fixed 2 lines height) */}
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-stone-400 h-[2.5rem] overflow-hidden">
            {game.tagline || game.description}
          </p>
        </div>

        {/* Categories & AI Mechanism Badges (Standardized min-height) */}
        <div className="flex flex-wrap items-center content-start gap-1.5 pt-1 min-h-[3.25rem]">
          <span className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-stone-300">
            {game.genreName}
          </span>
          <span className="inline-flex items-center rounded-md border border-emerald-400/20 bg-emerald-400/5 px-2 py-0.5 text-[10px] text-emerald-300">
            {game.mechanicName}
          </span>
        </div>

        {/* Card Footer: Metrics & Details CTA (Anchored to bottom) */}
        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-2.5 text-xs text-stone-400">
          <div className="flex items-center gap-3 text-[11px]">
            <span className="inline-flex items-center gap-1" title={`${game.viewCount} views`}>
              <Flame className="h-3 w-3 text-amber-400" />
              <span>{formatNumber(game.viewCount)}</span>
            </span>
            <button
              type="button"
              onClick={handleToggleLike}
              className={cn(
                "inline-flex items-center gap-1 hover:text-stone-200 transition",
                isLiked && "text-rose-400 font-semibold"
              )}
              title="Upvote game"
            >
              <ThumbsUp className={cn("h-3 w-3", isLiked && "fill-rose-400 text-rose-400")} />
              <span>{formatNumber(totalLikes)}</span>
            </button>
          </div>

          <Link
            href={`/games/${game.slug}`}
            className="rounded-md bg-[#2A3442] px-2.5 py-1 text-[11px] font-semibold text-[#D8E1EA] hover:bg-[#344255] hover:text-white transition"
          >
            Explore →
          </Link>
        </div>
      </div>
    </article>
  );
}
