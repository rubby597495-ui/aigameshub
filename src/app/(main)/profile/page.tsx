'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { GameCard } from '@/components/game/GameCard';
import { getAllGames } from '@/lib/data';
import { useUserAuth } from '@/contexts/UserAuthContext';
import { 
  User, 
  Gamepad2, 
  Trophy, 
  Clock, 
  Star, 
  Heart, 
  Sparkles, 
  LogOut, 
  PlusCircle, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { formatDate } from '@/lib/utils';

export default function UserProfilePage() {
  const { user, bookmarks, playActivities, logout, openAuthModal } = useUserAuth();
  const [activeTab, setActiveTab] = useState<'played' | 'playing' | 'want_to_play' | 'bookmarks'>('played');

  const allGames = getAllGames();

  // Activity breakdown
  const playedList = allGames.filter((g) => playActivities[g.id]?.status === 'played');
  const playingList = allGames.filter((g) => playActivities[g.id]?.status === 'playing');
  const wantList = allGames.filter((g) => playActivities[g.id]?.status === 'want_to_play');
  const bookmarkedList = allGames.filter((g) => bookmarks.includes(g.id));

  const ratedGames = Object.entries(playActivities).filter(([_, act]) => act.rating && act.rating > 0);
  const avgRating = ratedGames.length > 0
    ? (ratedGames.reduce((acc, [_, act]) => acc + (act.rating || 0), 0) / ratedGames.length).toFixed(1)
    : '0.0';

  if (!user) {
    return (
      <div className="space-y-6 max-w-md mx-auto py-12">
        <div className="archive-surface rounded-3xl p-8 sm:p-10 text-center border border-white/10 bg-white/[0.02] space-y-4">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 mx-auto">
            <User className="h-8 w-8" />
          </div>
          <h1 className="text-xl font-bold text-stone-100">
            登录以访问你的玩家主页
          </h1>
          <p className="text-xs text-stone-400 leading-relaxed">
            登录后即可管理你的已玩游戏库、记录通关评分、同步跨端收藏清单与管理提交的游戏。
          </p>
          <button
            type="button"
            onClick={() => openAuthModal('login')}
            className="w-full rounded-xl bg-[#8FAFA3] py-2.5 text-xs font-bold text-[#101715] hover:bg-[#A2BDB3] transition shadow-md"
          >
            立即登录 / 免费注册
          </button>
        </div>
      </div>
    );
  }

  let displayedGames = playedList;
  if (activeTab === 'playing') displayedGames = playingList;
  if (activeTab === 'want_to_play') displayedGames = wantList;
  if (activeTab === 'bookmarks') displayedGames = bookmarkedList;

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ name: '玩家中心 (Profile)', url: '/profile' }]} />

      {/* User Header Profile Card */}
      <div className="archive-surface rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 relative overflow-hidden shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-emerald-400/20 text-emerald-300 font-extrabold text-2xl uppercase border-2 border-emerald-400/40 shadow-inner">
              {user.name.charAt(0)}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold text-stone-100">{user.name}</h1>
                <span className="rounded-full bg-emerald-400/10 border border-emerald-400/30 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                  AI Explorer
                </span>
              </div>
              <p className="text-xs text-stone-400 mt-1">{user.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 rounded-xl bg-[#8FAFA3] px-4 py-2 text-xs font-bold text-[#101715] hover:bg-[#A2BDB3] transition shadow"
            >
              <PlusCircle className="h-4 w-4" />
              <span>提交我的 AI 游戏</span>
            </Link>
            <button
              type="button"
              onClick={logout}
              className="inline-flex items-center gap-1.5 rounded-xl border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs font-semibold text-rose-300 hover:bg-rose-500/20 transition"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>退出</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/10 text-xs">
          <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-3.5 space-y-1">
            <div className="flex items-center justify-between text-stone-400">
              <span>已通关/已玩</span>
              <Trophy className="h-3.5 w-3.5 text-emerald-400" />
            </div>
            <p className="text-2xl font-extrabold text-stone-100">{playedList.length}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-3.5 space-y-1">
            <div className="flex items-center justify-between text-stone-400">
              <span>正在游玩</span>
              <Gamepad2 className="h-3.5 w-3.5 text-amber-400" />
            </div>
            <p className="text-2xl font-extrabold text-stone-100">{playingList.length}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-3.5 space-y-1">
            <div className="flex items-center justify-between text-stone-400">
              <span>我的收藏</span>
              <Heart className="h-3.5 w-3.5 text-pink-400" />
            </div>
            <p className="text-2xl font-extrabold text-stone-100">{bookmarks.length}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#161B1E] p-3.5 space-y-1">
            <div className="flex items-center justify-between text-stone-400">
              <span>平均个人评分</span>
              <Star className="h-3.5 w-3.5 text-amber-300 fill-amber-300" />
            </div>
            <p className="text-2xl font-extrabold text-amber-300 font-mono">{avgRating} <span className="text-xs text-stone-400 font-normal">/ 10</span></p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-xs">
        <button
          type="button"
          onClick={() => setActiveTab('played')}
          className={`rounded-xl px-4 py-2 font-semibold transition ${
            activeTab === 'played'
              ? 'bg-[#2A3442] text-[#D8E1EA] shadow'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          🏆 已通关 / 已玩 ({playedList.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('playing')}
          className={`rounded-xl px-4 py-2 font-semibold transition ${
            activeTab === 'playing'
              ? 'bg-[#2A3442] text-[#D8E1EA] shadow'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          🕹️ 正在玩 ({playingList.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('want_to_play')}
          className={`rounded-xl px-4 py-2 font-semibold transition ${
            activeTab === 'want_to_play'
              ? 'bg-[#2A3442] text-[#D8E1EA] shadow'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          💤 想玩清单 ({wantList.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('bookmarks')}
          className={`rounded-xl px-4 py-2 font-semibold transition ${
            activeTab === 'bookmarks'
              ? 'bg-[#2A3442] text-[#D8E1EA] shadow'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          ❤️ 我的收藏 ({bookmarkedList.length})
        </button>
      </div>

      {/* Games List Content */}
      {displayedGames.length === 0 ? (
        <div className="archive-surface rounded-3xl p-10 text-center border border-white/10 bg-white/[0.02] space-y-3 max-w-md mx-auto">
          <p className="text-sm font-semibold text-stone-300">
            该分类下暂无记录
          </p>
          <p className="text-xs text-stone-400 leading-relaxed">
            前往游戏详情页，即可快速标记你的游玩进度与给游戏打分！
          </p>
          <Link
            href="/games"
            className="inline-flex items-center gap-2 rounded-xl bg-[#8FAFA3] px-5 py-2 text-xs font-bold text-[#101715] hover:bg-[#A2BDB3] transition shadow"
          >
            <span>去探索 AI 游戏</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedGames.map((game) => (
            <div key={game.id} className="relative group flex flex-col">
              <GameCard game={game} />
              {playActivities[game.id]?.rating && (
                <div className="mt-2 flex items-center justify-between rounded-xl border border-amber-400/20 bg-amber-400/5 px-3 py-1.5 text-[11px] text-amber-300">
                  <span>我的个人评分:</span>
                  <span className="font-bold font-mono text-xs">{playActivities[game.id]?.rating}.0 / 10.0</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
