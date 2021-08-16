import { css } from '@emotion/react';

export const flex = {
  // Flex Direction https://tailwindcss.com/docs/flex-direction
  row: css`
    flex-direction: row;
  `,
  rowRev: css`
    flex-direction: row-reverse;
  `,
  col: css`
    flex-direction: column;
  `,
  colRev: css`
    flex-direction: column-reverse;
  `,
  // Flex https://tailwindcss.com/docs/flex
  1: css`
    flex: 1 1 0;
  `,
  auto: css`
    flex: 1 1 auto;
  `,
  initial: css`
    flex: 0 1 auto;
  `,
  none: css`
    flex: none;
  `,

  // Flex Wrap https://tailwindcss.com/docs/flex-wrap
  wrap: css`
    flex-wrap: wrap;
  `,
  wrapRev: css`
    flex-wrap: wrap-reverse;
  `,
  nowrap: css`
    flex-wrap: nowrap;
  `,

  // Flex Grow https://tailwindcss.com/docs/flex-grow
  grow: {
    0: css`
      flex-grow: 0;
    `,
    1: css`
      flex-grow: 1;
    `,
  },
  // Flex Shrink https://tailwindcss.com/docs/flex-shrink
  shrink: {
    0: css`
      flex-shrink: 0;
    `,
    1: css`
      flex-shrink: 1;
    `,
  },
};

// Order https://tailwindcss.com/docs/order
export const order = {
  n: (n: number) =>
    css`
      order: ${n};
    `,
  first: css`
    order: -9999;
  `,
  last: css`
    order: 9999;
  `,
  none: css`
    order: 0;
  `,
};
