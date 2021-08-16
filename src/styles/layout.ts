import { css } from '@emotion/react';
import { size } from './sizing';

// Position https://tailwindcss.com/docs/position
export const position = {
  static: css`
    position: static;
  `,
  fixed: css`
    position: fixed;
  `,
  absolute: css`
    position: absolute;
  `,
  relative: css`
    position: relative;
  `,
  sticky: css`
    position: sticky;
  `,
};
// Box Sizing https://tailwindcss.com/docs/box-sizing
export const boxBorder = css`
  box-sizing: border-box;
`;
export const boxContent = css`
  box-sizing: content-box;
`;

// Display https://tailwindcss.com/docs/display
export const display = {
  hidden: css`
    display: none;
  `,
  block: css`
    display: block;
  `,
  inlineBlock: css`
    display: inline-block;
  `,
  flex: css`
    display: flex;
  `,
  inlineFlex: css`
    display: inline-flex;
  `,
  grid: css`
    display: grid;
  `,
  inlineGrid: css`
    display: inline-grid;
  `,
};
// ...

// Float https://tailwindcss.com/docs/float
export const float = {
  right: css`
    float: right;
  `,
  left: css`
    float: left;
  `,
  none: css`
    float: none;
  `,
};

// Clear https://tailwindcss.com/docs/clear
export const clear = {
  left: css`
    clear: left;
  `,
  right: css`
    clear: right;
  `,
  both: css`
    clear: both;
  `,
  none: css`
    clear: none;
  `,
};

export const object = {
  // Object Fit https://tailwindcss.com/docs/object-fit
  contain: css`
    object-fit: contain;
  `,
  cover: css`
    object-fit: cover;
  `,
  fill: css`
    object-fit: fill;
  `,
  none: css`
    object-fit: none;
  `,
  scaleDown: css`
    object-fit: scale-down;
  `,
  // Object Position https://tailwindcss.com/docs/object-position
  bottom: css`
    object-position: bottom;
  `,
  center: css`
    object-position: center;
  `,
  left: css`
    object-position: left;
  `,
  leftBottom: css`
    object-position: left bottom;
  `,
  leftTop: css`
    object-position: left top;
  `,
  right: css`
    object-position: right;
  `,
  rightBottom: css`
    object-position: right bottom;
  `,
  rightTop: css`
    object-position: right top;
  `,
  top: css`
    object-position: top;
  `,
};

// Overflow https://tailwindcss.com/docs/overflow
export const overflow = {
  auto: css`
    overflow: auto;
  `,
  hidden: css`
    overflow: hidden;
  `,
  visible: css`
    overflow: visible;
  `,
  scroll: css`
    overflow: scroll;
  `,
  x: {
    auto: css`
      overflow-x: auto;
    `,
    hidden: css`
      overflow-x: hidden;
    `,
    visible: css`
      overflow-x: visible;
    `,
    scroll: css`
      overflow-x: scroll;
    `,
  },
  y: {
    auto: css`
      overflow-y: auto;
    `,
    hidden: css`
      overflow-y: hidden;
    `,
    visible: css`
      overflow-y: visible;
    `,
    scroll: css`
      overflow-y: scroll;
    `,
  },
};

// Overscroll Behavior https://tailwindcss.com/docs/overscroll-behavior
export const overscroll = {
  auto: css`
    overscroll-behavior: auto;
  `,
  contain: css`
    overscroll-behavior: contain;
  `,
  none: css`
    overscroll-behavior: none;
  `,
};
// ...

// Top / Right / Bottom / Left https://tailwindcss.com/docs/top-right-bottom-left
export const inset = (n: number) => css`
  top: ${size(n)};
  right: ${size(n)};
  bottom: ${size(n)};
  left: ${size(n)};
`;
export const insetX = (n: number) => css`
  right: ${size(n)};
  left: ${size(n)};
`;
export const insetY = (n: number) => css`
  top: ${size(n)};
  bottom: ${size(n)};
`;
export const top = (n: number) => css`
  top: ${size(n)};
`;
export const right = (n: number) => css`
  right: ${size(n)};
`;
export const bottom = (n: number) => css`
  bottom: ${size(n)};
`;
export const left = (n: number) => css`
  left: ${size(n)};
`;

// Visibility https://tailwindcss.com/docs/visibility
export const visible = css`
  visibility: visible;
`;
export const invisible = css`
  visibility: hidden;
`;

// Z-Index https://tailwindcss.com/docs/z-index
export const z = {
  0: css`
    z-index: 0;
  `,
  10: css`
    z-index: 10;
  `,
  20: css`
    z-index: 20;
  `,
  30: css`
    z-index: 30;
  `,
  40: css`
    z-index: 40;
  `,
  50: css`
    z-index: 50;
  `,
  auto: css`
    z-index: auto;
  `,
  x: (x: number) =>
    css`
      z-index: ${x};
    `,
};
