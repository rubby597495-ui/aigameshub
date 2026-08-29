import { Game, Article } from '@/types/game';
import { Metadata } from 'next';

export const SITE_CONFIG = {
  name: 'AiGamesHub',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aigameshub.io',
  titleTemplate: '%s | AiGamesHub - AI Games & AI-Native Play Directory',
  defaultTitle: 'AiGamesHub: Best AI Games & AI-Native Video Games 2026',
  description:
    'Explore 90+ top AI-native & generative AI video games. Play unscripted AI RPGs, LLM NPC mysteries, and semantic sandboxes online free on AiGamesHub.',
  keywords: [
    'AI games',
    'AI native games',
    'AI augmented games',
    'best AI games 2026',
    'generative AI games',
    'AI RPG',
    'AI NPC games',
    'AI dungeon master',
    'LLM games online',
    'free AI games',
    'play AI games',
    'Suck Up',
    'Infinite Craft',
    'Vaudeville game',
    'AI story generator games'
  ],
  author: 'AiGamesHub Global Team',
  twitterHandle: '@aigameshub',
  locale: 'en_US'
};

export function constructMetadata({
  title,
  description,
  keywords,
  image = '/logo.png',
  canonicalUrl,
  noIndex = false
}: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}): Metadata {
  const metaTitle = title || SITE_CONFIG.defaultTitle;
  const metaDescription = description || SITE_CONFIG.description;
  const metaKeywords = keywords
    ? [...keywords, ...SITE_CONFIG.keywords]
    : SITE_CONFIG.keywords;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.author,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: canonicalUrl || SITE_CONFIG.url
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl || SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`,
          width: 1200,
          height: 630,
          alt: metaTitle
        }
      ],
      locale: SITE_CONFIG.locale,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`],
      creator: SITE_CONFIG.twitterHandle
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  };
}

export function generateWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/games?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateGameJsonLd(game: Game) {
  return {
    '@context': 'https://schema.org',
    '@type': ['VideoGame', 'SoftwareApplication'],
    name: game.title,
    description: game.tagline || game.description,
    url: `${SITE_CONFIG.url}/games/${game.slug}`,
    image: game.coverUrl.startsWith('http')
      ? game.coverUrl
      : `${SITE_CONFIG.url}${game.coverUrl}`,
    genre: [game.genreName, game.mechanicName],
    gamePlatform: game.platforms,
    applicationCategory: 'Game',
    operatingSystem: 'Windows, Web Browser, macOS',
    author: {
      '@type': 'Organization',
      name: game.developer || 'Independent AI Developer'
    },
    publisher: {
      '@type': 'Organization',
      name: game.publisher || 'Independent'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: (game.aiScore / 2).toFixed(1), // convert 10-scale to 5-scale for schema
      bestRating: '5',
      worstRating: '1',
      ratingCount: game.likeCount + 12
    },
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  };
}

export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_CONFIG.url}${item.url}`
    }))
  };
}

export function generateCollectionJsonLd(
  name: string,
  description: string,
  games: Game[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: `${SITE_CONFIG.url}/games`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: games.length,
      itemListElement: games.slice(0, 20).map((game, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: game.title,
        url: `${SITE_CONFIG.url}/games/${game.slug}`
      }))
    }
  };
}

export function generateArticleJsonLd(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.coverUrl.startsWith('http')
      ? article.coverUrl
      : `${SITE_CONFIG.url}${article.coverUrl}`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/articles/${article.slug}`
    }
  };
}
