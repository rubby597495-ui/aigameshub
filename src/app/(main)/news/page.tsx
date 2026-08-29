import React from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { NEWS_ITEMS } from '@/data/news';
import { Newspaper, ExternalLink, Calendar, Sparkles } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { formatDate } from '@/lib/utils';

export const metadata = constructMetadata({
  title: 'AI Gaming News: Generative AI Video Game Breakthroughs',
  description:
    'Stay updated with the latest generative AI video game news, Steam AI disclosure policies, voice LLM latency breakthroughs & launches on AiGamesHub.',
  keywords: [
    'AI gaming news',
    'generative AI video games news',
    'Steam AI guidelines',
    'voice LLM games',
    'AI game engine updates'
  ]
});

export default function NewsPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ name: 'News', url: '/news' }]} />

      <div className="border-b border-white/10 pb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-100 flex items-center gap-2.5">
          <Newspaper className="h-7 w-7 text-emerald-400" />
          <span>AI Gaming News & Updates</span>
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-stone-400 max-w-3xl leading-relaxed">
          Tracking announcements, research prototypes, developer interviews, and platform updates shaping the AI-native gaming ecosystem.
        </p>
      </div>

      <div className="space-y-4">
        {NEWS_ITEMS.map((item) => (
          <article
            key={item.id}
            className="archive-surface rounded-2xl p-5 sm:p-6 border border-white/10 space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300">
                {item.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-stone-400">
                <Calendar className="h-3.5 w-3.5" />
                <span>{formatDate(item.publishedAt)}</span>
              </div>
            </div>

            <h2 className="text-base sm:text-lg font-bold text-stone-100">
              {item.title}
            </h2>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {item.summary}
            </p>

            <div className="pt-2 text-xs text-stone-400 border-t border-white/5 flex items-center justify-between">
              <span>Source: <strong className="text-stone-300">{item.source}</strong></span>
              {item.sourceUrl && (
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <span>Read Official Post</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
