'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { 
  Filter, 
  Search, 
  RotateCcw, 
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';
import { CATEGORIES, AI_MECHANICS, AI_TYPES, PLATFORMS, SORT_OPTIONS } from '@/data/categories';
import { cn } from '@/lib/utils';

interface GameFilterProps {
  currentAiType?: string;
  currentGenre?: string;
  currentMechanic?: string;
  currentPlatform?: string;
  currentSort?: string;
  currentSearch?: string;
  totalCount: number;
}

export function GameFilter({
  currentAiType = 'ALL',
  currentGenre = 'all',
  currentMechanic = 'all',
  currentPlatform = 'all',
  currentSort = 'hot',
  currentSearch = '',
  totalCount
}: GameFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== 'all' && value !== 'ALL') {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/games?${params.toString()}`);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const q = formData.get('search') as string;
    updateParam('search', q);
  };

  const resetAll = () => {
    router.push('/games');
  };

  const hasActiveFilters = 
    (currentAiType && currentAiType !== 'ALL' && currentAiType !== 'all') ||
    (currentGenre && currentGenre !== 'all') ||
    (currentMechanic && currentMechanic !== 'all') ||
    (currentPlatform && currentPlatform !== 'all') ||
    currentSearch;

  return (
    <div className="archive-surface rounded-2xl p-4 sm:p-5 mb-8 space-y-4">
      {/* Top Bar: Search & AI Type Tabs */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search Input */}
        <form onSubmit={handleSearch} className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
          <input
            type="text"
            name="search"
            defaultValue={currentSearch}
            placeholder="Search by title, prompt mechanics, or studio..."
            className="h-10 w-full rounded-xl border border-white/10 bg-white/[0.04] pl-9 pr-4 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none focus:ring-1 focus:ring-emerald-400/50"
          />
        </form>

        {/* AI Type Selector Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl border border-white/10 bg-black/30">
          {AI_TYPES.map((type) => {
            const active = (currentAiType || 'ALL').toUpperCase() === type.key;
            return (
              <button
                key={type.key}
                type="button"
                onClick={() => updateParam('aiType', type.key)}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-xs font-semibold transition",
                  active
                    ? "bg-[#2A3442] text-[#D8E1EA] shadow-sm"
                    : "text-stone-400 hover:text-stone-200 hover:bg-white/[0.04]"
                )}
              >
                {type.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Second Row: Dropdown Filters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-white/5">
        {/* Genre Dropdown */}
        <div className="relative">
          <select
            value={currentGenre}
            onChange={(e) => updateParam('genre', e.target.value)}
            className="h-9 w-full appearance-none rounded-lg border border-white/10 bg-[#161B1E] px-3 pr-8 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
          >
            <option value="all">All Genres</option>
            {CATEGORIES.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-stone-400" />
        </div>

        {/* AI Mechanic Dropdown */}
        <div className="relative">
          <select
            value={currentMechanic}
            onChange={(e) => updateParam('mechanic', e.target.value)}
            className="h-9 w-full appearance-none rounded-lg border border-white/10 bg-[#161B1E] px-3 pr-8 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
          >
            <option value="all">All AI Mechanics</option>
            {AI_MECHANICS.map((mech) => (
              <option key={mech.slug} value={mech.slug}>
                {mech.name}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-stone-400" />
        </div>

        {/* Platform Dropdown */}
        <div className="relative">
          <select
            value={currentPlatform}
            onChange={(e) => updateParam('platform', e.target.value)}
            className="h-9 w-full appearance-none rounded-lg border border-white/10 bg-[#161B1E] px-3 pr-8 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
          >
            {PLATFORMS.map((plat) => (
              <option key={plat.slug} value={plat.slug}>
                {plat.name}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-stone-400" />
        </div>

        {/* Sorting Dropdown */}
        <div className="relative">
          <select
            value={currentSort}
            onChange={(e) => updateParam('sort', e.target.value)}
            className="h-9 w-full appearance-none rounded-lg border border-white/10 bg-[#161B1E] px-3 pr-8 text-xs text-emerald-300 font-medium focus:border-emerald-400/50 focus:outline-none"
          >
            {SORT_OPTIONS.map((sort) => (
              <option key={sort.value} value={sort.value}>
                Sort: {sort.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-emerald-400" />
        </div>
      </div>

      {/* Status Bar: Count & Reset */}
      <div className="flex items-center justify-between pt-2 text-xs text-stone-400">
        <p>
          Showing <span className="font-semibold text-emerald-300">{totalCount}</span> AI titles
        </p>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={resetAll}
            className="flex items-center gap-1 text-xs text-stone-400 hover:text-rose-300 transition"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Reset filters</span>
          </button>
        )}
      </div>
    </div>
  );
}
