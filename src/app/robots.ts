import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/']
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1
      },
      {
        userAgent: 'Googlebot',
        allow: '/'
      }
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`
  };
}
