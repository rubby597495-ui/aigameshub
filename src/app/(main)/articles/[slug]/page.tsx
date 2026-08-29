import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ARTICLES } from '@/data/articles';
import { BookOpen, Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { constructMetadata, generateArticleJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import { formatDate } from '@/lib/utils';
import { Metadata } from 'next';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found | AiGamesHub'
    };
  }

  let desc = `${article.excerpt} Read the complete generative AI game design breakdown on AiGamesHub.`;
  if (desc.length > 158) {
    desc = `${desc.slice(0, 155).trim()}...`;
  }

  const titleCandidate = `${article.title} - AI Game Design`;
  const safeTitle = titleCandidate.length <= 58 ? titleCandidate : `${article.title.slice(0, 42)} | AiGamesHub`;

  return constructMetadata({
    title: safeTitle,
    description: desc,
    image: article.coverUrl,
    keywords: [...article.tags, 'AI game design', 'generative games article', 'LLM NPC guide']
  });
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug
  }));
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleJsonLd = generateArticleJsonLd(article);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Articles', url: '/articles' },
    { name: article.title, url: `/articles/${article.slug}` }
  ]);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Articles', url: '/articles' },
          { name: article.title, url: `/articles/${article.slug}` }
        ]}
      />

      {/* Article Header */}
      <div className="space-y-4 border-b border-white/10 pb-6">
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            {article.category}
          </span>
          <span className="text-xs text-stone-500">•</span>
          <span className="text-xs text-stone-400">{formatDate(article.publishedAt)}</span>
          <span className="text-xs text-stone-500">•</span>
          <span className="text-xs text-stone-400 flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {article.readTime}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-100 leading-tight">
          {article.title}
        </h1>

        <p className="text-sm sm:text-base text-stone-300 leading-relaxed italic">
          {article.excerpt}
        </p>

        {/* Author Card */}
        <div className="flex items-center gap-3 pt-2">
          <img
            src={article.authorAvatar}
            alt={article.author}
            className="h-10 w-10 rounded-full border border-white/10 object-cover"
          />
          <div>
            <p className="text-xs font-semibold text-stone-200">{article.author}</p>
            <p className="text-[11px] text-stone-500">Contributing AI Gaming Researcher</p>
          </div>
        </div>
      </div>

      {/* Main Markdown Article Content */}
      <article className="archive-surface rounded-3xl p-6 sm:p-10 border border-white/10 prose prose-invert max-w-none text-stone-300 leading-relaxed space-y-6 text-sm sm:text-base">
        {article.content.split('\n\n').map((block, index) => {
          if (block.startsWith('# ')) {
            return (
              <h1 key={index} className="text-2xl sm:text-3xl font-extrabold text-stone-100 mt-6 mb-4">
                {block.replace('# ', '')}
              </h1>
            );
          }
          if (block.startsWith('## ')) {
            return (
              <h2 key={index} className="text-xl sm:text-2xl font-bold text-stone-100 mt-6 mb-3 border-b border-white/10 pb-2">
                {block.replace('## ', '')}
              </h2>
            );
          }
          if (block.startsWith('### ')) {
            return (
              <h3 key={index} className="text-lg font-semibold text-stone-200 mt-4 mb-2">
                {block.replace('### ', '')}
              </h3>
            );
          }
          if (block.startsWith('> ')) {
            return (
              <blockquote key={index} className="rounded-xl border-l-4 border-emerald-400 bg-emerald-950/20 p-4 text-emerald-200 italic my-4">
                {block.replace('> ', '')}
              </blockquote>
            );
          }
          if (block.startsWith('- ')) {
            const items = block.split('\n- ');
            return (
              <ul key={index} className="list-disc pl-5 space-y-2 text-stone-300">
                {items.map((it, i) => (
                  <li key={i}>{it.replace(/^- /, '')}</li>
                ))}
              </ul>
            );
          }
          return (
            <p key={index} className="leading-relaxed">
              {block}
            </p>
          );
        })}
      </article>

      {/* Tags & Return CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
        <div className="flex flex-wrap items-center gap-2">
          <Tag className="h-4 w-4 text-stone-400" />
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-stone-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to all articles</span>
        </Link>
      </div>
    </div>
  );
}
