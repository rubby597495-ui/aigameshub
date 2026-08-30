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
  ThumbsUp, 
  Award,
  Flame
} from 'lucide-react';
import { Game } from '@/types/game';
import { useUserAuth } from '@/contexts/UserAuthContext';
import { cn, formatNumber } from '@/lib/utils';

interface PlayTrackerWidgetProps {
  game: Game;
}

const RATING_LABELS: Record<number, string> = {
  1: '1.0 - Bare minimal AI elements',
  2: '2.0 - Superficial prompt wrapper',
  3: '3.0 - Basic AI integration',
  4: '4.0 - Promising AI concept',
  5: '5.0 - Average AI gameplay',
  6: '6.0 - Solid emergent mechanics',
  7: '7.0 - Good AI autonomy & fun',
  8: '8.0 - High AI depth & replayability',
  9: '9.0 - Exceptional AI innovation',
  10: '10.0 - Masterpiece AI-Native experience'
};

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
    getGameLikes,
    openAuthModal 
  } = useUserAuth();

  const activity = getPlayActivity(game.id);
  const bookmarked = isBookmarked(game.id);
  const userScore = getUserRating(game.id);
  const isLiked = hasLiked(game.id);
  const totalLikes = getGameLikes(game.id, game.likeCount);

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
    setTimeout(() => setJustSaved(false), 2200);
  };

  // Determine current display score label
  const displayedScore = hoverRating || activeRating || 0;
  const currentLabel = hoverRating 
    ? RATING_LABELS[hoverRating] 
    : activeRating && RATING_LABELS[Math.round(activeRating)]
      ? RATING_LABELS[Math.round(activeRating)]
      : 'Click a star to submit your rating (Open to all)';

  return (
    <div className="archive-surface rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-7 space-y-6 shadow-xl">
      {/* 1. Header: Unified Title + Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 shadow-inner shrink-0">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-stone-100 flex items-center gap-2">
              <span>Community Evaluation & Play Tracker</span>
              {justSaved && (
                <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-400/30 px-2 py-0.5 rounded-full animate-fadeIn">
                  <CheckCircle2 className="h-3 w-3" /> Saved!
                </span>
              )}
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              {totalRatingsCount > 0
                ? `Based on ${totalRatingsCount} verified community evaluation${totalRatingsCount > 1 ? 's' : ''} • Cast your vote & log progress`
                : 'No ratings yet — be the first to evaluate this AI game!'}
            </p>
          </div>
        </div>

        {/* Upvote & Save CTAs */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => toggleLike(game.id)}
            className={cn(
              "flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-semibold transition shadow-sm",
              isLiked
                ? "border-rose-500/50 bg-rose-500/20 text-rose-300 shadow-rose-950/30"
                : "border-white/10 bg-white/[0.04] text-stone-300 hover:bg-white/[0.08]"
            )}
            title={isLiked ? "Click to remove upvote" : "Click to upvote game"}
          >
            <ThumbsUp className={cn("h-3.5 w-3.5", isLiked && "fill-rose-400 text-rose-400")} />
            <span>{isLiked ? 'Upvoted' : 'Upvote'}</span>
            <span className="ml-1 rounded-md bg-black/40 px-1.5 py-0.5 text-[10px] font-mono text-stone-300">
              {formatNumber(totalLikes)}
            </span>
          </button>

          <button
            type="button"
            onClick={() => toggleBookmark(game.id)}
            className={cn(
              "flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-semibold transition shadow-sm",
              bookmarked
                ? "border-pink-500/50 bg-pink-500/20 text-pink-300 shadow-pink-950/30"
                : "border-white/10 bg-white/[0.04] text-stone-300 hover:bg-white/[0.08]"
            )}
            title={bookmarked ? "Saved in bookmarks" : "Save to bookmarks"}
          >
            <Heart className={cn("h-3.5 w-3.5", bookmarked && "fill-pink-400 text-pink-400")} />
            <span>{bookmarked ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>

      {/* 2. Community Score Overview Metrics (AI Innovation + Fun Score) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* AI Innovation Rating Box */}
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/15 p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider">
              AI Innovation Score
            </span>
            <Sparkles className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-stone-100 font-mono">
              {game.aiScore > 0 ? game.aiScore.toFixed(1) : 'Unrated'}
            </span>
            {game.aiScore > 0 && <span className="text-xs text-stone-400 font-mono">/ 10.0</span>}
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-stone-800/80">
            <div 
              className="h-full bg-emerald-400 rounded-full transition-all duration-500" 
              style={{ width: `${Math.min(100, Math.max(0, (game.aiScore / 10) * 100))}%` }}
            />
          </div>
          <p className="text-[11px] text-stone-400 leading-relaxed">
            Evaluates runtime LLM autonomy, prompt responsiveness, and generative depth.
          </p>
        </div>

        {/* Gameplay Fun Score Box */}
        <div className="rounded-2xl border border-blue-500/20 bg-blue-950/15 p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-blue-300 uppercase tracking-wider">
              Gameplay & Fun Score
            </span>
            <Star className="h-4 w-4 text-blue-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-stone-100 font-mono">
              {game.funScore > 0 ? game.funScore.toFixed(1) : 'Unrated'}
            </span>
            {game.funScore > 0 && <span className="text-xs text-stone-400 font-mono">/ 10.0</span>}
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-stone-800/80">
            <div 
              className="h-full bg-blue-400 rounded-full transition-all duration-500" 
              style={{ width: `${Math.min(100, Math.max(0, (game.funScore / 10) * 100))}%` }}
            />
          </div>
          <p className="text-[11px] text-stone-400 leading-relaxed">
            Evaluates player replayability, progression loops, emergent rules, and UX polish.
          </p>
        </div>
      </div>

      {/* 3. Interactive Star Rating (1 to 10) */}
      <div className="space-y-3 pt-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <label className="block text-xs font-bold text-stone-200">
              Rate AI Depth & Gameplay (1 - 10 Score)
            </label>
            <p className="text-[11px] text-emerald-400 font-medium">
              {currentLabel}
            </p>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-sm font-bold text-amber-300 font-mono">
              {hoverRating ? `${hoverRating}.0 / 10` : activeRating ? `${activeRating.toFixed(1)} / 10` : 'Unrated'}
            </span>
            <p className="text-[10px] text-stone-500 font-mono">
              {totalRatingsCount} total evaluation{totalRatingsCount === 1 ? '' : 's'}
            </p>
          </div>
        </div>

        {/* 10-point Interactive Star Grid */}
        <div className="flex items-center justify-between gap-1 rounded-2xl border border-white/10 bg-[#121619] p-2.5 sm:p-3 shadow-inner">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((starVal) => {
            const active = (hoverRating || activeRating || 0) >= starVal;
            return (
              <button
                key={starVal}
                type="button"
                onMouseEnter={() => setHoverRating(starVal)}
                onMouseLeave={() => setHoverRating(null)}
                onClick={() => handleRatingClick(starVal)}
                className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-xl hover:bg-white/10 transition group"
                title={`Rate ${starVal} out of 10`}
              >
                <Star
                  className={cn(
                    "h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-150",
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

      {/* 4. Play Status Tabs */}
      <div className="space-y-2.5 pt-2 border-t border-white/10">
        <label className="block text-xs font-bold text-stone-200">
          Your Play Progress (Optional)
        </label>
        <div className="grid grid-cols-3 gap-2.5">
          <button
            type="button"
            onClick={() => handleStatusClick('want_to_play')}
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-1.5 rounded-xl border p-2.5 sm:p-3 text-xs font-medium transition",
              currentStatus === 'want_to_play'
                ? "border-blue-400/50 bg-blue-500/15 text-blue-200 shadow-md shadow-blue-950/20"
                : "border-white/10 bg-white/[0.02] text-stone-400 hover:bg-white/[0.05] hover:text-stone-200"
            )}
          >
            <Clock className="h-4 w-4 text-blue-400 shrink-0" />
            <span>Plan to Play</span>
          </button>

          <button
            type="button"
            onClick={() => handleStatusClick('playing')}
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-1.5 rounded-xl border p-2.5 sm:p-3 text-xs font-medium transition",
              currentStatus === 'playing'
                ? "border-amber-400/50 bg-amber-500/15 text-amber-200 shadow-md shadow-amber-950/20"
                : "border-white/10 bg-white/[0.02] text-stone-400 hover:bg-white/[0.05] hover:text-stone-200"
            )}
          >
            <Gamepad2 className="h-4 w-4 text-amber-400 shrink-0" />
            <span>Playing</span>
          </button>

          <button
            type="button"
            onClick={() => handleStatusClick('played')}
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-1.5 rounded-xl border p-2.5 sm:p-3 text-xs font-medium transition",
              currentStatus === 'played'
                ? "border-emerald-400/50 bg-emerald-500/15 text-emerald-200 shadow-md shadow-emerald-950/20"
                : "border-white/10 bg-white/[0.02] text-stone-400 hover:bg-white/[0.05] hover:text-stone-200"
            )}
          >
            <Trophy className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Played / Done</span>
          </button>
        </div>
      </div>

      {/* Guest vs User hint */}
      {!user && (
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center text-[11px] text-stone-400">
          <span>Guest ratings and progress are saved instantly. </span>
          <button
            type="button"
            onClick={() => openAuthModal('login')}
            className="text-emerald-400 hover:underline font-semibold ml-1"
          >
            Sign in to sync your library across all devices →
          </button>
        </div>
      )}
    </div>
  );
}
