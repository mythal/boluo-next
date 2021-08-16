import { css } from '@emotion/react';
import { alpha, Color } from './color';

const sm = '0.125rem';
const normal = '0.25rem';
const md = '0.375rem';
const lg = '0.5rem';
const xl = '0.75rem';
const xl2 = '1rem';
const xl3 = '1.5rem';
// Border Radius https://tailwindcss.com/docs/border-radius
export const rounded = {
  none: css`
    border-radius: 0;
  `,
  sm: css`
    border-radius: ${sm};
  `,
  normal: css`
    border-radius: ${normal};
  `,
  md: css`
    border-radius: ${md};
  `,
  lg: css`
    border-radius: ${lg};
  `,
  xl: css`
    border-radius: ${xl};
  `,
  xl2: css`
    border-radius: ${xl2};
  `,
  xl3: css`
    border-radius: ${xl3};
  `,
  full: css`
    border-radius: 9999px;
  `,
};

export const border = {
  // Border Style https://tailwindcss.com/docs/border-style
  solid: css`
    border-style: solid;
  `,
  dashed: css`
    border-style: dashed;
  `,
  dotted: css`
    border-style: dotted;
  `,
  double: css`
    border-style: double;
  `,
  none: css`
    border-style: none;
  `,

  // Border Color https://tailwindcss.com/docs/border-color
  color: function (color: Color, a = 100) {
    return css`
      border-color: ${alpha(color, a)};
    `;
  },
  // Border Width https://tailwindcss.com/docs/border-width
  px: css`
    border-width: 1px;
  `,
  0: css`
    border-width: 0;
  `,
  2: css`
    border-width: 2px;
  `,
  4: css`
    border-width: 4px;
  `,
  8: css`
    border-width: 8px;
  `,
  l: {
    px: css`
      border-left-width: 1px;
    `,
    0: css`
      border-left-width: 0;
    `,
    2: css`
      border-left-width: 2px;
    `,
    4: css`
      border-left-width: 4px;
    `,
    8: css`
      border-left-width: 8px;
    `,
  },
  r: {
    px: css`
      border-right-width: 1px;
    `,
    0: css`
      border-right-width: 0;
    `,
    2: css`
      border-right-width: 2px;
    `,
    4: css`
      border-right-width: 4px;
    `,
    8: css`
      border-right-width: 8px;
    `,
  },
  t: {
    px: css`
      border-top-width: 1px;
    `,
    0: css`
      border-top-width: 0;
    `,
    2: css`
      border-top-width: 2px;
    `,
    4: css`
      border-top-width: 4px;
    `,
    8: css`
      border-top-width: 8px;
    `,
  },
  b: {
    px: css`
      border-bottom-width: 1px;
    `,
    0: css`
      border-bottom-width: 0;
    `,
    2: css`
      border-bottom-width: 2px;
    `,
    4: css`
      border-bottom-width: 4px;
    `,
    8: css`
      border-bottom-width: 8px;
    `,
  },
};
// Divide Width https://tailwindcss.com/docs/divide-width
export const divideY = (n: number) => css`
  & > * + * {
    border-top-width: calc(${n}px);
  }
`;
export const divideYRev = (n: number) => css`
  & > * + * {
    border-bottom-width: calc(${n}px);
  }
`;

// Divide Color https://tailwindcss.com/docs/divide-color
export const divideTransparent = css`
  & > * + * {
    border-color: transparent;
  }
`;
export const divideCurrent = css`
  & > * + * {
    border-color: currentColor;
  }
`;
export const divideColor = (color: Color, a = 100) => {
  return css`
    & > * + * {
      border-color: ${alpha(color, a)};
    }
  `;
};
// Divide Style https://tailwindcss.com/docs/divide-style
export const divideSolid = css`
  & > * + * {
    border-style: solid;
  }
`;
export const divideDashed = css`
  & > * + * {
    border-style: dashed;
  }
`;
export const divideDotted = css`
  & > * + * {
    border-style: dotted;
  }
`;
export const divideDouble = css`
  & > * + * {
    border-style: double;
  }
`;
export const divideNone = css`
  & > * + * {
    border-style: none;
  }
`;
