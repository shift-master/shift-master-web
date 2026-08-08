/**
 * よくある質問の唯一の定義。
 *
 * id は id 属性としてそのまま使うため、他ページからのアンカーリンク
 * （例: /faq#beta-join）が壊れないよう変更に注意する。
 */
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'who-is-it-for',
    question: 'どんな人向けのアプリですか？',
    answer:
      'フリーランス・個人事業主の方を主な対象にした勤怠管理アプリです。勤務時間の記録・集計や、' +
      'クライアントへ提出する作業報告書の作成に使えます。',
  },
  {
    id: 'price',
    question: '料金はかかりますか？',
    answer:
      '現在は無料でご利用いただけます。今後の予定に変更がある場合は本サイトでお知らせします。',
  },
  {
    id: 'os',
    question: '対応している OS は？',
    answer: 'Android 8.0 以上に対応しています。iOS 版は開発中で、現在は準備中です。',
  },
  {
    id: 'data-safety',
    question: 'データはどこに保存されますか？安全ですか？',
    answer:
      '記録したデータは Cloud Firestore（Google Cloud）に暗号化通信（HTTPS / TLS）で保存されます。' +
      '詳しくはプライバシーポリシーをご確認ください。',
  },
  {
    id: 'beta-join',
    question: '今すぐ使うにはどうすればいいですか？',
    answer:
      '現在クローズドベータテストを実施中です。参加方法は専用のテスター募集ページにまとめています。',
  },
  {
    id: 'multi-device',
    question: '複数端末で使えますか？',
    answer: 'はい。クラウド同期に対応しているため、複数端末から同じデータを確認・編集できます。',
  },
  {
    id: 'delete-data',
    question: '退会やデータの削除はできますか？',
    answer:
      'アプリ内の設定から退会（全データ削除）ができます。削除方法が分からない場合は' +
      'お問い合わせ先までご連絡ください。',
  },
  {
    id: 'feedback',
    question: '不具合の報告や要望はどこにすればいいですか？',
    answer: 'お問い合わせページに記載のメールアドレスまでご連絡ください。',
  },
];
