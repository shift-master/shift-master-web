import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-2xl font-bold">ページが見つかりません</h1>
      <p className="text-muted">お探しのページは移動または削除された可能性があります。</p>
      <Link href="/" className="font-medium text-brand hover:underline">
        トップページへ戻る
      </Link>
    </main>
  );
}
