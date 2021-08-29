import { css } from '@emotion/react';

// Border Collapse https://tailwindcss.com/docs/border-collapse
export const borderCollapse = css`
  border-collapse: collapse;
`;
export const borderSeparate = css`
  border-collapse: separate;
`;

// Table Layout https://tailwindcss.com/docs/table-layout
export const table = {
  auto: css`
    table-layout: auto;
  `,
  fixed: css`
    table-layout: fixed;
  `,
};
