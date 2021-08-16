import { css } from '@emotion/react';
import { size } from './sizing';

export const gridArea = (gridArea: string) => css({ gridArea });

// Grid Auto Flow https://tailwindcss.com/docs/grid-auto-flow
export const gridFlowRow = css`
  grid-auto-flow: row;
`;
export const gridFlowCol = css`
  grid-auto-flow: column;
`;
export const gridFlowRowDense = css`
  grid-auto-flow: row dense;
`;
export const gridFlowColDense = css`
  grid-auto-flow: column dense;
`;

// Grid Auto Columns https://tailwindcss.com/docs/grid-auto-columns
export const autoColsAuto = css`
  grid-auto-columns: auto;
`;
export const autoColsMin = css`
  grid-auto-columns: min-content;
`;
export const autoColsMax = css`
  grid-auto-columns: max-content;
`;
export const autoColsFr = css`
  grid-auto-columns: minmax(0, 1fr);
`;

// Grid Auto Rows https://tailwindcss.com/docs/grid-auto-rows
export const autoRowsAuto = css`
  grid-auto-rows: auto;
`;
export const autoRowsMin = css`
  grid-auto-rows: min-content;
`;
export const autoRowsMax = css`
  grid-auto-rows: max-content;
`;
export const autoRowsFr = css`
  grid-auto-rows: minmax(0, 1fr);
`;

// Gap https://tailwindcss.com/docs/gap
export const gap = {
  n: (n: number) =>
    css`
      gap: ${size(n)};
    `,
  px: css`
    gap: 1px;
  `,
  0: css`
    gap: 0;
  `,
  x: {
    n: (n: number) =>
      css`
        column-gap: ${size(n)};
      `,
    px: css`
      column-gap: 1px;
    `,
  },
  y: {
    n: (n: number) =>
      css`
        row-gap: ${size(n)};
      `,
    px: css`
      row-gap: 1px;
    `,
  },
};
