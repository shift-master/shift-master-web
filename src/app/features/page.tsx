import type { Metadata } from 'next';
import Link from 'next/link';
import { FEATURES } from '@/config/features';
import { FeatureCard } from '@/components/molecules/feature-card';

const TITLE = '機能紹介';
const DESCRIPTION =
  '勤務管理（Shift Master）でできることを紹介します。勤務記録・報告書出力・案件管理・クラウド同期など。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/features/' },
  openGraph: { title: TITLE, description: DESCRIPTION },
};

export default function Features() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <h1 className="text-2xl font-bold">機能紹介</h1>
      <p className="mt-2 text-muted">
        フリーランス・個人事業主の勤怠管理を、シンプルに。勤務管理でできることをまとめました。
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {FEATURES.map(feature => (
          <FeatureCard key={feature.id} feature={feature} detailed />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/faq/#beta-join"
          className="inline-block rounded-xl bg-brand px-6 py-3.5 font-bold text-white hover:bg-brand-dark"
        >
          今すぐ試す（クローズドベータ）
        </Link>
      </div>
    </main>
  );
}
