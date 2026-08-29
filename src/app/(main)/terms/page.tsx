import React from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { FileText } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Terms of Service | AiGamesHub - User Directory Terms',
  description:
    'Review the official Terms of Service for AiGamesHub. Understand our community guidelines, game directory indexation standards, and user rules.',
  keywords: [
    'AiGamesHub terms of service',
    'AI games user agreement',
    'directory indexation terms'
  ]
});

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6 text-stone-300 text-xs sm:text-sm leading-relaxed">
      <Breadcrumbs items={[{ name: 'Terms of Service', url: '/terms' }]} />

      <div className="border-b border-white/10 pb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-100 flex items-center gap-2.5">
          <FileText className="h-7 w-7 text-emerald-400" />
          <span>Terms of Service</span>
        </h1>
        <p className="mt-1 text-xs text-stone-400">Last updated: August 25, 2026</p>
      </div>

      <div className="archive-surface rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-stone-100">1. Acceptance of Terms</h2>
          <p>
            By accessing and using AiGamesHub, you agree to comply with and be bound by these Terms of Service. If you disagree with any part, please discontinue using the platform.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-stone-100">2. Directory & Indexation</h2>
          <p>
            AiGamesHub acts as an informational catalog and aggregation directory. All game trademarks, studio logos, game covers, and intellectual properties remain the exclusive property of their respective creators and publishers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-stone-100">3. User Submissions & Community Reviews</h2>
          <p>
            Users submitting game recommendations or reviews must ensure their submissions are constructive, accurate, and free of malicious software or defamatory language.
          </p>
        </section>
      </div>
    </div>
  );
}
