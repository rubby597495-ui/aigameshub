'use client';

import React, { useEffect, useState } from 'react';
import { Flame, Heart } from 'lucide-react';
import { useUserAuth } from '@/contexts/UserAuthContext';
import { formatNumber, cn } from '@/lib/utils';

interface GameLiveStatsProps {
  gameId: number;
  initialViews?: number;
  initialLikes?: number;
  className?: string;
  interactive?: boolean;
}

export function GameLiveStats({
  gameId,
  initialViews = 0,
  initialLikes = 0,
  className,
  interactive = true
}: GameLiveStatsProps) {
  const { recordGameView, getGameViews, getGameLikes, hasLiked, toggleLike } = useUserAuth();
  const [hasRecorded, setHasRecorded] = useState(false);

  // Automatically record +1 view on page visit
  useEffect(() => {
    if (!hasRecorded) {
      recordGameView(gameId);
      setHasRecorded(true);
    }
  }, [gameId, hasRecorded, recordGameView]);

  const liveViews = getGameViews(gameId, initialViews);
  const liveLikes = getGameLikes(gameId, initialLikes);
  const isLiked = hasLiked(gameId);

  return (
    <div className={cn("flex items-center gap-2 text-xs text-stone-400 select-none", className)}>
      {/* Dynamic Views */}
      <span className="flex items-center gap-1.5 transition-all duration-300" title={`${liveViews} total views`}>
        <Flame className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
        <strong className="text-stone-200 font-bold font-mono">{formatNumber(liveViews)}</strong> Views
      </span>

      <span className="text-stone-600">•</span>

      {/* Dynamic Interactive Likes */}
      {interactive ? (
        <button
          type="button"
          onClick={() => toggleLike(gameId)}
          className={cn(
            "flex items-center gap-1.5 rounded-lg px-1.5 py-0.5 transition hover:scale-105 active:scale-95",
            isLiked
              ? "text-rose-400 font-semibold bg-rose-500/10 border border-rose-500/20"
              : "text-stone-400 hover:text-rose-300 hover:bg-white/[0.04]"
          )}
          title={isLiked ? "Click to unlike" : "Click to upvote"}
        >
          <Heart className={cn("h-3.5 w-3.5 transition-colors", isLiked ? "fill-rose-400 text-rose-400" : "text-rose-400/80")} />
          <strong className={cn("font-bold font-mono", isLiked ? "text-rose-300" : "text-stone-200")}>
            {formatNumber(liveLikes)}
          </strong>
          <span>Likes</span>
        </button>
      ) : (
        <span className="flex items-center gap-1.5" title={`${liveLikes} likes`}>
          <Heart className={cn("h-3.5 w-3.5", isLiked ? "fill-rose-400 text-rose-400" : "text-rose-400")} />
          <strong className="text-stone-200 font-bold font-mono">{formatNumber(liveLikes)}</strong> Likes
        </span>
      )}
    </div>
  );
}
