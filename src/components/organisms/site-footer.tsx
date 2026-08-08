import Link from 'next/link';
import { SITE } from '@/config/site';

const LEGAL_LINKS = [
  { href: '/terms/', label: '利用規約' },
  { href: '/privacy-policy/', label: 'プライバシーポリシー' },
];

const NAV_LINKS = [
  { href: '/features/', label: '機能紹介' },
  { href: '/beta/', label: 'テスター募集' },
  { href: '/faq/', label: 'よくある質問' },
  { href: '/contact/', label: 'お問い合わせ' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:justify-between">
        <div>
          <p className="font-bold text-foreground">{SITE.name}</p>
          <p className="mt-1">{SITE.description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <nav className="flex flex-wrap gap-x-4 gap-y-1 sm:justify-end">
            {NAV_LINKS.map(link => (
              <Link key={link.href} href={link.href} className="hover:text-brand">
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 sm:justify-end">
            {LEGAL_LINKS.map(link => (
              <Link key={link.href} href={link.href} className="hover:text-brand">
                {link.label}
              </Link>
            ))}
          </nav>
          <p>
            © {new Date().getFullYear()} {SITE.author}
          </p>
        </div>
      </div>
    </footer>
  );
}
