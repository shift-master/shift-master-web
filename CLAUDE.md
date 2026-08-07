@AGENTS.md

# CLAUDE.md

このファイルは、このリポジトリで作業する際に Claude Code (claude.ai/code) へのガイダンスを提供します。

## プロジェクト概要

勤務管理 (Shift Master) の公式サイトです。Next.js の `output: 'export'` で静的書き出しし、
GitHub Pages（独自ドメイン `shift-master.services.gekal.cn`）で配信します。
サーバ・DB は持ちません。テスター募集ページとプライバシーポリシーの 2 ページのみの構成です。

以前は `shift-master-android` の `hosting/` から Firebase Hosting で配信していましたが、
このリポジトリに移行しました。旧コンテンツとの対応は [README.md](README.md) を参照してください。

## コマンド

```bash
npm run dev          # 開発サーバ（http://localhost:3000）
npm run typecheck    # 型チェック
npm run lint         # ESLint
npm run build        # out/ へ静的書き出し
npm run preview      # out/ をローカル配信して確認（公開前に必ず実行する）
npm run format       # Prettier で整形
```

## 注意事項

- `next.config.ts` の `basePath` は独自ドメインでのルート配信を前提に空文字にしてあります。
  GitHub Pages のプロジェクトページ（サブパス配下）に戻す場合は
  `NEXT_PUBLIC_BASE_PATH` を渡すよう CI を調整してください
- サイト名・URL・連絡先などは `src/config/site.ts` の一箇所にまとめてあります。直書きしないこと
- ページ数が少なく状態を持たないため `content/` ディレクトリと `src/lib/` は作っていません。
  記事一覧のような機能が要るようになったら `nextjs-static-site-conventions` スキルの
  `references/content-and-seo.md` を参照して追加してください
- テスト対象になる純粋関数が無いため `npm test` は用意していません
