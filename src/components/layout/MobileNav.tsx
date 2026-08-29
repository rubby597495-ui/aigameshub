'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Gamepad2, 
  Trophy, 
  Newspaper, 
  BookOpen, 
  PlusCircle, 
  Info, 
  ShieldCheck, 
  FileText,
  X,
  Sparkles,
  Heart,
  User
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  stats: {
    totalGames: number;
    totalCreators: number;
    totalExplorations: number;
    totalViews: number;
  };
}

export function MobileNav({ isOpen, onClose, stats }: MobileNavProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  const navItems = [
    { href: '/', label: 'Home', icon: Home, highlight: pathname === '/' },
    { href: '/games', label: 'Game Library', icon: Gamepad2, highlight: pathname.startsWith('/games') },
    { href: '/leaderboards', label: 'Leaderboards', icon: Trophy, highlight: pathname.startsWith('/leaderboards') },
    { href: '/bookmarks', label: 'My Bookmarks', icon: Heart, highlight: pathname === '/bookmarks' },
    { href: '/profile', label: 'Player Profile', icon: User, highlight: pathname === '/profile' },
    { href: '/news', label: 'News', icon: Newspaper, highlight: pathname.startsWith('/news') },
    { href: '/articles', label: 'Articles', icon: BookOpen, highlight: pathname.startsWith('/articles') },
    { href: '/submit', label: 'Submit Game', icon: PlusCircle, highlight: pathname === '/submit', isSpecial: true },
    { href: '/about', label: 'About Us', icon: Info, highlight: pathname === '/about' },
    { href: '/privacy', label: 'Privacy Policy', icon: ShieldCheck, highlight: pathname === '/privacy' },
    { href: '/terms', label: 'Terms of Service', icon: FileText, highlight: pathname === '/terms' },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className="fixed inset-y-0 left-0 w-[80vw] max-w-xs border-r border-white/10 bg-[#101314] shadow-2xl flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
            <Link href="/" onClick={onClose} className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="AiGamesHub"
                width={36}
                height={36}
                className="h-9 w-9 rounded-xl shadow-sm"
              />
              <div>
                <span className="block text-sm font-bold text-stone-100">
                  AiGamesHub
                </span>
                <span className="block text-[10px] text-sky-400 font-medium">
                  AI Play Aggregator
                </span>
              </div>
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-stone-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 p-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = item.highlight;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition",
                    item.isSpecial
                      ? "border border-emerald-400/30 bg-emerald-400/10 text-emerald-200 mt-2"
                      : active
                        ? "bg-[#2A3442] text-[#D8E1EA] font-semibold"
                        : "text-stone-300 hover:bg-white/[0.06] hover:text-white"
                  )}
                >
                  <Icon className={cn("h-4 w-4", item.isSpecial ? "text-emerald-300" : active ? "text-emerald-300" : "text-stone-400")} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Stats */}
        <div className="border-t border-white/10 p-4 bg-black/40">
          <div className="grid grid-cols-2 gap-2 text-center text-xs">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
              <p className="text-[10px] text-stone-400">AI Games</p>
              <p className="mt-0.5 text-sm font-bold text-emerald-300">{stats.totalGames}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
              <p className="text-[10px] text-stone-400">Total Views</p>
              <p className="mt-0.5 text-sm font-bold text-stone-100">{(stats.totalViews / 1000000).toFixed(1)}M</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
