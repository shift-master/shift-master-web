/**
 * 機能紹介の唯一の定義。
 *
 * トップページのティザーと /features の詳細ページで同じデータを使うため、
 * 各ページに直書きしない。
 */
export interface Feature {
  id: string;
  icon: string;
  title: string;
  /** トップページのティザー用。1文程度 */
  summary: string;
  /** /features 用。もう少し詳しく */
  description: string;
}

export const FEATURES: Feature[] = [
  {
    id: 'tracking',
    icon: '⏱️',
    title: '勤務時間の記録・集計',
    summary: '出退勤・休憩時間を記録し、月ごとに自動集計します。',
    description:
      '出勤・退勤の時刻や休憩時間をその場で記録できます。記録した勤務データは月ごとに自動で集計され、' +
      '合計勤務時間や残業時間をすぐに確認できます。',
  },
  {
    id: 'report',
    icon: '📄',
    title: '作業報告書の出力',
    summary: 'PDF / CSV / Excel 形式で、そのまま提出できる報告書を作成。',
    description:
      '案件ごとの勤務実績をまとめた作業報告書を、PDF・CSV・Excel の3形式で出力できます。' +
      'クライアントへの提出や、確定申告の資料としてもそのまま使えます。',
  },
  {
    id: 'project',
    icon: '📁',
    title: '案件管理',
    summary: '複数の案件を並行して管理し、案件ごとの実績を把握。',
    description:
      '複数のクライアント・案件を同時に管理できます。案件ごとに稼働期間や稼働時間を紐づけて記録するため、' +
      '「どの案件にどれだけ稼働したか」が一目で分かります。',
  },
  {
    id: 'sync',
    icon: '☁️',
    title: 'クラウド同期',
    summary: '複数端末間でデータを同期。機種変更時も安心です。',
    description:
      '記録した勤務データはクラウドに同期されるため、スマートフォンとタブレットなど複数端末から' +
      '同じデータを確認できます。機種変更時もデータを引き継げます。',
  },
  {
    id: 'notification',
    icon: '🔔',
    title: '通知リマインド',
    summary: '始業・終業の時刻を通知でお知らせします。',
    description:
      'あらかじめ設定した時刻に、始業・終業のリマインド通知が届きます。' +
      '記録し忘れを防ぎ、毎日の記録を習慣化できます。',
  },
  {
    id: 'holiday',
    icon: '📅',
    title: '祝日・休暇管理',
    summary: '日本の祝日を自動判定し、休暇区分にも対応。',
    description:
      '日本の祝日（振替休日・国民の休日を含む）を自動で判定します。有給休暇・全休といった休暇区分も' +
      '記録でき、稼働実績の集計から正しく除外されます。',
  },
  {
    id: 'login',
    icon: '🔐',
    title: 'かんたんログイン',
    summary: 'Google / GitHub アカウントで、登録不要ですぐに使えます。',
    description:
      'Google または GitHub アカウントでログインできます。新しくパスワードを決めて登録する手間はありません。',
  },
];
