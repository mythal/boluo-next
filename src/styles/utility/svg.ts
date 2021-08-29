import { css } from '@emotion/react';

// Fill https://tailwindcss.com/docs/fill

export const fillCurrent = css`
  fill: currentColor;
`;

// Stroke https://tailwindcss.com/docs/stroke

export const strokeCurrent = css`
  stroke: currentColor;
`;

// Stroke Width https://tailwindcss.com/docs/stroke-width
export const stroke = {
  0: css`
    stroke-width: 0;
  `,
  1: css`
    stroke-width: 1;
  `,
  2: css`
    stroke-width: 2;
  `,
};
