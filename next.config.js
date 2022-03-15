/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  swcMinify: true,
  // experimental: {
  //   concurrentFeatures: false,
  //   serverComponents: false,
  // },
  // i18n: {
  //   locales: ['en', 'ja', 'zh-CN'],
  //   defaultLocale: 'en',
  // },
  webpack: (config) => {
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
};
