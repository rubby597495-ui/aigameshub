'use client';

import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Send, 
  ThumbsUp, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  User, 
  Sparkles, 
  Star, 
  Clock,
  Loader2,
  Lock
} from 'lucide-react';
import { Game } from '@/types/game';
import { GameComment } from '@/types/comment';
import { useUserAuth } from '@/contexts/UserAuthContext';
import { checkCommentSafety } from '@/lib/moderation';
import { cn, formatDate } from '@/lib/utils';

interface GameCommentsProps {
  game: Game;
}

export function GameComments({ game }: GameCommentsProps) {
  const { user, getUserRating, openAuthModal } = useUserAuth();

  const [comments, setComments] = useState<GameComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState('');
  const [guestName, setGuestName] = useState('');
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [likedComments, setLikedComments] = useState<string[]>([]);

  // Sync user's existing game rating
  useEffect(() => {
    const existingScore = getUserRating(game.id);
    if (existingScore) {
      setRating(existingScore);
    }
  }, [game.id, getUserRating]);

  // Load comments
  const fetchComments = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/comments?gameId=${game.id}`);
      const data = await res.json();
      if (data.success && Array.isArray(data.comments)) {
        setComments(data.comments);
      }
    } catch (err) {
      console.error('Failed to load comments:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [game.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    const authorName = user?.name || guestName.trim() || 'Anonymous Player';

    // 1. Client-side instant moderation check
    const check = checkCommentSafety(content, authorName);
    if (!check.safe) {
      setErrorMsg(check.reason || 'Your comment was flagged by our content safety filter.');
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gameId: game.id,
          authorName,
          userId: user?.id || null,
          content: check.sanitizedContent,
          rating: rating || undefined,
        }),
      });

      const data = await res.json();
      if (data.success && data.comment) {
        setComments([data.comment, ...comments]);
        setContent('');
        setSuccessMsg('Comment posted successfully!');
        setTimeout(() => setSuccessMsg(null), 3500);
      } else {
        setErrorMsg(data.error || 'Failed to post comment. Please check your message.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLikeComment = (commentId: string) => {
    if (likedComments.includes(commentId)) return;
    setLikedComments([...likedComments, commentId]);
    setComments((prev) =>
      prev.map((c) => (c.id === commentId ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  return (
    <section className="archive-surface rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-8 space-y-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-inner">
            <MessageSquare className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-stone-100 flex items-center gap-2">
              <span>Community Reviews & Discussions</span>
              <span className="rounded-full bg-blue-500/10 border border-blue-500/30 px-2 py-0.5 text-[11px] font-bold text-blue-300 font-mono">
                {comments.length}
              </span>
            </h2>
            <p className="text-xs text-stone-400">
              Share your gameplay experiences, AI prompt tips, and mechanics feedback.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-emerald-400/90 font-medium bg-emerald-950/30 border border-emerald-500/20 rounded-xl px-3 py-1.5 self-start sm:self-auto">
          <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
          <span>Anti-Spam & Link Filter Active</span>
        </div>
      </div>

      {/* Post Comment Box */}
      <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-[#161B1E] p-4 sm:p-5 space-y-4 shadow-inner">
        {/* User Identity Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          {user ? (
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-400/20 text-emerald-300 font-bold uppercase text-xs border border-emerald-400/30">
                {user.name.charAt(0)}
              </span>
              <span className="text-stone-200">
                Commenting as <strong className="text-emerald-300">{user.name}</strong> (Verified Player)
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2 flex-1 max-w-sm">
              <User className="h-4 w-4 text-stone-400" />
              <input
                type="text"
                placeholder="Your Name / Nickname (or post as Guest)"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="h-8 w-full rounded-lg border border-white/10 bg-[#121619] px-2.5 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
              />
            </div>
          )}

          {!user && (
            <button
              type="button"
              onClick={() => openAuthModal('login')}
              className="text-[11px] text-emerald-400 hover:underline font-semibold"
            >
              Sign in with account for verified badge →
            </button>
          )}
        </div>

        {/* Textarea */}
        <div className="relative">
          <textarea
            required
            rows={3}
            maxLength={1000}
            placeholder="Write your review, discuss AI emergent moments, or offer feedback for the developers... (External links and ads will be filtered)"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              if (errorMsg) setErrorMsg(null);
            }}
            className="w-full rounded-xl border border-white/10 bg-[#121619] p-3.5 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none leading-relaxed"
          />
          <div className="flex items-center justify-between text-[10px] text-stone-500 px-1 pt-1">
            <span>🛡️ External URLs, promotion, and scam patterns are prohibited.</span>
            <span>{content.length} / 1000</span>
          </div>
        </div>

        {/* Error / Success feedback */}
        {errorMsg && (
          <div className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300 animate-fadeIn">
            <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
            <span>{errorMsg}</span>
          </div>
        )}

        {successMsg && (
          <div className="flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-950/40 p-3 text-xs text-emerald-300 animate-fadeIn">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Submit Actions */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1.5 text-xs text-stone-400">
            {rating ? (
              <span className="inline-flex items-center gap-1 rounded-lg border border-amber-400/20 bg-amber-400/10 px-2 py-1 text-[11px] font-semibold text-amber-300">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <span>Your Game Score: {rating}.0 / 10</span>
              </span>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !content.trim()}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#8FAFA3] px-5 py-2.5 text-xs font-bold text-[#101715] shadow-lg hover:bg-[#A2BDB3] transition disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span>Posting...</span>
              </>
            ) : (
              <>
                <Send className="h-3.5 w-3.5" />
                <span>Post Comment</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-3 pt-2">
        {loading ? (
          <div className="py-8 text-center text-xs text-stone-500">
            Loading community reviews...
          </div>
        ) : comments.length === 0 ? (
          <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-8 text-center space-y-2">
            <MessageSquare className="mx-auto h-8 w-8 text-stone-600" />
            <p className="text-xs font-semibold text-stone-300">No reviews or discussions yet</p>
            <p className="text-[11px] text-stone-500">
              Be the first to share your gameplay thoughts and evaluate the AI implementation!
            </p>
          </div>
        ) : (
          comments.map((comment) => {
            const isCommentLiked = likedComments.includes(comment.id);
            return (
              <div
                key={comment.id}
                className="rounded-2xl border border-white/5 bg-[#161B1E] p-4 sm:p-5 space-y-2.5 transition hover:border-white/10"
              >
                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/[0.05] border border-white/10 text-stone-200 font-bold text-xs uppercase shadow-inner">
                      {comment.authorName.charAt(0)}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-stone-100">
                          {comment.authorName}
                        </span>
                        {comment.userId && (
                          <span className="rounded-full bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.2 text-[9px] font-bold text-emerald-300">
                            Verified
                          </span>
                        )}
                        {comment.rating && (
                          <span className="inline-flex items-center gap-1 rounded bg-amber-400/10 border border-amber-400/20 px-1.5 py-0.2 text-[9px] font-bold text-amber-300 font-mono">
                            <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                            <span>{comment.rating}.0</span>
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-stone-500 mt-0.5">
                        {formatDate(comment.createdAt)}
                      </p>
                    </div>
                  </div>

                  {/* Upvote Button */}
                  <button
                    type="button"
                    onClick={() => handleLikeComment(comment.id)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-medium transition",
                      isCommentLiked
                        ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
                        : "border-white/10 bg-white/[0.02] text-stone-400 hover:text-stone-200 hover:bg-white/[0.05]"
                    )}
                  >
                    <ThumbsUp className={cn("h-3 w-3", isCommentLiked && "fill-emerald-400 text-emerald-400")} />
                    <span>{comment.likes}</span>
                  </button>
                </div>

                {/* Comment Content */}
                <p className="text-xs leading-relaxed text-stone-300 pl-10">
                  {comment.content}
                </p>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
