'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Gamepad2, 
  PlusCircle, 
  Inbox, 
  FileText, 
  LogOut, 
  ExternalLink, 
  Sparkles,
  Menu,
  X,
  ShieldAlert,
  Users
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // If on login page, render plain container
  if (pathname === '/admin/login') {
    return <div className="min-h-screen bg-[#0d1012] text-stone-100">{children}</div>;
  }

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin/login');
  };

  const navLinks = [
    { href: '/admin', label: 'Dashboard Overview', icon: LayoutDashboard, exact: true },
    { href: '/admin/games', label: 'Game Management', icon: Gamepad2 },
    { href: '/admin/games/new', label: 'Add New Game', icon: PlusCircle, exact: true },
    { href: '/admin/submissions', label: 'Submission Queue', icon: Inbox, badge: '2' },
    { href: '/admin/users', label: 'User & Permissions', icon: Users },
    { href: '/admin/articles', label: 'News & Articles', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-[#0d1012] text-stone-100 flex flex-col md:flex-row">
      {/* Admin Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 border-r border-white/10 bg-[#121619] p-4 flex flex-col justify-between transition-transform duration-200 md:static md:translate-x-0",
        isMobileOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="space-y-6">
          {/* Admin Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <Link href="/admin" className="flex items-center gap-3 group">
              <Image
                src="/logo.svg"
                alt="AiGamesHub Admin"
                width={38}
                height={38}
                priority
                className="h-9 w-9 rounded-xl transition group-hover:scale-105 shadow-sm"
              />
              <div>
                <span className="block font-bold text-stone-100 text-sm tracking-tight group-hover:text-sky-400 transition">AiGamesHub</span>
                <span className="block text-[10px] text-sky-400 font-medium">Control Center</span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileOpen(false)}
              className="md:hidden text-stone-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-1 text-xs">
            <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-stone-500">
              Management
            </p>
            {navLinks.map((item) => {
              const Icon = item.icon;
              const active = item.href === '/admin/games'
                ? pathname === '/admin/games' || (pathname.startsWith('/admin/games/') && pathname !== '/admin/games/new')
                : item.exact
                ? pathname === item.href
                : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-3 py-2.5 font-medium transition",
                    active
                      ? "bg-[#2A3442] text-[#D8E1EA] font-semibold shadow-sm"
                      : "text-stone-400 hover:bg-white/[0.04] hover:text-stone-200"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={cn("h-4 w-4", active ? "text-emerald-300" : "text-stone-500")} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-1.5 py-0.2 text-[9px] font-bold text-emerald-300">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="border-t border-white/10 pt-4 space-y-2 text-xs">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 text-stone-300 hover:bg-white/[0.06] transition"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              <span>Public Live Website</span>
            </div>
            <ExternalLink className="h-3.5 w-3.5 text-stone-500" />
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-rose-400 hover:bg-rose-500/10 transition"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Admin Content Container */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-white/10 bg-[#121619]/90 px-4 sm:px-6 backdrop-blur">
          <button
            type="button"
            onClick={() => setIsMobileOpen(true)}
            className="md:hidden text-stone-300 hover:text-white"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2 text-xs text-stone-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Database Status: <strong>Operational (PostgreSQL / JSON Synced)</strong></span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs">
              <span className="text-stone-400">Admin Role:</span>
              <strong className="text-emerald-300">Super Admin</strong>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
