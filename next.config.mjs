/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  experimental: {},
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/aimlclub_website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/aimlclub_website/' : ''
};

export default nextConfig;
