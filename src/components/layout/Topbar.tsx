'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  Dices, 
  PlusCircle, 
  User, 
  Menu,
  Sparkles
} from 'lucide-react';
import { SearchModal } from '@/components/game/SearchModal';
import { AuthModal } from '@/components/game/AuthModal';
import { SearchGameItem } from '@/types/game';

interface TopbarProps {
  games: SearchGameItem[];
  onOpenMobileNav: () => void;
}

export function Topbar({ games, onOpenMobileNav }: TopbarProps) {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleRandomPlay = () => {
    if (!games || games.length === 0) return;
    const randomIndex = Math.floor(Math.random() * games.length);
    const randomGame = games[randomIndex];
    router.push(`/games/${randomGame.slug}`);
  };

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-white/10 bg-[#101314]/85 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
        {/* Left Side: Mobile Menu & Breadcrumb or Brand */}
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

          {/* Submit */}
          <Link
            href="/submit"
            className="hidden md:inline-flex items-center gap-1.5 rounded-lg border border-emerald-400/30 bg-[#8FAFA3]/15 px-3 py-2 text-xs font-semibold text-emerald-200 hover:bg-[#8FAFA3]/25 transition"
          >
            <PlusCircle className="h-3.5 w-3.5" />
            <span>Submit</span>
          </Link>

          {/* User Auth */}
          <button
            type="button"
            onClick={() => setIsAuthOpen(true)}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-stone-200 hover:bg-white/10 hover:text-white transition"
          >
            <User className="h-3.5 w-3.5 text-emerald-300" />
            <span className="hidden sm:inline">Sign In</span>
          </button>
        </div>
      </header>

      {/* Modals */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        games={games} 
      />
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
      />
    </>
  );
}
