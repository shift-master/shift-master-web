import type { Metadata } from 'next';
import { SITE } from '@/config/site';

const TITLE = '利用規約';
const DESCRIPTION = `${SITE.shortName}の利用規約です。`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/terms/' },
  openGraph: { title: TITLE, description: DESCRIPTION },
};

export default function Terms() {
  return (
    <main className="mx-auto max-w-[820px] px-5 py-12 leading-loose">
      <h1 className="mb-1 text-2xl font-bold">利用規約</h1>
      <p className="mb-6 text-sm text-muted">制定日: 2026年8月8日</p>

      <p>
        本利用規約（以下「本規約」）は、{SITE.author}（以下「開発者」）が提供する
        {SITE.name}（以下「本サービス」）の利用条件を定めるものです。ユーザーは本サービスを
        利用することにより、本規約に同意したものとみなされます。
      </p>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">第1条（適用）</h2>
      <p>本規約は、ユーザーと開発者との間の本サービスの利用に関わる一切の関係に適用されます。</p>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">第2条（利用登録）</h2>
      <p>
        本サービスは、Google または GitHub アカウントによるログインをもって利用登録とします。
        開発者は、登録希望者に以下の事由があると判断した場合、利用登録を拒否することがあります。
      </p>
      <ul className="list-disc pl-6">
        <li>本規約に違反するおそれがあると開発者が判断した場合</li>
        <li>その他、開発者が利用登録を相当でないと判断した場合</li>
      </ul>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">第3条（禁止事項）</h2>
      <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
      <ul className="list-disc pl-6">
        <li>法令または公序良俗に違反する行為</li>
        <li>本サービスのサーバーやネットワークに過度な負荷をかける行為</li>
        <li>本サービスの運営を妨害するおそれのある行為</li>
        <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
        <li>不正な目的をもって本サービスを利用する行為</li>
        <li>本サービスのリバースエンジニアリングその他の解析行為</li>
        <li>その他、開発者が不適切と判断する行為</li>
      </ul>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">
        第4条（本サービスの提供の停止等）
      </h2>
      <p>
        開発者は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく
        本サービスの全部または一部の提供を停止または中断することができるものとします。
      </p>
      <ul className="list-disc pl-6">
        <li>本サービスにかかるシステムの保守点検または更新を行う場合</li>
        <li>
          地震、落雷、火災、停電または天災などの不可抗力により本サービスの提供が困難となった場合
        </li>
        <li>その他、開発者が本サービスの提供が困難と判断した場合</li>
      </ul>
      <p>
        開発者は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被った
        不利益または損害について、一切の責任を負わないものとします。
      </p>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">
        第5条（保証の否認および免責事項）
      </h2>
      <p>
        本サービスは現状有姿で提供され、開発者は本サービスがユーザーの特定の目的に適合すること、
        期待する機能・正確性・有用性を有すること、および不具合が生じないことについて、
        いかなる保証も行いません。
      </p>
      <p>
        開発者は、本サービスに起因してユーザーに生じたあらゆる損害について、
        開発者の故意または重過失による場合を除き、一切の責任を負わないものとします。
      </p>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">
        第6条（本サービス内容の変更等）
      </h2>
      <p>
        開発者は、ユーザーへの事前の告知なしに、本サービスの内容を変更・追加または廃止することが
        あり、これによってユーザーに生じた損害について一切の責任を負いません。
      </p>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">
        第7条（利用規約の変更）
      </h2>
      <p>
        開発者は、必要と判断した場合には、ユーザーに通知することなく本規約を変更できるものとします。
        変更後の本規約は、本サービス上に表示した時点より効力を生じるものとします。
      </p>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">
        第8条（通知または連絡）
      </h2>
      <p>
        ユーザーと開発者との間の通知または連絡は、開発者の定める方法によって行うものとします。
        お問い合わせは
        <a href={`mailto:${SITE.contactEmail}`} className="text-brand hover:underline">
          {SITE.contactEmail}
        </a>
        までお願いします。
      </p>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">
        第9条（準拠法・裁判管轄）
      </h2>
      <p>
        本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、
        開発者の住所地を管轄する裁判所を専属的合意管轄とします。
      </p>
    </main>
  );
}
