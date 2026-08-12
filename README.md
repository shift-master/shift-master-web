# shift-master-web

勤務管理 (Shift Master) の公式サイトです。トップページ・機能紹介・テスター募集・よくある質問・
利用規約・お問い合わせ・プライバシーポリシーを配信します。

## 祝日 API

日本の祝日・休日一覧を JSON で公開しています。内閣府「国民の祝日について」が公開する
[CSV データ](https://www8.cao.go.jp/chosei/shukujitsu/syukujitsu.csv)を基にしており、振替休日と
国民の休日も含みます。

```text
GET https://shift-master.services.gekal.cn/api/holidays/2026
```

URL の年を指定すると、国コード、対象年、日付順の祝日一覧を返します。指定できる年は
1955〜2027年です。

```json
{
  "countryCode": "JP",
  "year": 2026,
  "items": [{ "date": "2026-01-01", "name": "元日" }]
}
```

データ更新時は [src/config/japanese-holidays.ts](src/config/japanese-holidays.ts) を内閣府 CSV と
照合し、収録年と内容を更新してください。

## 公開 URL

https://shift-master.services.gekal.cn/

`main` へ push すると GitHub Actions が `out/` を静的書き出しし、GitHub Pages へ配信します。

## 前提条件

- Node.js 24 以上

## セットアップ

```bash
npm ci
npm run dev
```

http://localhost:3000 で確認できます。

## ページの追加・編集

記事一覧のような仕組みは持たず、`src/app/` 配下にページを直接書く構成です。

- トップページ: [src/app/page.tsx](src/app/page.tsx)
- 機能紹介: [src/app/features/page.tsx](src/app/features/page.tsx)（データは [src/config/features.ts](src/config/features.ts)）
- テスター募集: [src/app/beta/page.tsx](src/app/beta/page.tsx)（クローズドベータの参加手順。
  サイト内の「今すぐ試す」系 CTA はすべてここへリンクする）
- よくある質問: [src/app/faq/page.tsx](src/app/faq/page.tsx)（データは [src/config/faq.ts](src/config/faq.ts)）
- 祝日カレンダー: [src/app/holidays/page.tsx](src/app/holidays/page.tsx)
- 利用規約: [src/app/terms/page.tsx](src/app/terms/page.tsx)
- お問い合わせ: [src/app/contact/page.tsx](src/app/contact/page.tsx)
- プライバシーポリシー: [src/app/privacy-policy/page.tsx](src/app/privacy-policy/page.tsx)
- サイト共通の名称・URL・連絡先: [src/config/site.ts](src/config/site.ts)（直書きせずここを参照する）
- ヘッダー・フッター（全ページ共通）: [src/components/organisms/site-header.tsx](src/components/organisms/site-header.tsx) /
  [site-footer.tsx](src/components/organisms/site-footer.tsx)

新しいページを追加したら、[src/app/sitemap.ts](src/app/sitemap.ts) にも追記してください。

## 公開前の確認

```bash
npm run typecheck
npm run lint
npm run build
npm run preview   # http://localhost:3000 で out/ を確認
```

`npm run dev` で問題なくても書き出しで壊れることがあるため、公開前は必ず `build` → `preview` で確認します。

## ディレクトリ構成

| パス                              | 内容                                                                                     |
| --------------------------------- | ---------------------------------------------------------------------------------------- |
| `src/app/`                        | ルーティング（`page.tsx` / `layout.tsx` / `sitemap.ts` / `robots.ts` / `not-found.tsx`） |
| `src/components/atoms/`           | 最小の UI 部品（CTA ボタンなど）                                                         |
| `src/components/molecules/`       | atoms を束ねた部品（ステップカード・機能カードなど）                                     |
| `src/components/organisms/`       | ヘッダー・フッターなど、全ページ共通のまとまり                                           |
| `src/config/site.ts`              | サイト名・URL・連絡先の唯一の定義                                                        |
| `src/config/features.ts`          | 機能紹介の唯一の定義（トップページのティザーと /features で共有）                        |
| `src/config/faq.ts`               | よくある質問の唯一の定義                                                                 |
| `src/config/japanese-holidays.ts` | 祝日 API で公開する内閣府準拠の日本の祝日・休日一覧                                      |
| `public/`                         | 画像・`CNAME`（GitHub Pages の独自ドメイン設定）                                         |

## 移行元について

以前は `shift-master-android` リポジトリの `hosting/` から Firebase Hosting
（`shift-master-29a67.web.app`）で配信していました。このリポジトリへ移行し、Firebase Hosting の
設定は Android 側から削除しています。詳細は `shift-master-docs` の `docs/release.md` を参照してください。
