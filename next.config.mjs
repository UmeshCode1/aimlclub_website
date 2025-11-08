/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // For GitHub Pages static export, keep unoptimized to avoid runtime image loader
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  experimental: {},
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/aimlclub_website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/aimlclub_website/' : ''
};

export default nextConfig;
