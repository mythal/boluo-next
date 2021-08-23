/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  webpack5: true,
  i18n: {
    locales: ['en', 'ja', 'zh-CN'],
    defaultLocale: 'en',
  },
  webpack: (config) => {
    // noinspection JSValidateTypes
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // svgr options: https://react-svgr.com/docs/options/
            svgo: true,
            memo: true,
          },
        },
      ],
    });

    // `react-intl` without parser
    // https://formatjs.io/docs/guides/advanced-usage#react-intl-without-parser-40-smaller
    config.resolve.alias['@formatjs/icu-messageformat-parser'] = '@formatjs/icu-messageformat-parser/no-parser';
    return config;
  },
};
