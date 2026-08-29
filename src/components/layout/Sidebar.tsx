'use client';

import React, { useState } from 'react';
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
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
  User
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  stats: {
    totalGames: number;
    totalCreators: number;
    totalExplorations: number;
    totalViews: number;
  };
}

export function Sidebar({ stats }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { href: '/', label: 'Home', icon: Home, highlight: pathname === '/' },
    { href: '/games', label: 'Game Library', icon: Gamepad2, highlight: pathname.startsWith('/games') },
    { href: '/leaderboards', label: 'Leaderboards', icon: Trophy, highlight: pathname.startsWith('/leaderboards') },
    { href: '/bookmarks', label: 'My Bookmarks', icon: Heart, highlight: pathname === '/bookmarks' },
    { href: '/profile', label: 'Player Profile', icon: User, highlight: pathname === '/profile' },
    { href: '/news', label: 'News', icon: Newspaper, highlight: pathname.startsWith('/news') },
    { href: '/articles', label: 'Articles', icon: BookOpen, highlight: pathname.startsWith('/articles') },
  ];

  const secondaryItems = [
    { href: '/submit', label: 'Submit Game', icon: PlusCircle, highlight: pathname === '/submit', isSpecial: true },
    { href: '/about', label: 'About Us', icon: Info, highlight: pathname === '/about' },
    { href: '/privacy', label: 'Privacy Policy', icon: ShieldCheck, highlight: pathname === '/privacy' },
    { href: '/terms', label: 'Terms of Service', icon: FileText, highlight: pathname === '/terms' },
  ];

  return (
    <aside 
      className={cn(
        "fixed inset-y-0 left-0 z-40 hidden lg:flex flex-col border-r border-white/10 bg-[#101314]/95 shadow-2xl backdrop-blur-xl transition-[width] duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Brand Header */}
      <div className={cn(
        "flex h-16 items-center border-b border-white/10 px-4",
        isCollapsed ? "justify-center" : "justify-between"
      )}>
        {!isCollapsed ? (
          <Link href="/" className="flex items-center gap-3 min-w-0 group">
            <Image
              src="/logo.svg"
              alt="AiGamesHub Logo"
              width={40}
              height={40}
              priority
              className="h-9 w-9 shrink-0 rounded-xl transition group-hover:scale-105 shadow-sm"
            />
            <div className="min-w-0">
              <span className="block truncate text-base font-bold text-stone-100 tracking-tight group-hover:text-blue-400 transition">
                AiGamesHub
              </span>
              <span className="block truncate text-[10px] text-sky-400 font-medium tracking-wide">
                AI Play Aggregator
              </span>
            </div>
          </Link>
        ) : (
          <Link href="/" className="grid place-items-center group" title="AiGamesHub Home">
            <Image
              src="/logo.svg"
              alt="AiGamesHub AI Gaming Directory Logo"
              width={40}
              height={40}
              priority
              className="h-10 w-10 shrink-0 rounded-xl transition group-hover:scale-110 shadow-sm"
            />
          </Link>
        )}

        <button
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="grid h-7 w-7 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-stone-400 hover:text-white hover:bg-white/10 transition"
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-4 text-sm no-scrollbar">
        {/* Main Sections */}
        <div className="space-y-1">
          {!isCollapsed && (
            <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-stone-500">
              Explore
            </p>
          )}
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = item.highlight;
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={true}
                title={item.label}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium transition duration-150",
                  active
                    ? "bg-[#2A3442] text-[#D8E1EA] shadow-inner font-semibold"
                    : "text-stone-300 hover:bg-white/[0.06] hover:text-stone-100",
                  isCollapsed && "justify-center px-0 py-3"
                )}
              >
                <Icon className={cn("shrink-0", isCollapsed ? "h-5 w-5" : "h-4 w-4", active ? "text-emerald-300" : "text-stone-400")} />
                {!isCollapsed && <span className="truncate">{item.label}</span>}
              </Link>
            );
          })}
        </div>

        {/* Secondary / Creator Items */}
        <div className="space-y-1 pt-2 border-t border-white/5">
          {!isCollapsed && (
            <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-stone-500">
              Community & Info
            </p>
          )}
          {secondaryItems.map((item) => {
            const Icon = item.icon;
            const active = item.highlight;
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={true}
                title={item.label}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 font-medium transition text-xs",
                  item.isSpecial 
                    ? "border border-emerald-400/30 bg-emerald-400/10 text-emerald-200 hover:bg-emerald-400/20" 
                    : active 
                      ? "bg-[#2A3442] text-[#D8E1EA]" 
                      : "text-stone-400 hover:bg-white/[0.04] hover:text-stone-200",
                  isCollapsed && "justify-center px-0 py-2.5"
                )}
              >
                <Icon className={cn("shrink-0", isCollapsed ? "h-4 w-4" : "h-4 w-4", item.isSpecial ? "text-emerald-300" : "text-stone-400")} />
                {!isCollapsed && <span className="truncate">{item.label}</span>}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Live Stats Footer (miyeji.cn style) */}
      <div className="border-t border-white/10 p-3 bg-black/20">
        {!isCollapsed ? (
          <div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                <p className="text-[10px] uppercase font-semibold text-stone-400">AI Games</p>
                <p className="mt-0.5 text-sm font-bold text-emerald-300">{stats.totalGames}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                <p className="text-[10px] uppercase font-semibold text-stone-400">Creators</p>
                <p className="mt-0.5 text-sm font-bold text-stone-100">{stats.totalCreators}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                <p className="text-[10px] uppercase font-semibold text-stone-400">Sessions</p>
                <p className="mt-0.5 text-sm font-bold text-stone-100">{(stats.totalExplorations / 1000).toFixed(1)}k</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                <p className="text-[10px] uppercase font-semibold text-stone-400">Views</p>
                <p className="mt-0.5 text-sm font-bold text-stone-100">{(stats.totalViews / 1000000).toFixed(1)}M</p>
              </div>
            </div>
            <p className="mt-2 text-center text-[10px] text-stone-500 flex items-center justify-center gap-1">
              <Sparkles className="h-3 w-3 text-emerald-400" /> Realtime Catalog 2026
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 py-1">
            <span className="text-[11px] font-bold text-emerald-300">{stats.totalGames}</span>
            <span className="text-[9px] uppercase text-stone-500">Games</span>
          </div>
        )}
      </div>
    </aside>
  );
}
