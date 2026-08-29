import React from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ShieldCheck } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Privacy Policy | AiGamesHub - Data Protection Terms',
  description:
    'Read the official Privacy Policy for AiGamesHub. Learn how we handle telemetry data, user reviews, and protect international player privacy.',
  keywords: [
    'AiGamesHub privacy policy',
    'AI games data protection',
    'international privacy standards'
  ]
});

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6 text-stone-300 text-xs sm:text-sm leading-relaxed">
      <Breadcrumbs items={[{ name: 'Privacy Policy', url: '/privacy' }]} />

      <div className="border-b border-white/10 pb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-100 flex items-center gap-2.5">
          <ShieldCheck className="h-7 w-7 text-emerald-400" />
          <span>Privacy Policy</span>
        </h1>
        <p className="mt-1 text-xs text-stone-400">Last updated: August 25, 2026</p>
      </div>

      <div className="archive-surface rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-stone-100">1. Information We Collect</h2>
          <p>
            AiGamesHub collects standard non-personally identifiable telemetry data (e.g., page views, filter usage, search terms) to enhance platform discovery. When creating an account or submitting reviews, we store your email address, username, and ratings securely.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-stone-100">2. Outbound Links & External Games</h2>
          <p>
            AiGamesHub indexes third-party AI games hosted on Steam, itch.io, Discord, and independent developer websites. We are not responsible for the privacy practices, prompt logs, or data processing of external game servers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-stone-100">3. Cookies & Local Storage</h2>
          <p>
            We use minimal cookies and local storage tokens strictly necessary for maintaining user session status, saved game bookmarks, and community voting states.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-stone-100">4. Contact</h2>
          <p>
            For privacy inquiries or account data deletion requests, contact us at privacy@aigameshub.io.
          </p>
        </section>
      </div>
    </div>
  );
}
