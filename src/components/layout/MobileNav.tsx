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
  Info, 
  ShieldCheck, 
  FileText,
  X,
  Sparkles,
  Heart,
  User,
  LogIn,
  LogOut,
  ShieldAlert
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUserAuth } from '@/contexts/UserAuthContext';

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
  const { user, openAuthModal, logout } = useUserAuth();

  if (!isOpen) return null;

  const navItems = [
    { href: '/', label: 'Home', icon: Home, highlight: pathname === '/' },
    { href: '/games', label: 'Game Library', icon: Gamepad2, highlight: pathname.startsWith('/games') },
    { href: '/leaderboards', label: 'Leaderboards', icon: Trophy, highlight: pathname.startsWith('/leaderboards') },
    { href: '/bookmarks', label: 'My Bookmarks', icon: Heart, highlight: pathname === '/bookmarks' },
    { href: '/news', label: 'News', icon: Newspaper, highlight: pathname.startsWith('/news') },
    { href: '/articles', label: 'Articles', icon: BookOpen, highlight: pathname.startsWith('/articles') },
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
      <aside className="fixed inset-y-0 left-0 w-[80vw] max-w-xs border-r border-white/10 bg-[#101314] shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
            <Link href="/" onClick={onClose} className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="AiGamesHub - AI Gaming Directory Logo"
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
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition",
                    active
                      ? "bg-[#2A3442] text-[#D8E1EA] font-semibold"
                      : "text-stone-300 hover:bg-white/[0.06] hover:text-white"
                  )}
                >
                  <Icon className={cn("h-4 w-4", active ? "text-emerald-300" : "text-stone-400")} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Profile / Auth Footer */}
        <div className="border-t border-white/10 p-4 bg-black/40 space-y-3">
          {user ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 space-y-2.5">
              <Link
                href="/profile"
                onClick={onClose}
                className="flex items-center gap-2.5"
              >
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name}
                    className="h-9 w-9 rounded-xl border border-white/10 object-cover shrink-0"
                  />
                ) : (
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-400/20 text-emerald-300 font-bold uppercase text-xs border border-emerald-400/30 shrink-0">
                    {user.name.charAt(0)}
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-xs text-stone-100 truncate">{user.name}</p>
                  <p className="text-[10px] text-stone-400 truncate">{user.email}</p>
                </div>
              </Link>

              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/5 text-xs">
                <Link
                  href="/profile"
                  onClick={onClose}
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-white/[0.04] py-1.5 font-medium text-stone-200"
                >
                  <User className="h-3 w-3 text-emerald-400" />
                  <span>Profile</span>
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    logout();
                    onClose();
                  }}
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-rose-500/10 py-1.5 font-medium text-rose-300"
                >
                  <LogOut className="h-3 w-3" />
                  <span>Sign Out</span>
                </button>
              </div>

              {user.role === 'admin' && (
                <Link
                  href="/admin"
                  onClick={onClose}
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 py-1.5 text-xs font-bold text-amber-300"
                >
                  <ShieldAlert className="h-3.5 w-3.5" />
                  <span>Admin Dashboard</span>
                </Link>
              )}
            </div>
          ) : (
            <button
              type="button"
              onClick={() => {
                onClose();
                openAuthModal('login');
              }}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#8FAFA3] py-2.5 text-xs font-bold text-[#101715] shadow-lg hover:bg-[#A2BDB3] transition"
            >
              <LogIn className="h-4 w-4" />
              <span>Sign In / Join</span>
            </button>
          )}

          <div className="text-[10px] text-stone-500 text-center">
            AiGamesHub • {stats.totalGames} Verified AI Games
          </div>
        </div>
      </aside>
    </div>
  );
}
