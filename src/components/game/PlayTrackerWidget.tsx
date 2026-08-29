'use client';

import React, { useState } from 'react';
import { 
  Gamepad2, 
  Sparkles, 
  Bookmark, 
  CheckCircle2, 
  Star, 
  Clock, 
  Trophy, 
  Heart,
  User,
  ThumbsUp,
  Share2
} from 'lucide-react';
import { Game } from '@/types/game';
import { useUserAuth } from '@/contexts/UserAuthContext';
import { cn } from '@/lib/utils';

interface PlayTrackerWidgetProps {
  game: Game;
}

export function PlayTrackerWidget({ game }: PlayTrackerWidgetProps) {
  const { 
    user, 
    isBookmarked, 
    toggleBookmark, 
    getPlayActivity, 
    setPlayStatus, 
    rateGame,
    getUserRating,
    hasLiked,
    toggleLike,
    openAuthModal 
  } = useUserAuth();

  const activity = getPlayActivity(game.id);
  const bookmarked = isBookmarked(game.id);
  const userScore = getUserRating(game.id);
  const isLiked = hasLiked(game.id);

  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [justSaved, setJustSaved] = useState(false);
  const [localRatingOffset, setLocalRatingOffset] = useState<number | null>(null);

  const currentStatus = activity?.status;
  const activeRating = userScore || localRatingOffset || (game.aiScore > 0 ? game.aiScore : undefined);

  // Compute live rating count
  const baseCount = game.ratingCount || (game.aiScore > 0 ? 1 : 0);
  const totalRatingsCount = baseCount + (userScore || localRatingOffset ? 1 : 0);

  const handleStatusClick = (status: 'want_to_play' | 'playing' | 'played') => {
    const nextStatus = currentStatus === status ? 'want_to_play' : status;
    setPlayStatus(game.id, nextStatus);
    triggerSavedFeedback();
  };

  const handleRatingClick = (ratingVal: number) => {
    rateGame(game.id, ratingVal);
    setLocalRatingOffset(ratingVal);
    triggerSavedFeedback();
  };

  const triggerSavedFeedback = () => {
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2000);
  };

  return (
    <div className="archive-surface rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 space-y-5 shadow-lg">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3.5">
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 shadow-inner">
            <Gamepad2 className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-stone-100 flex items-center gap-2">
              <span>Community Rating & Tracker</span>
              {justSaved && (
                <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400 animate-fadeIn">
                  <CheckCircle2 className="h-3 w-3" /> Saved!
                </span>
              )}
            </h3>
            <p className="text-[11px] text-stone-400">
              {totalRatingsCount > 0
                ? `Based on ${totalRatingsCount} verified community evaluation${totalRatingsCount > 1 ? 's' : ''}`
                : 'No ratings yet — be the first to evaluate this AI game!'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick Like Button (Open for guests) */}
          <button
            type="button"
            onClick={() => toggleLike(game.id)}
            className={cn(
              "flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition shadow-sm",
              isLiked
                ? "border-rose-500/50 bg-rose-500/20 text-rose-300"
                : "border-white/10 bg-white/[0.04] text-stone-300 hover:bg-white/[0.08]"
            )}
          >
            <ThumbsUp className={cn("h-3.5 w-3.5", isLiked && "fill-rose-400 text-rose-400")} />
            <span>{isLiked ? 'Upvoted' : 'Upvote'}</span>
          </button>

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={() => toggleBookmark(game.id)}
            className={cn(
              "flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition shadow-sm",
              bookmarked
                ? "border-pink-500/50 bg-pink-500/20 text-pink-300"
                : "border-white/10 bg-white/[0.04] text-stone-300 hover:bg-white/[0.08]"
            )}
          >
            <Heart className={cn("h-3.5 w-3.5", bookmarked && "fill-pink-400 text-pink-400")} />
            <span>{bookmarked ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>

      {/* 1. Rating Selector (1 to 10) */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <div>
            <label className="block text-xs font-semibold text-stone-200">
              Rate AI Depth & Gameplay (1 - 10 Score)
            </label>
            <span className="text-[10px] text-stone-400">
              Click a star to submit your rating (Open to all visitors)
            </span>
          </div>
          <div className="text-right">
            <span className="text-sm font-bold text-amber-300 font-mono">
              {hoverRating ? `${hoverRating}.0 / 10` : activeRating ? `${activeRating.toFixed(1)} / 10` : 'Unrated'}
            </span>
            <p className="text-[10px] text-stone-400 font-mono">
              {totalRatingsCount} total rating{totalRatingsCount === 1 ? '' : 's'}
            </p>
          </div>
        </div>

        {/* 10-point Interactive Star Grid */}
        <div className="flex items-center justify-between gap-1 rounded-2xl border border-white/10 bg-[#121619] p-3 shadow-inner">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((starVal) => {
            const active = (hoverRating || activeRating || 0) >= starVal;
            return (
              <button
                key={starVal}
                type="button"
                onMouseEnter={() => setHoverRating(starVal)}
                onMouseLeave={() => setHoverRating(null)}
                onClick={() => handleRatingClick(starVal)}
                className="grid h-8 w-8 place-items-center rounded-xl hover:bg-white/10 transition group"
                title={`Rate ${starVal} out of 10`}
              >
                <Star
                  className={cn(
                    "h-5 w-5 transition",
                    active
                      ? "fill-amber-400 text-amber-400 scale-110"
                      : "text-stone-600 group-hover:text-stone-400"
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Play Status Tabs */}
      <div className="space-y-2 pt-2 border-t border-white/10">
        <label className="block text-xs font-semibold text-stone-200">
          Your Play Progress (Optional)
        </label>
        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => handleStatusClick('want_to_play')}
            className={cn(
              "flex flex-col items-center justify-center gap-1 rounded-xl border p-2.5 text-xs font-medium transition",
              currentStatus === 'want_to_play'
                ? "border-blue-400/50 bg-blue-500/15 text-blue-200 shadow"
                : "border-white/10 bg-white/[0.02] text-stone-400 hover:bg-white/[0.05] hover:text-stone-200"
            )}
          >
            <Clock className="h-4 w-4 text-blue-400" />
            <span>Plan to Play</span>
          </button>

          <button
            type="button"
            onClick={() => handleStatusClick('playing')}
            className={cn(
              "flex flex-col items-center justify-center gap-1 rounded-xl border p-2.5 text-xs font-medium transition",
              currentStatus === 'playing'
                ? "border-amber-400/50 bg-amber-500/15 text-amber-200 shadow"
                : "border-white/10 bg-white/[0.02] text-stone-400 hover:bg-white/[0.05] hover:text-stone-200"
            )}
          >
            <Gamepad2 className="h-4 w-4 text-amber-400" />
            <span>Playing</span>
          </button>

          <button
            type="button"
            onClick={() => handleStatusClick('played')}
            className={cn(
              "flex flex-col items-center justify-center gap-1 rounded-xl border p-2.5 text-xs font-medium transition",
              currentStatus === 'played'
                ? "border-emerald-400/50 bg-emerald-500/15 text-emerald-200 shadow"
                : "border-white/10 bg-white/[0.02] text-stone-400 hover:bg-white/[0.05] hover:text-stone-200"
            )}
          >
            <Trophy className="h-4 w-4 text-emerald-400" />
            <span>Played / Done</span>
          </button>
        </div>
      </div>

      {!user && (
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center text-[11px] text-stone-400">
          <span>Guest ratings are saved instantly. </span>
          <button
            type="button"
            onClick={() => openAuthModal('login')}
            className="text-emerald-400 hover:underline font-semibold ml-1"
          >
            Sign in to sync your library across devices →
          </button>
        </div>
      )}
    </div>
  );
}
