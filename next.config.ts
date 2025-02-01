import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/<repository-name>' : '',
  assetPrefix: isProd ? '/<repository-name>/' : '',
};

export default nextConfig;
