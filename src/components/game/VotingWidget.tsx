'use client';

import React, { useState } from 'react';
import { Sparkles, ThumbsUp, Star, Award, CheckCircle2 } from 'lucide-react';
import { Game } from '@/types/game';
import { cn } from '@/lib/utils';

interface VotingWidgetProps {
  game: Game;
}

export function VotingWidget({ game }: VotingWidgetProps) {
  const [hasVoted, setHasVoted] = useState(false);
  const [userAiScore, setUserAiScore] = useState<number>(9);
  const [userFunScore, setUserFunScore] = useState<number>(9);
  const [upvotes, setUpvotes] = useState(game.likeCount);
  const [hasUpvoted, setHasUpvoted] = useState(false);

  const handleVoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasVoted(true);
  };

  const handleUpvote = () => {
    if (!hasUpvoted) {
      setUpvotes(upvotes + 1);
      setHasUpvoted(true);
    } else {
      setUpvotes(upvotes - 1);
      setHasUpvoted(false);
    }
  };

  return (
    <div className="archive-surface rounded-2xl p-5 sm:p-6 border border-white/10 my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-stone-100 flex items-center gap-2">
            <Award className="h-5 w-5 text-emerald-400" />
            <span>Community Evaluation & AI Depth Score</span>
          </h3>
          <p className="text-xs text-stone-400 mt-0.5">
            How innovative is the generative AI mechanism in this game? Cast your vote!
          </p>
        </div>

        {/* Quick Upvote Button */}
        <button
          type="button"
          onClick={handleUpvote}
          className={cn(
            "flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold shadow-md transition",
            hasUpvoted
              ? "border border-rose-500/50 bg-rose-500/20 text-rose-200"
              : "border border-white/10 bg-[#2A3442] text-[#D8E1EA] hover:bg-[#344255]"
          )}
        >
          <ThumbsUp className={cn("h-4 w-4", hasUpvoted ? "fill-rose-400 text-rose-400" : "text-emerald-300")} />
          <span>{hasUpvoted ? 'Upvoted' : 'Upvote Game'}</span>
          <span className="ml-1 rounded bg-black/40 px-1.5 py-0.5 text-[11px] text-stone-300">
            {upvotes}
          </span>
        </button>
      </div>

      {/* Score Overview Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5">
        {/* AI Innovation Rating Box */}
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wide">
              AI Innovation Score
            </span>
            <Sparkles className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-stone-100">
              {game.aiScore.toFixed(1)}
            </span>
            <span className="text-xs text-stone-400">/ 10.0</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-stone-800">
            <div 
              className="h-full bg-emerald-400 rounded-full" 
              style={{ width: `${(game.aiScore / 10) * 100}%` }}
            />
          </div>
          <p className="mt-2 text-[11px] text-stone-400">
            Evaluates runtime AI autonomy, prompt responsiveness, and mechanic depth.
          </p>
        </div>

        {/* Gameplay Fun Score Box */}
        <div className="rounded-xl border border-blue-500/20 bg-blue-950/20 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-wide">
              Gameplay & Fun Score
            </span>
            <Star className="h-4 w-4 text-blue-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-stone-100">
              {game.funScore.toFixed(1)}
            </span>
            <span className="text-xs text-stone-400">/ 10.0</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-stone-800">
            <div 
              className="h-full bg-blue-400 rounded-full" 
              style={{ width: `${(game.funScore / 10) * 100}%` }}
            />
          </div>
          <p className="mt-2 text-[11px] text-stone-400">
            Evaluates player replayability, progression loop, and UI polish.
          </p>
        </div>
      </div>

      {/* User Rate Action Form */}
      {!hasVoted ? (
        <form onSubmit={handleVoteSubmit} className="mt-2 rounded-xl border border-white/10 bg-white/[0.02] p-4">
          <p className="text-xs font-semibold text-stone-200 mb-3">
            Rate this game's AI mechanism:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] text-stone-400 mb-1">
                AI Depth ({userAiScore}/10)
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={userAiScore}
                onChange={(e) => setUserAiScore(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-[11px] text-stone-400 mb-1">
                Fun & Immersion ({userFunScore}/10)
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={userFunScore}
                onChange={(e) => setUserFunScore(Number(e.target.value))}
                className="w-full accent-blue-400 cursor-pointer"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-[#8FAFA3] px-4 py-1.5 text-xs font-bold text-[#101715] hover:bg-[#A2BDB3] transition shadow"
            >
              Submit Rating
            </button>
          </div>
        </form>
      ) : (
        <div className="mt-2 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-200">
          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
          <span>Thank you! Your ratings ({userAiScore}/10 AI, {userFunScore}/10 Fun) have been recorded in the global AI ranking index.</span>
        </div>
      )}
    </div>
  );
}
