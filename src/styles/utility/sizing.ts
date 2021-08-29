import { css } from '@emotion/react';
import { breakpoint } from './responsive';

export const sizeFactor = 0.25;
export const unit = (n: number): string => `${n * sizeFactor}rem`;
export const w = (value: number) => css`
  width: ${unit(value)};
`;
w.auto = css`
  width: auto;
`;
w.px = css`
  width: 1px;
`;
w.contentMin = css`
  width: min-content;
`;
w.contentMax = css`
  width: max-content;
`;
w.full = css`
  width: 100%;
`;
w.screen = css`
  width: 100vw;
`;
w.ratio = (x: number, y: number) => {
  const percentage = (x / y) * 100;
  return css`
    width: ${percentage.toFixed(8)}%;
  `;
};

// Min-Width https://tailwindcss.com/docs/min-width
const minW = (value: number) => css`
  min-width: ${unit(value)};
`;
minW.full = css`
  min-width: 100%;
`;
minW.contentMin = css`
  min-width: min-content;
`;
minW.contentMax = css`
  min-width: max-content;
`;
w.min = minW;

// Max-Width https://tailwindcss.com/docs/max-width
const maxW = {
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
      max-width: ${breakpoint['2xl']};
    `,
  },
};
w.max = maxW;

// Height https://tailwindcss.com/docs/height
export const h = (value: number) =>
  css`
    height: ${unit(value)};
  `;

h.screen = css`
  height: 100vh;
`;

h.full = css`
  height: 100%;
`;
h.px = css`
  height: 1px;
`;
h.auto = css`
  height: auto;
`;
h.ratio = (x: number, y: number) => {
  const percentage = (x / y) * 100;
  return css`
    height: ${percentage.toFixed(8)}%;
  `;
};

// Min-Height https://tailwindcss.com/docs/min-height
const minH = {
  0: css`
    min-height: 0;
  `,
  full: css`
    min-height: 100%;
  `,
  screen: css`
    min-height: 100vh;
  `,
};
h.min = minH;

// Max-Height https://tailwindcss.com/docs/max-height
const maxH = (value: number) =>
  css`
    max-height: ${unit(value)};
  `;
maxH.px = css`
  max-height: 1px;
`;
maxH.full = css`
  max-height: 100%;
`;
maxH.screen = css`
  max-height: 100vh;
`;
h.max = maxH;
