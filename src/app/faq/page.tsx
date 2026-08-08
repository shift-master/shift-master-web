import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQ_ITEMS } from '@/config/faq';

const TITLE = 'よくある質問';
const DESCRIPTION =
  '勤務管理（Shift Master）に関するよくある質問をまとめました。料金・対応OS・クローズドベータへの参加方法など。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/faq/' },
  openGraph: { title: TITLE, description: DESCRIPTION },
};

export default function Faq() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="text-2xl font-bold">よくある質問</h1>

      <div className="mt-8 space-y-10">
        {FAQ_ITEMS.map(item => (
          <div key={item.id} id={item.id} className="scroll-mt-20">
            <h2 className="text-lg font-bold">{item.question}</h2>
            <p className="mt-2 leading-7 text-muted">{item.answer}</p>

            {item.id === 'beta-join' && (
              <Link
                href="/beta/"
                className="mt-3 inline-block font-medium text-brand hover:underline"
              >
                テスター募集ページを見る →
              </Link>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
