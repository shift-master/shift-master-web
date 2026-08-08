import type { MetadataRoute } from 'next';
import { SITE } from '@/config/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/features/', '/faq/', '/terms/', '/contact/', '/privacy-policy/'];
  return paths.map(path => ({ url: `${SITE.url}${path}`, lastModified: new Date() }));
}
