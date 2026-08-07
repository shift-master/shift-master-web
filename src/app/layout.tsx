import type { Metadata } from 'next';
import './globals.css';
import { SITE } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.name, template: `%s | ${SITE.shortName}` },
  description: SITE.description,
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    siteName: SITE.name,
    images: [SITE.ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
