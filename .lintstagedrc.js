const path = require('path');

// https://nextjs.org/docs/basic-features/eslint#lint-staged
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': ['make i18n-extract', 'make i18n-compile', buildEslintCommand],
  '*.{js,ts,jsx,tsx,css,md}': 'prettier --write --config ./prettier.config.js',
};
