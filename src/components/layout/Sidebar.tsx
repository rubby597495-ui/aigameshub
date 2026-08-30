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
  Info, 
  ShieldCheck, 
  FileText,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
  User,
  LogIn,
  LogOut,
  ShieldAlert
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUserAuth } from '@/contexts/UserAuthContext';

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
  const { user, openAuthModal, logout } = useUserAuth();

  const navItems = [
    { href: '/', label: 'Home', icon: Home, highlight: pathname === '/' },
    { href: '/games', label: 'Game Library', icon: Gamepad2, highlight: pathname.startsWith('/games') },
    { href: '/leaderboards', label: 'Leaderboards', icon: Trophy, highlight: pathname.startsWith('/leaderboards') },
    { href: '/bookmarks', label: 'My Bookmarks', icon: Heart, highlight: pathname === '/bookmarks' },
    { href: '/news', label: 'News', icon: Newspaper, highlight: pathname.startsWith('/news') },
    { href: '/articles', label: 'Articles', icon: BookOpen, highlight: pathname.startsWith('/articles') },
  ];

  const secondaryItems = [
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
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 font-medium transition duration-150",
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

        {/* Secondary / Info Items */}
        <div className="space-y-1 pt-2 border-t border-white/5">
          {!isCollapsed && (
            <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-stone-500">
              Information
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
                  "flex items-center gap-3 rounded-xl px-3 py-2 font-medium transition text-xs",
                  active 
                    ? "bg-[#2A3442] text-[#D8E1EA]" 
                    : "text-stone-400 hover:bg-white/[0.04] hover:text-stone-200",
                  isCollapsed && "justify-center px-0 py-2.5"
                )}
              >
                <Icon className={cn("shrink-0", isCollapsed ? "h-4 w-4" : "h-4 w-4", "text-stone-400")} />
                {!isCollapsed && <span className="truncate">{item.label}</span>}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* User Auth / Player Profile Section in Sidebar */}
      <div className="border-t border-white/10 p-3 bg-black/30">
        {user ? (
          <div>
            {!isCollapsed ? (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 space-y-2.5">
                {/* User Info Header */}
                <Link
                  href="/profile"
                  className="flex items-center gap-2.5 group/user"
                  title="View Player Profile"
                >
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={`${user.name} Avatar`}
                      className="h-9 w-9 rounded-xl border border-white/10 object-cover shrink-0"
                    />
                  ) : (
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-400/20 text-emerald-300 font-bold uppercase text-xs border border-emerald-400/30 shrink-0">
                      {user.name.charAt(0)}
                    </span>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-xs text-stone-100 group-hover/user:text-emerald-300 transition truncate">
                      {user.name}
                    </p>
                    <p className="text-[10px] text-stone-400 truncate">
                      {user.email}
                    </p>
                  </div>
                </Link>

                {/* Profile Actions */}
                <div className="grid grid-cols-2 gap-1.5 pt-1 border-t border-white/5 text-[11px]">
                  <Link
                    href="/profile"
                    className={cn(
                      "flex items-center justify-center gap-1.5 rounded-lg py-1.5 font-medium transition",
                      pathname === '/profile'
                        ? "bg-[#2A3442] text-[#D8E1EA] font-semibold"
                        : "bg-white/[0.03] text-stone-300 hover:bg-white/[0.08]"
                    )}
                  >
                    <User className="h-3 w-3 text-emerald-400" />
                    <span>Profile</span>
                  </Link>

                  <button
                    type="button"
                    onClick={logout}
                    className="flex items-center justify-center gap-1.5 rounded-lg bg-rose-500/10 py-1.5 font-medium text-rose-300 hover:bg-rose-500/20 transition"
                    title="Sign out of account"
                  >
                    <LogOut className="h-3 w-3" />
                    <span>Sign Out</span>
                  </button>
                </div>

                {user.role === 'admin' && (
                  <Link
                    href="/admin"
                    className="flex items-center justify-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 py-1.5 text-[11px] font-bold text-amber-300 hover:bg-amber-500/20 transition"
                  >
                    <ShieldAlert className="h-3 w-3" />
                    <span>Admin Center</span>
                  </Link>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 py-1">
                <Link
                  href="/profile"
                  className="grid place-items-center"
                  title={`${user.name} - Player Profile`}
                >
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={user.name}
                      className="h-9 w-9 rounded-xl border border-emerald-400/40 object-cover"
                    />
                  ) : (
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-400/20 text-emerald-300 font-bold uppercase text-xs border border-emerald-400/30">
                      {user.name.charAt(0)}
                    </span>
                  )}
                </Link>
                <button
                  type="button"
                  onClick={logout}
                  className="grid h-7 w-7 place-items-center rounded-lg border border-rose-500/20 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 transition"
                  title="Sign Out"
                >
                  <LogOut className="h-3 w-3" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            {!isCollapsed ? (
              <button
                type="button"
                onClick={() => openAuthModal('login')}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#8FAFA3] py-2.5 text-xs font-bold text-[#101715] shadow-lg shadow-emerald-950/40 hover:bg-[#A2BDB3] transition"
              >
                <LogIn className="h-4 w-4" />
                <span>Sign In / Join</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => openAuthModal('login')}
                className="w-full grid h-10 place-items-center rounded-xl bg-[#8FAFA3] text-[#101715] hover:bg-[#A2BDB3] transition"
                title="Sign In / Register"
              >
                <LogIn className="h-4 w-4" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Live Stats Mini Bar */}
      {!isCollapsed && (
        <div className="border-t border-white/5 px-3 py-2 text-[10px] text-stone-500 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <Sparkles className="h-3 w-3 text-emerald-400" />
            <span>{stats.totalGames} AI Games</span>
          </span>
          <span className="font-mono text-stone-400">
            {(stats.totalViews / 1000000).toFixed(1)}M Views
          </span>
        </div>
      )}
    </aside>
  );
}
