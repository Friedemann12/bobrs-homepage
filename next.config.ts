import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    loader: 'default'
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
  basePath: process.env.NODE_ENV === 'production' ? '' : ''
};

export default nextConfig;
