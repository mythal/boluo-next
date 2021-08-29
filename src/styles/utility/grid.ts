import { css } from '@emotion/react';
import { unit } from './sizing';

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
const gapX = (n: number) =>
  css`
    column-gap: ${unit(n)};
  `;
gapX.px = css`
  column-gap: 1px;
`;

const gapY = (n: number) =>
  css`
    row-gap: ${unit(n)};
  `;
gapY.px = css`
  row-gap: 1px;
`;

export const gap = (n: number) =>
  css`
    gap: ${unit(n)};
  `;
gap.px = css`
  gap: 1px;
`;
gap.x = gapX;
gap.y = gapY;
