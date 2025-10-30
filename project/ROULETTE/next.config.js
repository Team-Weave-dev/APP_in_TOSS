/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static Export for Apps in Toss WebView
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Base path for deployment (if needed)
  // basePath: '/roulette',

  // Trailing slash for static export
  trailingSlash: true,

  // Environment variables
  env: {
    NEXT_PUBLIC_INTOSS_APP_NAME: process.env.NEXT_PUBLIC_INTOSS_APP_NAME || 'roulette',
    NEXT_PUBLIC_INTOSS_DEBUG: process.env.NEXT_PUBLIC_INTOSS_DEBUG || 'false',
  },

  // Webpack configuration
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
