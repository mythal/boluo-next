import { css } from '@emotion/react';
import { breakpoint } from './responsive';

export const sizeFactor = 0.25;
export const size = (n: number): string => `${n * sizeFactor}rem`;
export const w = {
  auto: css`
    width: auto;
  `,
  px: css`
    width: 1px;
  `,
  min: css`
    width: min-content;
  `,
  max: css`
    width: max-content;
  `,
  full: css`
    width: 100%;
  `,
  screen: css`
    width: 100vw;
  `,
  0: css`
    width: 0;
  `,
  n: (n: number) =>
    css`
      width: ${size(n)};
    `,
  ratio: (x: number, y: number) => {
    const percentage = (x / y) * 100;
    return css`
      width: ${percentage.toFixed(8)}%;
    `;
  },
};

// Height https://tailwindcss.com/docs/height
export const h = {
  n: (n: number) =>
    css`
      height: ${size(n)};
    `,
  0: css`
    height: 0;
  `,
  screen: css`
    height: 100vh;
  `,
  full: css`
    height: 100%;
  `,
  px: css`
    height: 1px;
  `,
  auto: css`
    height: auto;
  `,
  ratio: (x: number, y: number) => {
    const percentage = (x / y) * 100;
    return css`
      height: ${percentage.toFixed(8)}%;
    `;
  },
};
export const min = {
  // Min-Width https://tailwindcss.com/docs/min-width
  w: {
    0: css`
      min-width: 0;
    `,
    n: (n: number) =>
      css`
        min-width: ${size(n)};
      `,
    full: css`
      min-width: 100%;
    `,
    min: css`
      min-width: min-content;
    `,
    max: css`
      min-width: max-content;
    `,
  },
  // Min-Height https://tailwindcss.com/docs/min-height
  h: {
    0: css`
      min-height: 0;
    `,
    full: css`
      min-height: 100%;
    `,
    screen: css`
      min-height: 100vh;
    `,
  },
};

export const max = {
  // Max-Width https://tailwindcss.com/docs/max-width
  w: {
    0: css`
      max-width: 0;
    `,
    none: css`
      max-width: none;
    `,
    xs: css`
      max-width: 20rem;
    `,
    sm: css`
      max-width: 24rem;
    `,
    md: css`
      max-width: 28rem;
    `,
    lg: css`
      max-width: 32rem;
    `,
    xl: css`
      max-width: 36rem;
    `,
    xl2: css`
      max-width: 42rem;
    `,
    xl3: css`
      max-width: 48rem;
    `,
    xl4: css`
      max-width: 56rem;
    `,
    xl5: css`
      max-width: 64rem;
    `,
    xl6: css`
      max-width: 72rem;
    `,
    xl7: css`
      max-width: 80rem;
    `,
    min: css`
      max-width: min-content;
    `,
    max: css`
      max-width: max-content;
    `,
    prose: css`
      max-width: 65ch;
    `,
    full: css`
      max-width: 100%;
    `,
    screen: {
      sm: css`
        max-width: ${breakpoint.sm};
      `,
      md: css`
        max-width: ${breakpoint.md};
      `,
      lg: css`
        max-width: ${breakpoint.lg};
      `,
      xl: css`
        max-width: ${breakpoint.xl};
      `,
      xl2: css`
        max-width: ${breakpoint.xl2};
      `,
    },
  },
  // Max-Height https://tailwindcss.com/docs/max-height
  h: {
    0: css`
      max-height: 0;
    `,
    px: css`
      max-height: 1px;
    `,
    full: css`
      max-height: 100%;
    `,
    screen: css`
      max-height: 100vh;
    `,
    n: (n: number) =>
      css`
        max-height: ${size(n)};
      `,
  },
};
