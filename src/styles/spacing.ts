import { css } from '@emotion/react';
import { size } from './sizing';

// Margin https://tailwindcss.com/docs/margin
export const m = {
  auto: css`
    margin: auto;
  `,
  n: (n: number) => css`
    margin: ${size(n)};
  `,
  x: {
    auto: css`
      margin-left: auto;
      margin-right: auto;
    `,
    n: (n: number) => css`
      margin-left: ${size(n)};
      margin-right: ${size(n)};
    `,
  },
  y: {
    auto: css`
      margin-top: auto;
      margin-bottom: auto;
    `,
    n: (n: number) => css`
      margin-top: ${size(n)};
      margin-bottom: ${size(n)};
    `,
  },
  t: {
    auto: css`
      margin-top: auto;
    `,
    n: (n: number) => css`
      margin-top: ${size(n)};
    `,
  },
  r: {
    auto: css`
      margin-right: auto;
    `,
    n: (n: number) => css`
      margin-right: ${size(n)};
    `,
  },
  b: {
    auto: css`
      margin-bottom: auto;
    `,
    n: (n: number) => css`
      margin-bottom: ${size(n)};
    `,
  },
  l: {
    auto: css`
      margin-left: auto;
    `,
    n: (n: number) => css`
      margin-left: ${size(n)};
    `,
  },
};

// Padding https://tailwindcss.com/docs/padding

export const p = {
  px: css`
    padding: 1px;
  `,
  n: (n: number) => css`
    padding: ${size(n)};
  `,
  x: {
    px: css`
      padding-left: 1px;
      padding-right: 1px;
    `,
    n: (n: number) => css`
      padding-left: ${size(n)};
      padding-right: ${size(n)};
    `,
  },
  y: {
    px: css`
      padding-top: 1px;
      padding-bottom: 1px;
    `,
    n: (n: number) => css`
      padding-top: ${size(n)};
      padding-bottom: ${size(n)};
    `,
  },
  t: {
    px: css`
      padding-top: 1px;
    `,
    n: (n: number) => css`
      padding-top: ${size(n)};
    `,
  },
  r: {
    px: css`
      padding-right: 1px;
    `,
    n: (n: number) => css`
      padding-right: ${size(n)};
    `,
  },
  b: {
    px: css`
      padding-bottom: 1px;
    `,
    n: (n: number) => css`
      padding-bottom: ${size(n)};
    `,
  },
  l: {
    px: css`
      padding-left: 1px;
    `,
    n: (n: number) => css`
      padding-left: ${size(n)};
    `,
  },
};

// Space Between https://tailwindcss.com/docs/space
export const space = {
  x: {
    0: css`
      margin-left: ${size(0)};
      margin-right: ${size(0)};
    `,
    n: (n: number) => css`
      & > * + * {
        margin-left: ${size(n)};
      }
    `,
    revN: (n: number) => css`
      & > * + * {
        margin-right: ${size(n)};
      }
    `,
  },
  y: {
    0: css`
      margin-top: ${size(0)};
      margin-bottom: ${size(0)};
    `,
    n: (n: number) => css`
      & > * + * {
        margin-top: ${size(n)};
      }
    `,
    revN: (n: number) => css`
      & > * + * {
        margin-bottom: ${size(n)};
      }
    `,
  },
};
