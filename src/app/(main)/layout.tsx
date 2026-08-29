import React from 'react';
import { ShellLayout } from '@/components/layout/ShellLayout';
import { getSearchIndex, getPlatformStats } from '@/lib/data';

export default function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const searchGames = getSearchIndex();
  const stats = getPlatformStats();

  return (
    <ShellLayout searchGames={searchGames} stats={stats}>
      {children}
    </ShellLayout>
  );
}
