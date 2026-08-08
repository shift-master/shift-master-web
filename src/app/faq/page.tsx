import type { Metadata } from 'next';
import { SITE } from '@/config/site';
import { FAQ_ITEMS } from '@/config/faq';
import { StepCard } from '@/components/molecules/step-card';
import { CtaButton } from '@/components/atoms/cta-button';

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
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
