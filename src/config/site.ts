/**
 * サイト全体の定義。
 *
 * メタデータ、sitemap、OGP、フッターで同じ値を使うため、名称やURLを各ファイルへ直接書かない。
 * ブラウザへ配信される設定なので、秘密情報は置かないこと。
 */
export const SITE = {
  name: '勤務管理 (Shift Master)',
  shortName: '勤務管理',
  description:
    'フリーランス・個人事業主向け勤怠管理アプリ「勤務管理」の公式サイト。勤務時間の記録・集計、作業報告書(PDF)の出力、案件管理、クラウド同期に対応。',
  /** 本番の公開URL。末尾スラッシュなし。metadataBase と sitemap が使う */
  url: 'https://shift-master.services.gekal.cn',
  locale: 'ja_JP',
  author: 'gekal',
  contactEmail: 'koei.ryuu@gmail.com',
  ogImage: '/feature.png',
  // cn.gekal.shiftmaster から cn.gekal.android.shiftmaster への移行に伴い、
  // Play Console 上は新しいアプリとして登録し直し。テスト参加者は再登録が必要。
  playStoreUrl: 'https://play.google.com/store/apps/details?id=cn.gekal.android.shiftmaster',
  playTestingUrl: 'https://play.google.com/apps/testing/cn.gekal.android.shiftmaster',
  testersGroupUrl: 'https://groups.google.com/g/shiftmaster-testers',
  testersGroupEmail: 'shiftmaster-testers@googlegroups.com',
} as const;
