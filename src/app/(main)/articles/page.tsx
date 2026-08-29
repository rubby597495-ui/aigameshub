import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ARTICLES } from '@/data/articles';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { formatDate } from '@/lib/utils';

export const metadata = constructMetadata({
  title: 'AI Game Design Articles, LLM NPC Guides & Analysis',
  description:
    'Explore in-depth AI game design articles, generative storytelling frameworks, LLM NPC architectures, and developer teardowns on AiGamesHub.',
  keywords: [
    'AI game design articles',
    'LLM NPC architecture',
    'generative AI game development',
    'AI storytelling guides',
    'AI video game analysis'
  ]
});

export default function ArticlesPage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ name: 'Articles', url: '/articles' }]} />

      <div className="border-b border-white/10 pb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-100 flex items-center gap-2.5">
          <BookOpen className="h-7 w-7 text-emerald-400" />
          <span>AI Game Design & Editorial Articles</span>
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-stone-400 max-w-3xl leading-relaxed">
          Comprehensive essays, design frameworks, and industry analysis investigating how runtime generative AI changes how we build and play games.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ARTICLES.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.slug}`}
            className="archive-surface group flex flex-col justify-between rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition hover:-translate-y-1"
          >
            <div className="aspect-[16/9] w-full overflow-hidden bg-stone-900">
              <img
                src={article.coverUrl}
                alt={`${article.title} - AI Gaming Article Cover`}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                  {article.category}
                </span>
                <h2 className="mt-1 text-base font-bold text-stone-100 group-hover:text-emerald-300 transition">
                  {article.title}
                </h2>
                <p className="mt-2 text-xs text-stone-400 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-3 text-[11px] text-stone-500">
                <span>By {article.author}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
