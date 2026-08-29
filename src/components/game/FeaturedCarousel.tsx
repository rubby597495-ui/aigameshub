'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Game } from '@/types/game';
import { GameCard } from '@/components/game/GameCard';

interface FeaturedCarouselProps {
  title: string;
  subtitle?: string;
  badgeText?: string;
  games: Game[];
}

export function FeaturedCarousel({
  title,
  subtitle,
  badgeText,
  games
}: FeaturedCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="archive-surface rounded-2xl p-4 sm:p-6 my-6">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg sm:text-xl font-bold text-stone-100 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-emerald-400" />
              <span>{title}</span>
            </h2>
            {badgeText && (
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300">
                {badgeText}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="mt-1 text-xs text-stone-400">
              {subtitle}
            </p>
          )}
        </div>

        {/* Scroll Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll('left')}
            className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-stone-300 hover:bg-white/10 hover:text-white transition"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-stone-300 hover:bg-white/10 hover:text-white transition"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Snap Scroll Grid */}
      <div
        ref={scrollContainerRef}
        className="-mx-4 flex items-stretch gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory no-scrollbar sm:mx-0 sm:px-0"
      >
        {games.map((game) => (
          <div
            key={game.id}
            className="w-[280px] sm:w-[300px] shrink-0 snap-start flex flex-col"
          >
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </section>
  );
}
