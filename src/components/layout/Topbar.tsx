'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  Dices, 
  PlusCircle, 
  User, 
  Menu,
  Sparkles,
  Bookmark,
  Gamepad2,
  LogOut,
  ChevronDown,
  ShieldAlert
} from 'lucide-react';
import { SearchModal } from '@/components/game/SearchModal';
import { SearchGameItem } from '@/types/game';
import { useUserAuth } from '@/contexts/UserAuthContext';

interface TopbarProps {
  games: SearchGameItem[];
  onOpenMobileNav: () => void;
}

export function Topbar({ games, onOpenMobileNav }: TopbarProps) {
  const router = useRouter();
  const { user, bookmarks, playActivities, logout, openAuthModal } = useUserAuth();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleRandomPlay = () => {
    if (!games || games.length === 0) return;
    const randomIndex = Math.floor(Math.random() * games.length);
    const randomGame = games[randomIndex];
    router.push(`/games/${randomGame.slug}`);
  };

  const playedCount = Object.values(playActivities).filter((a) => a.status === 'played').length;

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-white/10 bg-[#101314]/85 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
        {/* Left Side: Mobile Menu & Brand */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenMobileNav}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-stone-200 hover:bg-white/10 lg:hidden transition"
            aria-label="Open Navigation Menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link href="/" className="flex items-center gap-2.5 lg:hidden">
            <Image
              src="/logo.svg"
              alt="AiGamesHub"
              width={34}
              height={34}
              className="h-8 w-8 rounded-lg shadow-sm"
            />
            <span className="font-bold text-stone-100 text-sm tracking-tight">
              AiGamesHub
            </span>
          </Link>
        </div>

        {/* Center/Search Bar */}
        <div className="flex flex-1 max-w-lg mx-4">
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="flex h-10 w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-xs text-stone-400 shadow-inner hover:border-white/20 hover:bg-white/[0.07] transition"
          >
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-stone-400" />
              <span>Search 90+ AI games, mechanics, genres...</span>
            </div>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-white/15 bg-white/[0.08] px-1.5 py-0.5 text-[10px] font-medium text-stone-300">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Right Side CTAs */}
        <div className="flex items-center gap-2.5">
          {/* Random Game */}
          <button
            type="button"
            onClick={handleRandomPlay}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-slate-600/40 bg-[#2A3442] px-3 py-2 text-xs font-semibold text-[#D8E1EA] hover:bg-[#344255] transition shadow-sm"
            title="Jump to a random AI game"
          >
            <Dices className="h-3.5 w-3.5 text-emerald-300 animate-spin-slow" />
            <span>Random</span>
          </button>

          {/* Submit Game Link */}
          <Link
            href="/submit"
            className="hidden md:inline-flex items-center gap-1.5 rounded-lg border border-emerald-400/30 bg-[#8FAFA3]/15 px-3 py-2 text-xs font-semibold text-emerald-200 hover:bg-[#8FAFA3]/25 transition"
          >
            <PlusCircle className="h-3.5 w-3.5" />
            <span>Submit</span>
          </Link>

          {/* User Auth Profile Dropdown */}
          {user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                type="button"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-950/30 pl-2 pr-2.5 py-1.5 text-xs font-medium text-emerald-200 hover:bg-emerald-950/50 transition shadow-sm"
              >
                <span className="grid h-6 w-6 place-items-center rounded-lg bg-emerald-400/20 text-emerald-300 font-bold text-xs uppercase border border-emerald-400/30">
                  {user.name.charAt(0)}
                </span>
                <span className="max-w-[90px] truncate font-semibold">{user.name}</span>
                <ChevronDown className="h-3.5 w-3.5 text-emerald-400/70" />
              </button>

              {/* Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-white/15 bg-[#121619] p-1.5 shadow-2xl backdrop-blur-xl animate-fadeIn z-50">
                  <div className="border-b border-white/10 px-3 py-2.5">
                    <p className="text-xs font-bold text-stone-100 truncate">{user.name}</p>
                    <p className="text-[10px] text-stone-400 truncate">{user.email}</p>
                  </div>

                  <div className="py-1 space-y-0.5">
                    <Link
                      href="/bookmarks"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-2 text-xs text-stone-200 hover:bg-white/[0.06] transition"
                    >
                      <div className="flex items-center gap-2">
                        <Bookmark className="h-3.5 w-3.5 text-pink-400" />
                        <span>我的收藏 (Bookmarks)</span>
                      </div>
                      {bookmarks.length > 0 && (
                        <span className="rounded-full bg-pink-500/20 px-1.5 py-0.2 text-[10px] font-bold text-pink-300">
                          {bookmarks.length}
                        </span>
                      )}
                    </Link>

                    <Link
                      href="/profile"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-2 text-xs text-stone-200 hover:bg-white/[0.06] transition"
                    >
                      <div className="flex items-center gap-2">
                        <Gamepad2 className="h-3.5 w-3.5 text-emerald-400" />
                        <span>已玩进度与个人评分</span>
                      </div>
                      {playedCount > 0 && (
                        <span className="rounded-full bg-emerald-500/20 px-1.5 py-0.2 text-[10px] font-bold text-emerald-300">
                          {playedCount}
                        </span>
                      )}
                    </Link>

                    <Link
                      href="/submit"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs text-stone-200 hover:bg-white/[0.06] transition"
                    >
                      <PlusCircle className="h-3.5 w-3.5 text-blue-400" />
                      <span>提交 AI 游戏</span>
                    </Link>

                    {user.role === 'admin' && (
                      <Link
                        href="/admin"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs text-amber-300 hover:bg-amber-500/10 transition"
                      >
                        <ShieldAlert className="h-3.5 w-3.5" />
                        <span>管理后台</span>
                      </Link>
                    )}
                  </div>

                  <div className="border-t border-white/10 pt-1">
                    <button
                      type="button"
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        logout();
                      }}
                      className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs text-rose-300 hover:bg-rose-500/10 transition"
                    >
                      <LogOut className="h-3.5 w-3.5" />
                      <span>退出登录</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              type="button"
              onClick={() => openAuthModal('login')}
              className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-stone-200 hover:bg-white/10 hover:text-white transition shadow-sm"
            >
              <User className="h-3.5 w-3.5 text-emerald-300" />
              <span>登录 / 注册</span>
            </button>
          )}
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        games={games} 
      />
    </>
  );
}
