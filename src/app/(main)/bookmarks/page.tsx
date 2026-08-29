'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { GameCard } from '@/components/game/GameCard';
import { getAllGames } from '@/lib/data';
import { useUserAuth } from '@/contexts/UserAuthContext';
import { 
  Bookmark, 
  Heart, 
  Gamepad2, 
  Sparkles, 
  ArrowRight, 
  User, 
  SlidersHorizontal,
  Trash2
} from 'lucide-react';
import { CATEGORIES, AI_TYPES } from '@/data/categories';

export default function BookmarksPage() {
  const { user, bookmarks, openAuthModal } = useUserAuth();
  const [selectedTier, setSelectedTier] = useState('ALL');
  const [selectedGenre, setSelectedGenre] = useState('ALL');

  const allGames = getAllGames();
  const bookmarkedGames = allGames.filter((g) => bookmarks.includes(g.id));

  // Filter
  const filteredGames = bookmarkedGames.filter((g) => {
    const matchesTier = selectedTier === 'ALL' || g.tier === selectedTier;
    const matchesGenre = selectedGenre === 'ALL' || g.genreSlug === selectedGenre;
    return matchesTier && matchesGenre;
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ name: '我的收藏 (Bookmarks)', url: '/bookmarks' }]} />

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-100 flex items-center gap-2.5">
            <Heart className="h-7 w-7 text-pink-400 fill-pink-400" />
            <span>我的收藏清单 ({bookmarks.length})</span>
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-stone-400">
            你关注的 AI 游戏会在此处跨设备实时同步，随时查看与启动游玩。
          </p>
        </div>

        {!user ? (
          <button
            type="button"
            onClick={() => openAuthModal('login')}
            className="inline-flex items-center gap-2 rounded-xl bg-[#8FAFA3] px-4 py-2.5 text-xs font-bold text-[#101715] hover:bg-[#A2BDB3] transition shadow-md"
          >
            <User className="h-4 w-4" />
            <span>登录并同步收藏夹</span>
          </button>
        ) : (
          <Link
            href="/profile"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-stone-200 hover:bg-white/10 transition"
          >
            <Gamepad2 className="h-4 w-4 text-emerald-400" />
            <span>查看已玩记录与评分 →</span>
          </Link>
        )}
      </div>

      {!user ? (
        <div className="archive-surface rounded-3xl p-10 sm:p-12 text-center border border-white/10 bg-white/[0.02] space-y-4 max-w-md mx-auto">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-pink-500/10 border border-pink-500/20 text-pink-400 mx-auto">
            <Heart className="h-8 w-8" />
          </div>
          <h2 className="text-lg font-bold text-stone-100">
            登录以开启跨设备收藏同步
          </h2>
          <p className="text-xs text-stone-400 leading-relaxed">
            登录后，你在电脑、平板或手机上收藏的 AI 游戏都会实时保存至你的专属云端清单中。
          </p>
          <button
            type="button"
            onClick={() => openAuthModal('login')}
            className="w-full rounded-xl bg-[#8FAFA3] py-2.5 text-xs font-bold text-[#101715] hover:bg-[#A2BDB3] transition shadow-md"
          >
            立即登录 / 免费注册
          </button>
        </div>
      ) : bookmarkedGames.length === 0 ? (
        <div className="archive-surface rounded-3xl p-10 sm:p-14 text-center border border-white/10 bg-white/[0.02] space-y-4 max-w-md mx-auto">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/[0.05] border border-white/10 text-stone-400 mx-auto">
            <Bookmark className="h-8 w-8" />
          </div>
          <h2 className="text-lg font-bold text-stone-100">
            你的收藏清单还是空的
          </h2>
          <p className="text-xs text-stone-400 leading-relaxed">
            在浏览游戏库或游戏详情时，点击右上角的 ❤️ 即可将喜欢的 AI 游戏加入收藏！
          </p>
          <Link
            href="/games"
            className="inline-flex items-center gap-2 rounded-xl bg-[#8FAFA3] px-6 py-2.5 text-xs font-bold text-[#101715] hover:bg-[#A2BDB3] transition shadow-md"
          >
            <span>探索 90+ 款 AI 游戏</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <>
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-[#161B1E] p-4 text-xs">
            <div className="flex items-center gap-1.5 text-stone-400 mr-2">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>筛选:</span>
            </div>

            <select
              value={selectedTier}
              onChange={(e) => setSelectedTier(e.target.value)}
              className="h-9 rounded-xl border border-white/10 bg-[#121619] px-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
            >
              <option value="ALL">全部 AI 等级 (All Tiers)</option>
              <option value="AI-Native">AI-Native</option>
              <option value="AI-Augmented">AI-Augmented</option>
              <option value="AI-Boundary">AI-Boundary</option>
            </select>

            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="h-9 rounded-xl border border-white/10 bg-[#121619] px-3 text-xs text-stone-200 focus:border-emerald-400/50 focus:outline-none"
            >
              <option value="ALL">全部游戏分类 (All Genres)</option>
              {CATEGORIES.map((c) => (
                <option key={c.slug} value={c.slug}>{c.name}</option>
              ))}
            </select>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
