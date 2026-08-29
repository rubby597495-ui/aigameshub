'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, X, Sparkles, Gamepad2, ArrowRight } from 'lucide-react';
import { SearchGameItem } from '@/types/game';
import { cn } from '@/lib/utils';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  games: SearchGameItem[];
}

export function SearchModal({ isOpen, onClose, games }: SearchModalProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [ftsResults, setFtsResults] = useState<any[]>([]);
  const [isFtsSearching, setIsFtsSearching] = useState(false);

  // Debounced FTS5 Query to Cloudflare D1 Backend
  useEffect(() => {
    if (!query.trim()) {
      setFtsResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsFtsSearching(true);
      try {
        const res = await fetch(`http://127.0.0.1:8790/api/search?q=${encodeURIComponent(query)}&limit=10`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.results && json.results.length > 0) {
            setFtsResults(json.results);
          } else {
            setFtsResults([]);
          }
        }
      } catch {
        // Fallback to local memory filter
        setFtsResults([]);
      } finally {
        setIsFtsSearching(false);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [query]);

  // Keyboard shortcut listener (Cmd+K / Ctrl+K and Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setFtsResults([]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const localFiltered = query.trim()
    ? games
        .filter(
          (g) =>
            g.title.toLowerCase().includes(query.toLowerCase()) ||
            g.tagline.toLowerCase().includes(query.toLowerCase()) ||
            g.genreName.toLowerCase().includes(query.toLowerCase()) ||
            g.mechanicName.toLowerCase().includes(query.toLowerCase()) ||
            g.developer.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 8)
    : games.slice(0, 5);

  const displayGames = ftsResults.length > 0 ? ftsResults : localFiltered;

  const handleSelectGame = (slug: string) => {
    onClose();
    router.push(`/games/${slug}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-[#121619] shadow-2xl shadow-black/80">
        {/* Search Input Bar */}
        <div className="flex items-center border-b border-white/10 px-4 py-3">
          <Search className="h-4 w-4 text-emerald-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a game title, mechanic (e.g. AI NPC), or genre..."
            className="flex-1 bg-transparent text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="grid h-6 w-6 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-stone-400 hover:text-white"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 no-scrollbar">
          <div className="flex items-center justify-between px-3 py-1.5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-stone-500">
              {query.trim()
                ? `Search Results (${displayGames.length}) ${ftsResults.length > 0 ? '• FTS5 Indexed' : ''}`
                : 'Popular AI Games'}
            </p>
            {isFtsSearching && (
              <span className="text-[10px] text-emerald-400 animate-pulse">Searching FTS5...</span>
            )}
          </div>

          {displayGames.length > 0 ? (
            <div className="space-y-1">
              {displayGames.map((game: any) => (
                <button
                  key={game.id}
                  type="button"
                  onClick={() => handleSelectGame(game.slug)}
                  className="flex w-full items-center justify-between rounded-xl p-2 text-left transition hover:bg-white/[0.06] group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={game.coverUrl}
                      alt={game.title}
                      className="h-10 w-14 rounded-lg object-cover bg-stone-900 border border-white/10 shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-stone-100 group-hover:text-emerald-300 transition truncate">
                        {game.title}
                      </p>
                      {game.snippet_match ? (
                        <p
                          className="text-[11px] text-stone-400 truncate [&>mark]:bg-emerald-500/30 [&>mark]:text-emerald-300 [&>mark]:rounded [&>mark]:px-0.5"
                          dangerouslySetInnerHTML={{ __html: game.snippet_match }}
                        />
                      ) : (
                        <p className="text-[11px] text-stone-400 truncate">
                          {game.genreName} • {game.mechanicName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 pl-2">
                    <span className="rounded bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.5 text-[10px] font-bold text-emerald-300">
                      ★ {Number(game.aiScore).toFixed(1)}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-stone-500 group-hover:text-stone-300 transition" />
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center text-xs text-stone-500">
              No AI games found matching "{query}".
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/10 bg-black/40 px-4 py-2 text-[11px] text-stone-400">
          <div className="flex items-center gap-2">
            <span>Navigation:</span>
            <kbd className="rounded border border-white/10 bg-white/[0.05] px-1 py-0.5 text-[10px]">
              ↑
            </kbd>
            <kbd className="rounded border border-white/10 bg-white/[0.05] px-1 py-0.5 text-[10px]">
              ↓
            </kbd>
            <kbd className="rounded border border-white/10 bg-white/[0.05] px-1 py-0.5 text-[10px]">
              ESC
            </kbd>
          </div>
          <Link
            href={`/games?search=${encodeURIComponent(query)}`}
            onClick={onClose}
            className="text-emerald-400 hover:underline"
          >
            View all matching games →
          </Link>
        </div>
      </div>
    </div>
  );
}
