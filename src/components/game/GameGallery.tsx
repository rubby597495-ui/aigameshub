'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X,
  Image as ImageIcon 
} from 'lucide-react';
import { getTierBadgeStyle } from '@/lib/utils';

interface GameGalleryProps {
  title: string;
  coverUrl: string;
  screenshots: string[];
  tier: string;
  aiScore: number;
}

export function GameGallery({
  title,
  coverUrl,
  screenshots = [],
  tier,
  aiScore
}: GameGalleryProps) {
  // Combine cover and all screenshots into a single gallery list (deduplicated)
  const allImages = [coverUrl, ...screenshots.filter((s) => s && s !== coverUrl)];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  const thumbsContainerRef = useRef<HTMLDivElement>(null);
  const activeImage = allImages[selectedIndex] || coverUrl;

  // Automatically scroll the active thumbnail into view
  useEffect(() => {
    if (thumbsContainerRef.current) {
      const activeThumb = thumbsContainerRef.current.children[selectedIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [selectedIndex]);

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  const scrollThumbs = (direction: 'left' | 'right') => {
    if (thumbsContainerRef.current) {
      const scrollAmount = 220;
      thumbsContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="space-y-3 select-none">
      {/* Main Showcase Image Preview */}
      <div 
        onClick={() => setIsLightboxOpen(true)}
        className="group relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/15 bg-stone-900 shadow-2xl cursor-pointer"
      >
        <img
          src={activeImage}
          alt={`${title} - Preview ${selectedIndex + 1}`}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        {/* Gradient Overlay for Badges & Buttons */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute left-3 top-3 flex items-center gap-2 pointer-events-none z-10">
          <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold backdrop-blur-md shadow-md ${getTierBadgeStyle(tier)}`}>
            {tier}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-950/80 px-2.5 py-1 text-xs font-bold text-emerald-300 backdrop-blur-md shadow-md">
            <Sparkles className="h-3 w-3 text-emerald-400" />
            <span>{aiScore > 0 ? `★ ${aiScore.toFixed(1)} AI Depth` : '★ Verified Index'}</span>
          </span>
        </div>

        {/* Top Right Fullscreen Hint Button */}
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(true); }}
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-lg border border-white/20 bg-black/60 text-stone-300 opacity-0 group-hover:opacity-100 backdrop-blur transition hover:bg-black/90 hover:text-white z-10"
          title="Open Fullscreen Gallery"
        >
          <Maximize2 className="h-4 w-4" />
        </button>

        {/* Navigation Arrows on Main Image */}
        {allImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/70 text-stone-200 opacity-0 group-hover:opacity-100 backdrop-blur transition hover:bg-black/95 hover:text-white hover:scale-110 z-10"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/70 text-stone-200 opacity-0 group-hover:opacity-100 backdrop-blur transition hover:bg-black/95 hover:text-white hover:scale-110 z-10"
              aria-label="Next screenshot"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Bottom Image Counter */}
        {allImages.length > 1 && (
          <div className="absolute bottom-2.5 right-3 rounded-md border border-white/10 bg-black/70 px-2 py-0.5 text-[10px] font-semibold text-stone-300 backdrop-blur pointer-events-none">
            {selectedIndex + 1} / {allImages.length}
          </div>
        )}
      </div>

      {/* Thumbnails Scrollable Strip with Navigation Controls */}
      {allImages.length > 1 && (
        <div className="relative group/thumbs pt-1">
          {/* Left Arrow Button for Strip */}
          <button
            type="button"
            onClick={() => scrollThumbs('left')}
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 grid h-7 w-7 place-items-center rounded-full border border-white/20 bg-black/80 text-stone-200 shadow-md backdrop-blur transition hover:bg-black hover:text-white hover:scale-110 opacity-0 group-hover/thumbs:opacity-100"
            aria-label="Scroll thumbnails left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Scrollable Thumbnails Track */}
          <div
            ref={thumbsContainerRef}
            className="flex items-center gap-2.5 overflow-x-auto pb-2 pt-0.5 scroll-smooth snap-x snap-mandatory [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.25)_transparent]"
          >
            {allImages.map((shot, idx) => {
              const isActive = selectedIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`relative aspect-[16/9] w-28 sm:w-32 shrink-0 snap-start overflow-hidden rounded-xl border transition-all duration-200 focus:outline-none ${
                    isActive
                      ? 'border-emerald-400 ring-2 ring-emerald-400/50 scale-[1.03] shadow-lg shadow-emerald-950/50 opacity-100'
                      : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                  }`}
                >
                  <img
                    src={shot}
                    alt={`${title} Thumbnail ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                  {idx === 0 && (
                    <span className="absolute bottom-1 left-1 rounded bg-black/70 px-1.5 py-0.5 text-[8px] font-bold text-stone-300 backdrop-blur">
                      Cover
                    </span>
                  )}
                  <span className="absolute top-1 right-1 rounded bg-black/60 px-1 text-[8px] font-semibold text-stone-400 backdrop-blur">
                    {idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Arrow Button for Strip */}
          <button
            type="button"
            onClick={() => scrollThumbs('right')}
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 grid h-7 w-7 place-items-center rounded-full border border-white/20 bg-black/80 text-stone-200 shadow-md backdrop-blur transition hover:bg-black hover:text-white hover:scale-110 opacity-0 group-hover/thumbs:opacity-100"
            aria-label="Scroll thumbnails right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-stone-200 hover:bg-white/20 hover:text-white transition z-50"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev / Next Buttons in Modal */}
          {allImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-6 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/70 text-stone-200 hover:bg-black hover:text-white transition z-50 hover:scale-110"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/70 text-stone-200 hover:bg-black hover:text-white transition z-50 hover:scale-110"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          )}

          {/* Large Image Container */}
          <div 
            className="max-h-[85vh] max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage}
              alt={`${title} Fullscreen Screenshot`}
              className="max-h-[85vh] w-auto max-w-full object-contain"
            />
          </div>

          {/* Bottom Thumbnails Strip in Lightbox */}
          <div className="absolute bottom-6 flex gap-2 overflow-x-auto max-w-xl px-4 py-2 rounded-2xl bg-black/70 border border-white/10 backdrop-blur z-50 [scrollbar-width:thin]">
            {allImages.map((shot, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => { e.stopPropagation(); setSelectedIndex(idx); }}
                className={`h-12 w-20 shrink-0 overflow-hidden rounded-lg border transition ${
                  selectedIndex === idx ? 'border-emerald-400 ring-2 ring-emerald-400' : 'border-white/20 opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={shot}
                  alt={`${title} Gallery Thumbnail ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
