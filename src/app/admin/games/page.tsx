'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Gamepad2, 
  PlusCircle, 
  Search, 
  Edit3, 
  Trash2, 
  ExternalLink, 
  Sparkles, 
  Flame, 
  Eye,
  Check,
  X
} from 'lucide-react';
import { CATEGORIES, AI_TYPES } from '@/data/categories';
import { Game } from '@/types/game';
import { formatNumber, getTierBadgeStyle } from '@/lib/utils';

export default function AdminGamesPage() {
  const [games, setGames] = useState<Game[]>([]);
  const [search, setSearch] = useState('');
  const [aiTypeFilter, setAiTypeFilter] = useState('all');
  const [genreFilter, setGenreFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<number | null>(null);

  useEffect(() => {
    async function loadGames() {
      try {
        const res = await fetch('/api/admin/games');
        const data = await res.json();
        if (data.success) {
          setGames(data.games);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadGames();
  }, []);

  const toggleFeatured = async (game: Game) => {
    setActionLoading(game.id);
    const updated = { ...game, isFeatured: !game.isFeatured };
    try {
      const res = await fetch(`/api/admin/games/${game.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isFeatured: !game.isFeatured })
      });
      if (res.ok) {
        setGames(games.map((g) => (g.id === game.id ? updated : g)));
      }
    } finally {
      setActionLoading(null);
    }
  };

  const toggleHot = async (game: Game) => {
    setActionLoading(game.id);
    const updated = { ...game, isHot: !game.isHot };
    try {
      const res = await fetch(`/api/admin/games/${game.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isHot: !game.isHot })
      });
      if (res.ok) {
        setGames(games.map((g) => (g.id === game.id ? updated : g)));
      }
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (gameId: number, title: string) => {
    if (!confirm(`Are you sure you want to permanently delete "${title}"?`)) {
      return;
    }
    try {
      const res = await fetch(`/api/admin/games/${gameId}`, { method: 'DELETE' });
      if (res.ok) {
        setGames(games.filter((g) => g.id !== gameId));
      }
    } catch (err) {
      alert('Failed to delete game.');
    }
  };

  const filteredGames = games.filter((g) => {
    const matchesSearch =
      !search ||
      g.title.toLowerCase().includes(search.toLowerCase()) ||
      g.developer.toLowerCase().includes(search.toLowerCase()) ||
      g.mechanicName.toLowerCase().includes(search.toLowerCase());

    const matchesType =
      aiTypeFilter === 'all' || g.aiType === aiTypeFilter || g.tier === aiTypeFilter;

    const matchesGenre = genreFilter === 'all' || g.genreSlug === genreFilter;

    return matchesSearch && matchesType && matchesGenre;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-100 flex items-center gap-2.5">
            <Gamepad2 className="h-7 w-7 text-emerald-400" />
            <span>Games Catalog Management ({games.length})</span>
          </h1>
          <p className="mt-1 text-xs text-stone-400">
            Create, edit, toggle featured highlights, and update AI metadata across all catalog titles.
          </p>
        </div>

        <Link
          href="/admin/games/new"
          className="inline-flex items-center gap-2 rounded-xl bg-[#8FAFA3] px-4 py-2.5 text-xs font-bold text-[#101715] shadow hover:bg-[#A2BDB3] transition"
        >
          <PlusCircle className="h-4 w-4" />
          <span>Add New Game</span>
        </Link>
      </div>

      {/* Filter Matrix */}
      <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-4 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-stone-500" />
            <input
              type="text"
              placeholder="Search title, studio, prompt mechanic..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-9 w-full rounded-xl border border-white/10 bg-[#121619] pl-8 pr-3 text-xs text-stone-200 placeholder:text-stone-500 focus:border-emerald-400/50 focus:outline-none"
            />
          </div>

          {/* AI Type */}
          <select
            value={aiTypeFilter}
            onChange={(e) => setAiTypeFilter(e.target.value)}
            className="h-9 rounded-xl border border-white/10 bg-[#121619] px-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
          >
            <option value="all">All AI Tiers</option>
            <option value="AI_NATIVE">AI-Native</option>
            <option value="AI_AUGMENTED">AI-Augmented</option>
            <option value="AI-Boundary">AI-Boundary</option>
          </select>

          {/* Genre */}
          <select
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
            className="h-9 rounded-xl border border-white/10 bg-[#121619] px-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
          >
            <option value="all">All Genres</option>
            {CATEGORIES.map((c) => (
              <option key={c.slug} value={c.slug}>{c.name}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-between text-[11px] text-stone-400 pt-1">
          <span>Showing <strong>{filteredGames.length}</strong> of {games.length} games</span>
          {(search || aiTypeFilter !== 'all' || genreFilter !== 'all') && (
            <button
              onClick={() => { setSearch(''); setAiTypeFilter('all'); setGenreFilter('all'); }}
              className="text-emerald-400 hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Games Table */}
      <div className="rounded-2xl border border-white/10 bg-[#161B1E] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-white/10 bg-black/30 text-stone-400 uppercase text-[10px] tracking-wider">
              <tr>
                <th className="p-3.5">Game</th>
                <th className="p-3.5">AI Classification</th>
                <th className="p-3.5">Genre</th>
                <th className="p-3.5">Metrics</th>
                <th className="p-3.5 text-center">Featured</th>
                <th className="p-3.5 text-center">Trending</th>
                <th className="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-stone-300">
              {filteredGames.map((game) => (
                <tr key={game.id} className="hover:bg-white/[0.02] transition">
                  {/* Game & Cover */}
                  <td className="p-3.5">
                    <div className="flex items-center gap-3">
                      <img
                        src={game.coverUrl}
                        alt={`${game.title} - Catalog Cover`}
                        className="h-10 w-16 rounded-lg object-cover bg-stone-900 border border-white/10 shrink-0"
                      />
                      <div className="min-w-0">
                        <Link
                          href={`/games/${game.slug}`}
                          target="_blank"
                          className="font-bold text-stone-100 hover:text-emerald-300 transition line-clamp-1"
                        >
                          {game.title}
                        </Link>
                        <p className="text-[11px] text-stone-500 truncate">
                          {game.developer} • {game.releaseYear}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* AI Classification */}
                  <td className="p-3.5">
                    <span className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold ${getTierBadgeStyle(game.tier)}`}>
                      {game.tier}
                    </span>
                    <p className="text-[10px] text-stone-400 mt-1 truncate max-w-[150px]">
                      {game.mechanicName}
                    </p>
                  </td>

                  {/* Genre */}
                  <td className="p-3.5">
                    <span className="text-stone-300">{game.genreName}</span>
                    <span className="block text-[10px] text-stone-500">{game.platforms.join(', ')}</span>
                  </td>

                  {/* Metrics */}
                  <td className="p-3.5 font-mono text-[11px]">
                    <span className="text-emerald-400 font-bold">★ {game.aiScore.toFixed(1)}</span>
                    <p className="text-stone-500 text-[10px]">{formatNumber(game.viewCount)} views</p>
                  </td>

                  {/* Featured Toggle */}
                  <td className="p-3.5 text-center">
                    <button
                      type="button"
                      disabled={actionLoading === game.id}
                      onClick={() => toggleFeatured(game)}
                      className={`inline-grid h-6 w-6 place-items-center rounded-md border transition ${
                        game.isFeatured
                          ? 'border-emerald-500/50 bg-emerald-500/20 text-emerald-300'
                          : 'border-white/10 bg-white/[0.04] text-stone-600 hover:text-stone-400'
                      }`}
                      title={game.isFeatured ? "Featured on homepage" : "Not featured"}
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                    </button>
                  </td>

                  {/* Hot Toggle */}
                  <td className="p-3.5 text-center">
                    <button
                      type="button"
                      disabled={actionLoading === game.id}
                      onClick={() => toggleHot(game)}
                      className={`inline-grid h-6 w-6 place-items-center rounded-md border transition ${
                        game.isHot
                          ? 'border-amber-500/50 bg-amber-500/20 text-amber-300'
                          : 'border-white/10 bg-white/[0.04] text-stone-600 hover:text-stone-400'
                      }`}
                      title={game.isHot ? "Marked as Hot" : "Not marked as Hot"}
                    >
                      <Flame className="h-3.5 w-3.5" />
                    </button>
                  </td>

                  {/* Actions */}
                  <td className="p-3.5 text-right">
                    <div className="inline-flex items-center gap-1.5">
                      <Link
                        href={`/admin/games/${game.id}/edit`}
                        className="grid h-7 w-7 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-stone-300 hover:bg-white/10 hover:text-white transition"
                        title="Edit Game"
                      >
                        <Edit3 className="h-3.5 w-3.5" />
                      </Link>

                      <Link
                        href={`/games/${game.slug}`}
                        target="_blank"
                        className="grid h-7 w-7 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-stone-300 hover:bg-white/10 hover:text-white transition"
                        title="View Public Page"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleDelete(game.id, game.title)}
                        className="grid h-7 w-7 place-items-center rounded-lg border border-rose-500/20 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition"
                        title="Delete Game"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
