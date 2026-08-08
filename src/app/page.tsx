import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/config/site';
import { FEATURES } from '@/config/features';
import { FeatureCard } from '@/components/molecules/feature-card';

const TEASER_FEATURES = FEATURES.slice(0, 4);

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-4xl px-5 pt-16 pb-8 text-center">
        <Image
          src="/icon.png"
          alt=""
          width={96}
          height={96}
          priority
          className="mx-auto rounded-[24px] shadow-lg"
        />
        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">勤務管理</h1>
        <p className="mt-2 text-lg text-muted">シフト管理をスマートに</p>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-muted">{SITE.description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/faq/#beta-join"
            className="w-full rounded-xl bg-brand px-6 py-3.5 text-center font-bold text-white transition-colors hover:bg-brand-dark sm:w-auto"
          >
            今すぐ試す（クローズドベータ）
          </Link>
          <Link
            href="/features/"
            className="w-full rounded-xl border border-brand bg-brand-tint px-6 py-3.5 text-center font-bold text-brand sm:w-auto"
          >
            機能を見る
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5">
        <Image
          src="/feature.png"
          alt="勤務管理"
          width={1024}
          height={500}
          className="w-full rounded-2xl shadow-md"
        />
      </div>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="text-center text-2xl font-bold">主な機能</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TEASER_FEATURES.map(feature => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/features/" className="font-medium text-brand hover:underline">
            すべての機能を見る →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="flex gap-3 overflow-x-auto py-1">
          <Image
            src="/shot_home.png"
            alt="ホーム画面"
            width={1200}
            height={2400}
            className="h-[320px] w-auto flex-none rounded-2xl border border-border"
          />
          <Image
            src="/shot_report.png"
            alt="レポート画面"
            width={1200}
            height={2400}
            className="h-[320px] w-auto flex-none rounded-2xl border border-border"
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-20">
        <div className="rounded-2xl border border-border bg-surface p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <div>
            <span className="inline-block rounded-full bg-brand px-3 py-1 text-[0.78rem] font-bold tracking-wide text-white">
              🧪 クローズドベータ実施中
            </span>
            <p className="mt-3 text-sm text-muted">
              製品版公開に向けて、テストにご協力いただける方を募集しています。参加は3ステップ・約2分です。
            </p>
          </div>
          <Link
            href="/faq/#beta-join"
            className="mt-4 inline-block flex-none rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white hover:bg-brand-dark sm:mt-0 sm:ml-6"
          >
            参加方法を見る
          </Link>
        </div>
      </section>
    </main>
  );
}
