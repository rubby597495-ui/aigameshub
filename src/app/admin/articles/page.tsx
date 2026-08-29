'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ARTICLES } from '@/data/articles';
import { NEWS_ITEMS } from '@/data/news';
import { FileText, PlusCircle, Newspaper, Edit3, Trash2, ExternalLink, Calendar, Clock } from 'lucide-react';
import { formatDate } from '@/lib/utils';

export default function AdminArticlesPage() {
  const [activeTab, setActiveTab] = useState<'articles' | 'news'>('articles');
  const [articlesList, setArticlesList] = useState(ARTICLES);
  const [newsList, setNewsList] = useState(NEWS_ITEMS);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-100 flex items-center gap-2.5">
            <FileText className="h-7 w-7 text-emerald-400" />
            <span>Editorial News & Articles Management</span>
          </h1>
          <p className="mt-1 text-xs text-stone-400">
            Publish AI game design teardowns, Steam guidelines, and market trend reports.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <button
          type="button"
          onClick={() => setActiveTab('articles')}
          className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
            activeTab === 'articles'
              ? 'bg-[#2A3442] text-[#D8E1EA] shadow'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          Articles ({articlesList.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('news')}
          className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
            activeTab === 'news'
              ? 'bg-[#2A3442] text-[#D8E1EA] shadow'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          Industry News ({newsList.length})
        </button>
      </div>

      {activeTab === 'articles' ? (
        <div className="space-y-3">
          {articlesList.map((art) => (
            <div
              key={art.id}
              className="rounded-2xl border border-white/10 bg-[#161B1E] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.2 text-[10px] font-semibold text-emerald-300">
                    {art.category}
                  </span>
                  <span className="text-xs text-stone-500">• {formatDate(art.publishedAt)}</span>
                  <span className="text-xs text-stone-500">• By {art.author}</span>
                </div>
                <h2 className="text-sm font-bold text-stone-100">{art.title}</h2>
                <p className="text-xs text-stone-400 line-clamp-1">{art.excerpt}</p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href={`/articles/${art.slug}`}
                  target="_blank"
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-stone-300 hover:text-white"
                  title="View Article"
                >
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {newsList.map((news) => (
            <div
              key={news.id}
              className="rounded-2xl border border-white/10 bg-[#161B1E] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-2 py-0.2 text-[10px] font-semibold text-blue-300">
                    {news.category}
                  </span>
                  <span className="text-xs text-stone-500">• {formatDate(news.publishedAt)}</span>
                </div>
                <h2 className="text-sm font-bold text-stone-100">{news.title}</h2>
                <p className="text-xs text-stone-400 line-clamp-1">{news.summary}</p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href="/news"
                  target="_blank"
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-stone-300 hover:text-white"
                  title="View News"
                >
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
