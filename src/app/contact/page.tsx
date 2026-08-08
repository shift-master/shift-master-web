import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/config/site';

const TITLE = 'お問い合わせ';
const DESCRIPTION = `${SITE.shortName}へのお問い合わせ方法です。`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/contact/' },
  openGraph: { title: TITLE, description: DESCRIPTION },
};

export default function Contact() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12">
      <h1 className="text-2xl font-bold">お問い合わせ</h1>
      <p className="mt-3 leading-7 text-muted">
        不具合のご報告、ご意見・ご要望など、お気軽にご連絡ください。
      </p>

      <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
        <h2 className="font-bold">メールでのお問い合わせ</h2>
        <a
          href={`mailto:${SITE.contactEmail}`}
          className="mt-2 inline-block text-brand hover:underline"
        >
          {SITE.contactEmail}
        </a>
      </div>

      <div className="mt-4 rounded-2xl border border-border bg-surface p-6">
        <h2 className="font-bold">クローズドベータのテスト参加について</h2>
        <p className="mt-2 text-sm text-muted">
          参加方法は{' '}
          <Link href="/faq/#beta-join" className="text-brand hover:underline">
            よくある質問
          </Link>{' '}
          をご覧ください。テスターグループに関するお問い合わせは{' '}
          <code className="rounded bg-brand/10 px-1.5 py-0.5 text-[0.85em]">
            {SITE.testersGroupEmail}
          </code>{' '}
          までどうぞ。
        </p>
      </div>
    </main>
  );
}
