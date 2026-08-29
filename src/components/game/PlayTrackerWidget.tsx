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
    openAuthModal 
  } = useUserAuth();

  const activity = getPlayActivity(game.id);
  const bookmarked = isBookmarked(game.id);

  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [justSaved, setJustSaved] = useState(false);

  const currentStatus = activity?.status;
  const currentRating = activity?.rating;

  const handleStatusClick = (status: 'want_to_play' | 'playing' | 'played') => {
    if (!user) {
      openAuthModal('login');
      return;
    }

    const nextStatus = currentStatus === status ? 'want_to_play' : status;
    setPlayStatus(game.id, nextStatus);
    triggerSavedFeedback();
  };

  const handleRatingClick = (ratingVal: number) => {
    if (!user) {
      openAuthModal('login');
      return;
    }

    setPlayStatus(game.id, currentStatus || 'played', ratingVal);
    triggerSavedFeedback();
  };

  const triggerSavedFeedback = () => {
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2000);
  };

  return (
    <div className="archive-surface rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 space-y-5 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400">
            <Gamepad2 className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-stone-100 flex items-center gap-2">
              <span>我的游戏进度与评分</span>
              {justSaved && (
                <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400 animate-fadeIn">
                  <CheckCircle2 className="h-3 w-3" /> 已同步
                </span>
              )}
            </h3>
            <p className="text-[11px] text-stone-400">
              {user ? `玩家: ${user.name}` : '登录后即可跨设备记录进度与评分'}
            </p>
          </div>
        </div>

        {/* Bookmark Quick Toggle */}
        <button
          type="button"
          onClick={() => toggleBookmark(game.id)}
          className={cn(
            "flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition shadow-sm",
            bookmarked
              ? "border-rose-500/50 bg-rose-500/20 text-rose-300"
              : "border-white/10 bg-white/[0.04] text-stone-300 hover:bg-white/[0.08]"
          )}
        >
          <Heart className={cn("h-3.5 w-3.5", bookmarked && "fill-rose-400 text-rose-400")} />
          <span>{bookmarked ? '已收藏' : '收藏此游戏'}</span>
        </button>
      </div>

      {/* 1. Play Status Tabs */}
      <div className="space-y-2">
        <label className="block text-[11px] font-semibold text-stone-300">
          游玩状态 (Play Status)
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
            <span>想玩 (Plan to Play)</span>
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
            <span>在玩 (Playing)</span>
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
            <span>已通关/已玩 (Played)</span>
          </button>
        </div>
      </div>

      {/* 2. Personal Rating */}
      <div className="space-y-2 pt-1 border-t border-white/10">
        <div className="flex items-center justify-between">
          <label className="block text-[11px] font-semibold text-stone-300">
            我的个人评分 (Personal AI Rating)
          </label>
          <span className="text-xs font-bold text-emerald-300 font-mono">
            {hoverRating ? `${hoverRating}.0 / 10.0` : currentRating ? `${currentRating}.0 / 10.0` : '未评分'}
          </span>
        </div>

        {/* 10-point Star Grid / Slider */}
        <div className="flex items-center justify-between gap-1 rounded-xl border border-white/10 bg-[#121619] p-2.5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((starVal) => {
            const active = (hoverRating || currentRating || 0) >= starVal;
            return (
              <button
                key={starVal}
                type="button"
                onMouseEnter={() => setHoverRating(starVal)}
                onMouseLeave={() => setHoverRating(null)}
                onClick={() => handleRatingClick(starVal)}
                className="grid h-7 w-7 place-items-center rounded-lg hover:bg-white/10 transition"
                title={`${starVal} 分`}
              >
                <Star
                  className={cn(
                    "h-4 w-4 transition",
                    active
                      ? "fill-amber-400 text-amber-400 scale-110"
                      : "text-stone-600 hover:text-stone-400"
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>

      {!user && (
        <div className="rounded-xl border border-emerald-400/20 bg-emerald-950/20 p-3 text-center">
          <button
            type="button"
            onClick={() => openAuthModal('login')}
            className="text-xs font-bold text-emerald-300 hover:underline"
          >
            👉 点击登录账号，免费开启进度同步与私人评测库
          </button>
        </div>
      )}
    </div>
  );
}
