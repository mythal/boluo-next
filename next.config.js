/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
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
    return config;
  },
};
