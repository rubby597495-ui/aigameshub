'use client';

import React, { useState } from 'react';
import { MessageSquare, Star, Send, ThumbsUp } from 'lucide-react';
import { Review } from '@/types/game';

interface GameCommentsProps {
  gameId: number;
  gameTitle: string;
}

export function GameComments({ gameId, gameTitle }: GameCommentsProps) {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 'r-1',
      gameId,
      author: 'CyberPlayer99',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop&q=80',
      rating: 5,
      aiDepthScore: 9.6,
      comment: `The prompt responsiveness and unscripted dialogue in ${gameTitle} are incredible. The AI characters actually remember what you said 10 minutes ago and bring it up later!`,
      date: '3 days ago',
      likes: 24
    },
    {
      id: 'r-2',
      gameId,
      author: 'IndieGamerX',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&auto=format&fit=crop&q=80',
      rating: 4,
      aiDepthScore: 8.8,
      comment: 'Super creative use of generative mechanics. Takes a bit to learn how to prompt the NPCs effectively, but once you do, it feels like magic.',
      date: '1 week ago',
      likes: 12
    }
  ]);

  const [authorName, setAuthorName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !commentText.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newReview: Review = {
        id: `r-${Date.now()}`,
        gameId,
        author: authorName.trim(),
        avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(authorName)}`,
        rating,
        aiDepthScore: 9.0,
        comment: commentText.trim(),
        date: 'Just now',
        likes: 1
      };
      setReviews([newReview, ...reviews]);
      setAuthorName('');
      setCommentText('');
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <section className="archive-surface rounded-2xl p-5 sm:p-6 border border-white/10 my-8">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-stone-100 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-emerald-400" />
            <span>Community Reviews & Discussions ({reviews.length})</span>
          </h3>
          <p className="text-xs text-stone-400 mt-0.5">
            Share your gameplay experiences, AI prompt tricks, and ratings for {gameTitle}.
          </p>
        </div>
      </div>

      {/* Write a comment box */}
      <form onSubmit={handleSubmit} className="mb-8 rounded-xl border border-white/10 bg-white/[0.02] p-4">
        <p className="text-xs font-semibold text-stone-200 mb-3">Leave a Review</p>
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              required
              placeholder="Your username or nickname"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="h-9 rounded-lg border border-white/10 bg-[#161B1E] px-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
            />
            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-400">Rating:</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-0.5 hover:scale-110 transition"
                  >
                    <Star
                      className={`h-4 w-4 ${
                        star <= rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-stone-600'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <textarea
            required
            rows={3}
            placeholder="Write your review: What surprised you about the AI? How did the game feel?"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-[#161B1E] p-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-1.5 rounded-lg bg-[#8FAFA3] px-4 py-2 text-xs font-bold text-[#101715] hover:bg-[#A2BDB3] transition shadow disabled:opacity-50"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Post Review</span>
            </button>
          </div>
        </div>
      </form>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="rounded-xl border border-white/5 bg-white/[0.015] p-4 transition hover:border-white/10"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="h-8 w-8 rounded-full border border-white/10 bg-stone-800 object-cover"
                />
                <div>
                  <p className="text-xs font-semibold text-stone-200">
                    {rev.author}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-stone-500">
                    <span>{rev.date}</span>
                    <span>•</span>
                    <span className="text-emerald-400">AI Depth: {rev.aiDepthScore}/10</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-0.5">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-stone-300">
              {rev.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
