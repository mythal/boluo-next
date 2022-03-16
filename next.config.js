/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')();
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ANALYZE = Boolean(process.env.ANALYZE);
const BACKEND_URL = process.env.BACKEND_URL || 'https://test.boluo.chat';

module.exports = withMDX({
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${BACKEND_URL}/api/:path*`, // Proxy to Backend
      },
    ];
  },
  webpack: (config) => {
    if (ANALYZE) {
      const plugin = new BundleAnalyzerPlugin({
        analyzerMode: 'static',
      });
      config.plugins.push(plugin);
    }

    // noinspection JSValidateTypes
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // `react-intl` without parser
    // https://formatjs.io/docs/guides/advanced-usage#react-intl-without-parser-40-smaller
    // https://github.com/vercel/next.js/issues/30434
    config.resolve.alias['@formatjs/icu-messageformat-parser'] = '@formatjs/icu-messageformat-parser/no-parser';
    return config;
  },
});
