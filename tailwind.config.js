// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      // Primary colors in light mode
      green: colors.green,
      // Primary colors in dark mode
      blue: colors.blue,
      neutral: colors.neutral,
      slate: colors.slate,
      gray: colors.gray,
      error: colors.red,
      warning: colors.yellow,
      bgDark: colors.slate['700'],
      black: '#000',
      white: '#FFF',
      tooltip: colors.yellow[100],
    },
    borderWidth: {
      DEFAULT: '1px',
      '1/2': '0.125rem',
      1: '0.25rem',
    },
    extend: {
      boxShadow: {
        '1/2': '0.125rem 0.125rem 0',
        1: '0.25rem 0.25rem 0',
        toast: '0.125rem 0.125rem 0 rgba(0, 0, 0, 0.25)',
        menu: '0.25rem 0.25rem 0 rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        pixel: ['Fusion-Pixel-12', 'monospace'],
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('enabled', '&:not(:disabled)');
      addVariant('hover-enabled', '&:hover:not(:disabled)');
      addVariant('active-enabled', '&:active:not(:disabled)');
    }),
  ],
};
