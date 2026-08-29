import type { Metadata } from 'next';
import './globals.css';
import { SITE_CONFIG, generateWebsiteJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: SITE_CONFIG.defaultTitle,
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.author,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/logo.png`,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/logo.png`],
    creator: SITE_CONFIG.twitterHandle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [{ url: '/icon.svg' }],
    shortcut: ['/icon.svg']
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = generateWebsiteJsonLd();

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="canonical" href={SITE_CONFIG.url} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#101314] text-stone-100 antialiased selection:bg-emerald-400/30 selection:text-emerald-200">
        {children}
      </body>
    </html>
  );
}
