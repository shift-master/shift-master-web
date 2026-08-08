import type { Metadata } from 'next';
import { SITE } from '@/config/site';
import { StepCard } from '@/components/molecules/step-card';
import { CtaButton } from '@/components/atoms/cta-button';

const TITLE = 'クローズドベータ テスター募集';
const DESCRIPTION =
  '勤務管理（Shift Master）のクローズドベータテスターを募集しています。参加は3ステップ・約2分です。';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/beta/' },
  openGraph: { title: TITLE, description: DESCRIPTION },
};

export default function Beta() {
  return (
    <main className="mx-auto max-w-[560px] px-5 py-12 pb-20">
      <div className="text-center">
        <span className="inline-block rounded-full bg-brand px-3 py-1 text-[0.78rem] font-bold tracking-wide text-white">
          🧪 クローズドベータ実施中
        </span>
        <h1 className="mt-4 text-2xl font-bold">テスター募集</h1>
        <p className="mt-4 leading-7 text-muted">
          製品版公開に向けたテストにご協力いただける方を募集しています。
          勤務時間の記録・集計、作業報告書(PDF)の出力、案件管理、クラウド同期などの機能を、
          製品版に先駆けてお試しいただけます🙏
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-[#f3e2af] bg-[#fff8e6] p-3.5 px-4.5 text-[0.9rem] text-[#6b5a16] dark:border-[#4a3f17] dark:bg-[#2a2410] dark:text-[#e8d79a]">
        <strong>必要なもの</strong>
        <br />
        ・Androidスマートフォン（Android 8.0 以上）
        <br />
        ・Googleアカウント（Gmail）
        <br />
        ※テスト版のため、不具合が含まれる場合があります。
      </div>

      <h2 className="mt-9 mb-0 text-xl font-bold">参加は3ステップ（約2分）</h2>

      <div className="mt-5 space-y-4">
        <StepCard number={1} title="テスターグループに参加">
          <p className="mb-3.5 text-[0.95rem] text-muted">
            下のボタンから Google グループに参加します（「グループに参加」をタップ）。
            このグループのメンバーだけがテストに参加できます。
          </p>
          <CtaButton href={SITE.testersGroupUrl}>① グループに参加する</CtaButton>
        </StepCard>

        <StepCard number={2} title="テスターになる">
          <p className="mb-3.5 text-[0.95rem] text-muted">
            グループ参加後、下のボタンを開いて{' '}
            <strong>「Become a tester（テスターになる）」</strong> をタップします。
          </p>
          <CtaButton href={SITE.playTestingUrl}>② テスターになる</CtaButton>
          <p className="mt-2.5 text-[0.85rem] text-muted">
            ※
            ①のグループ参加が反映されるまで数分かかる場合があります。エラーが出たら少し待って再度お試しください。
          </p>
        </StepCard>

        <StepCard number={3} title="Google Playでインストール">
          <p className="mb-3.5 text-[0.95rem] text-muted">
            ②のページの案内、または下のボタンから Google Play を開いてインストールします。
          </p>
          <CtaButton href={SITE.playStoreUrl} variant="ghost">
            ③ Google Playで開く
          </CtaButton>
        </StepCard>
      </div>

      <p className="mt-8 text-[0.85rem] text-muted">
        ご意見・ご感想は{' '}
        <a href={`mailto:${SITE.contactEmail}`} className="text-brand hover:underline">
          {SITE.contactEmail}
        </a>{' '}
        またはグループ{' '}
        <code className="rounded bg-brand/10 px-1.5 py-0.5 text-[0.85em]">
          {SITE.testersGroupEmail}
        </code>{' '}
        までお気軽にどうぞ。
      </p>
    </main>
  );
}
