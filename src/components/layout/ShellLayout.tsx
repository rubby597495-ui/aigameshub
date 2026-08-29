'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Topbar } from '@/components/layout/Topbar';
import { MobileNav } from '@/components/layout/MobileNav';
import { Footer } from '@/components/layout/Footer';
import { SearchGameItem } from '@/types/game';

interface ShellLayoutProps {
  children: React.ReactNode;
  searchGames: SearchGameItem[];
  stats: {
    totalGames: number;
    totalCreators: number;
    totalExplorations: number;
    totalViews: number;
  };
}

export function ShellLayout({
  children,
  searchGames,
  stats
}: ShellLayoutProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#101314] soft-grid flex">
      {/* Left Sidebar (Desktop) */}
      <Sidebar stats={stats} />

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        stats={stats}
      />

      {/* Main Content Area (Right Side) */}
      <div className="flex flex-1 flex-col min-w-0 lg:pl-64 transition-[padding] duration-300">
        <Topbar
          games={searchGames}
          onOpenMobileNav={() => setIsMobileNavOpen(true)}
        />

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 max-w-7xl w-full mx-auto">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}
