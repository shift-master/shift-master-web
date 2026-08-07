import type { NextConfig } from 'next';

// 独自ドメイン（shift-master.services.gekal.cn）でルート配信するため basePath は空文字のまま。
// GitHub Pages のプロジェクトページ（サブパス配下）へ切り替えるときだけ環境変数で渡す。
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
};

export default nextConfig;
