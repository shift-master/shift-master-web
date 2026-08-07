import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/config/site';
import { StepCard } from '@/components/molecules/step-card';
import { CtaButton } from '@/components/atoms/cta-button';

export default function Home() {
  return (
    <main className="mx-auto max-w-[560px] px-5 py-8 pb-16">
      <header className="mb-7 text-center">
        <Image
          src="/icon.png"
          alt="勤務管理 アイコン"
          width={96}
          height={96}
          priority
          className="mx-auto rounded-[24px] shadow-lg"
        />
        <h1 className="mt-4 mb-1 text-2xl font-bold">勤務管理</h1>
        <p className="mb-2.5 text-muted">シフト管理をスマートに</p>
        <span className="inline-block rounded-full bg-brand px-3 py-1 text-[0.78rem] font-bold tracking-wide text-white">
          🧪 クローズドテスター募集中
        </span>
      </header>

      <Image
        src="/feature.png"
        alt="勤務管理"
        width={1024}
        height={500}
        className="my-5 w-full rounded-2xl shadow-md"
      />

      <p className="leading-7">
        フリーランス・個人事業主向けの<strong>勤怠管理アプリ</strong>です。
        勤務時間の記録・集計、作業報告書(PDF)の出力、案件管理、クラウド同期に対応しています。
        製品版公開に向けたテストにご協力いただける方を募集しています🙏
      </p>

      <div className="my-3.5 flex gap-2.5 overflow-x-auto py-1">
        <Image
          src="/shot_home.png"
          alt="ホーム画面"
          width={1200}
          height={2400}
          className="h-[300px] w-auto flex-none rounded-2xl border border-border"
        />
        <Image
          src="/shot_report.png"
          alt="レポート画面"
          width={1200}
          height={2400}
          className="h-[300px] w-auto flex-none rounded-2xl border border-border"
        />
      </div>

      <div className="rounded-2xl border border-[#f3e2af] bg-[#fff8e6] p-3.5 px-4.5 text-[0.9rem] text-[#6b5a16] dark:border-[#4a3f17] dark:bg-[#2a2410] dark:text-[#e8d79a]">
        <strong>必要なもの</strong>
        <br />
        ・Androidスマートフォン（Android 8.0 以上）
        <br />
        ・Googleアカウント（Gmail）
        <br />
        ※テスト版のため、不具合が含まれる場合があります。
      </div>

      <h2 className="mt-7 mb-0 text-xl font-bold">参加は3ステップ（約2分）</h2>

      <StepCard number={1} title="テスターグループに参加">
        <p className="mb-3.5 text-[0.95rem] text-muted">
          下のボタンからGoogleグループに参加します（「グループに参加」をタップ）。
          このグループのメンバーだけがテストに参加できます。
        </p>
        <CtaButton href={SITE.testersGroupUrl}>① グループに参加する</CtaButton>
      </StepCard>

      <StepCard number={2} title="テスターになる">
        <p className="mb-3.5 text-[0.95rem] text-muted">
          グループ参加後、下のボタンを開いて <strong>「Become a tester（テスターになる）」</strong>{' '}
          をタップします。
        </p>
        <CtaButton href={SITE.playTestingUrl}>② テスターになる</CtaButton>
        <p className="mt-2.5 text-[0.85rem] text-muted">
          ※ ①のグループ参加が反映されるまで数分かかる場合があります。
          エラーが出たら少し待って再度お試しください。
        </p>
      </StepCard>

      <StepCard number={3} title="Google Playでインストール">
        <p className="mb-3.5 text-[0.95rem] text-muted">
          ②のページの案内、または下のボタンからGoogle Playを開いてインストールします。
        </p>
        <CtaButton href={SITE.playStoreUrl} variant="ghost">
          ③ Google Playで開く
        </CtaButton>
      </StepCard>

      <p className="text-[0.85rem] text-muted">
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

      <footer className="mt-9 text-center text-[0.82rem] text-muted">
        勤務管理 (Shift Master) ・{' '}
        <Link href="/privacy-policy/" className="text-brand hover:underline">
          プライバシーポリシー
        </Link>
        <br />© {new Date().getFullYear()} {SITE.author}
      </footer>
    </main>
  );
}
