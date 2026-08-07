import type { Metadata } from 'next';
import { SITE } from '@/config/site';

const TITLE = 'プライバシーポリシー';
const DESCRIPTION = `${SITE.shortName}アプリのプライバシーポリシー。収集する情報、利用目的、第三者サービス、データの削除方法について説明します。`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/privacy-policy/' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

const dataCategories = [
  {
    category: 'アカウント情報',
    detail:
      'メールアドレス、認証情報(パスワードは認証基盤が安全に管理)、Google / GitHub アカウントによるログイン時のアカウント識別子',
    purpose: 'ユーザー認証、アカウントの作成・管理',
  },
  {
    category: 'プロフィール情報',
    detail: '表示名、メールアドレス、電話番号、部署、役職(いずれもユーザーが任意に入力)',
    purpose: '報告書の作成、アプリ内表示',
  },
  {
    category: '勤務データ',
    detail: '勤務開始/終了時刻、休憩時間、作業内容、勤務区分、休暇区分、メモ、案件情報',
    purpose: '勤怠の記録・集計・報告書(PDF)の生成',
  },
  {
    category: '利用状況・診断情報',
    detail: 'アプリの利用イベント、端末情報、広告ID(Android 広告 ID)',
    purpose: 'アプリの分析・品質改善(Google アナリティクス for Firebase)',
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-[820px] px-5 py-8 pb-20 leading-loose">
      <h1 className="mb-1 text-2xl font-bold">プライバシーポリシー</h1>
      <p className="mb-6 text-sm text-muted">
        アプリ名: {SITE.name}
        <br />
        最終更新日: 2026年6月29日
      </p>

      <p>
        本プライバシーポリシー(以下「本ポリシー」)は、勤務管理(Shift
        Master、以下「本アプリ」)における
        ユーザー情報の取り扱いについて定めるものです。本アプリをご利用いただく前に、本ポリシーをお読み
        ください。本アプリを利用することにより、ユーザーは本ポリシーに同意したものとみなされます。
      </p>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">1. 収集する情報</h2>
      <p>本アプリは、サービスの提供および改善のために、以下の情報を収集・保存します。</p>

      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface">
              <th className="border border-border p-2.5 text-left">区分</th>
              <th className="border border-border p-2.5 text-left">具体的な情報</th>
              <th className="border border-border p-2.5 text-left">収集の目的</th>
            </tr>
          </thead>
          <tbody>
            {dataCategories.map(row => (
              <tr key={row.category}>
                <td className="border border-border p-2.5 align-top">{row.category}</td>
                <td className="border border-border p-2.5 align-top">{row.detail}</td>
                <td className="border border-border p-2.5 align-top">{row.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">2. 情報の利用目的</h2>
      <ul className="list-disc pl-6">
        <li>本アプリの基本機能(勤怠記録、集計、報告書生成)の提供</li>
        <li>ユーザー認証およびアカウント管理</li>
        <li>複数端末間でのデータ同期</li>
        <li>アプリの不具合解析、性能および機能の改善</li>
      </ul>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">
        3. 第三者サービスの利用
      </h2>
      <p>
        本アプリは、以下の Google(Firebase)サービスを利用しています。これらのサービスにおける
        データの取り扱いは、各社のプライバシーポリシーに準拠します。
      </p>
      <ul className="list-disc pl-6">
        <li>
          <strong>Firebase Authentication</strong> — ユーザー認証
        </li>
        <li>
          <strong>Cloud Firestore</strong> — 勤務データ・プロフィールのクラウド保存および同期
        </li>
        <li>
          <strong>Google アナリティクス for Firebase</strong> — 利用状況の分析
        </li>
      </ul>
      <p>
        Google のプライバシーポリシー:{' '}
        <a href="https://policies.google.com/privacy" className="text-brand hover:underline">
          https://policies.google.com/privacy
        </a>
      </p>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">
        4. データの保存と保護
      </h2>
      <ul className="list-disc pl-6">
        <li>
          収集したデータは、ユーザー本人の操作に紐づけてクラウド(Cloud Firestore)に保存されます。
        </li>
        <li>通信は暗号化(HTTPS / TLS)されます。</li>
        <li>勤務データは端末内のローカルデータベースにも保存され、クラウドと同期されます。</li>
      </ul>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">5. データの共有</h2>
      <p>
        本アプリは、法令に基づく場合を除き、収集したユーザーデータを第三者に販売・譲渡しません。
        本アプリは、サービス提供に必要な範囲で上記の第三者サービス(Firebase)を利用します。
      </p>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">6. データの削除</h2>
      <p>
        ユーザーは、自身のデータの削除を希望する場合、下記の連絡先までご連絡ください。
        アカウントおよび関連する勤務データ・プロフィール情報を削除します。
        アプリ内からデータを削除した場合も、対応するクラウド上のデータが削除されます。
      </p>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">
        7. 児童のプライバシー
      </h2>
      <p>
        本アプリは業務利用を想定しており、13歳未満の児童を対象としていません。
        児童から意図的に個人情報を収集することはありません。
      </p>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">8. 本ポリシーの変更</h2>
      <p>
        本ポリシーは、必要に応じて改定されることがあります。重要な変更がある場合は、本ページ上で告知します。
      </p>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">9. お問い合わせ</h2>
      <p>
        本ポリシーおよびデータの取り扱いに関するお問い合わせ・削除依頼は、以下までご連絡ください。
      </p>
      <p>
        メール:{' '}
        <a href={`mailto:${SITE.contactEmail}`} className="text-brand hover:underline">
          {SITE.contactEmail}
        </a>
      </p>

      <hr className="my-12 border-border" />

      <h1 id="en" className="mb-1 text-2xl font-bold">
        Privacy Policy <span className="text-sm font-normal text-muted">(English)</span>
      </h1>
      <p className="mb-6 text-sm text-muted">
        App: Shift Master (勤務管理)
        <br />
        Last updated: June 29, 2026
      </p>

      <p>
        This Privacy Policy describes how Shift Master (the &quot;App&quot;) handles user
        information. By using the App, you agree to the practices described in this policy.
      </p>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">
        1. Information We Collect
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Account information</strong>: email address, authentication credentials (passwords
          are securely managed by the authentication provider), and account identifiers when signing
          in with Google or GitHub.
        </li>
        <li>
          <strong>Profile information</strong>: display name, email, phone number, department, and
          position (all optionally entered by the user).
        </li>
        <li>
          <strong>Work data</strong>: clock-in/out times, break time, work content, work and leave
          types, notes, and project information.
        </li>
        <li>
          <strong>Usage &amp; diagnostics</strong>: app usage events, device information, and the
          Android Advertising ID (via Google Analytics for Firebase).
        </li>
      </ul>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">
        2. How We Use Information
      </h2>
      <p>
        To provide core features (attendance tracking, aggregation, PDF report generation),
        authenticate users, sync data across devices, and analyze and improve the App.
      </p>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">
        3. Third-Party Services
      </h2>
      <p>
        The App uses Firebase Authentication, Cloud Firestore, and Google Analytics for Firebase.
        See Google&apos;s Privacy Policy:{' '}
        <a href="https://policies.google.com/privacy" className="text-brand hover:underline">
          https://policies.google.com/privacy
        </a>
      </p>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">
        4. Data Retention &amp; Security
      </h2>
      <p>
        Data is stored in the cloud (Cloud Firestore) associated with the user&apos;s account and on
        the local device. All network communication is encrypted via HTTPS/TLS.
      </p>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">5. Data Sharing</h2>
      <p>
        We do not sell or transfer user data to third parties except as required by law or as
        necessary to provide the service through the Firebase services listed above.
      </p>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">6. Data Deletion</h2>
      <p>To request deletion of your account and associated data, contact us at the email below.</p>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">
        7. Children&apos;s Privacy
      </h2>
      <p>The App is intended for business use and is not directed to children under 13.</p>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">
        8. Changes to This Policy
      </h2>
      <p>
        We may update this policy from time to time. Significant changes will be announced on this
        page.
      </p>

      <h2 className="mt-9 border-b-2 border-current pb-1 text-lg font-bold">9. Contact</h2>
      <p>
        Email:{' '}
        <a href={`mailto:${SITE.contactEmail}`} className="text-brand hover:underline">
          {SITE.contactEmail}
        </a>
      </p>
    </main>
  );
}
