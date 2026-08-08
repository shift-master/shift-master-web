import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/config/site';

const NAV_LINKS = [
  { href: '/features/', label: '機能紹介' },
  { href: '/faq/', label: 'よくある質問' },
  { href: '/contact/', label: 'お問い合わせ' },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-5 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Image src="/icon.png" alt="" width={28} height={28} className="rounded-md" />
          {SITE.shortName}
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-brand">
              {link.label}
            </Link>
          ))}
          <Link
            href="/beta/"
            className="rounded-full bg-brand px-3.5 py-1.5 font-bold text-white hover:bg-brand-dark"
          >
            テスター募集
          </Link>
        </nav>
      </div>
    </header>
  );
}
