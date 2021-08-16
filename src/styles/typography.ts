import { css } from '@emotion/react';
import { alpha, Color } from './color';
import { size } from './sizing';

// Text Color https://tailwindcss.com/docs/text-color
export const textColor = (color: Color, a = 100) => {
  return css`
    color: ${alpha(color, a)};
  `;
};
export const textTransparent = css`
  color: transparent;
`;
export const textCurrentColor = css`
  color: currentColor;
`;

// Font Style https://tailwindcss.com/docs/font-style
export const italic = css`
  font-style: italic;
`;
export const notItalic = css`
  font-style: normal;
`;

// Letter Spacing https://tailwindcss.com/docs/letter-spacing
export const tracking = {
  tighter: css`
    letter-spacing: -0.05em;
  `,
  tight: css`
    letter-spacing: -0.025em;
  `,
  normal: css`
    letter-spacing: 0;
  `,
  wide: css`
    letter-spacing: 0.025em;
  `,
  wider: css`
    letter-spacing: 0.05em;
  `,
  widest: css`
    letter-spacing: 0.1em;
  `,
};

// Line Height https://tailwindcss.com/docs/line-height
export const leading = {
  none: css`
    line-height: 1;
  `,
  tight: css`
    line-height: 1.25;
  `,
  snug: css`
    line-height: 1.375;
  `,
  normal: css`
    line-height: 1.5;
  `,
  relaxed: css`
    line-height: 1.625;
  `,
  loose: css`
    line-height: 2;
  `,
  x: (x: number) => css`
    line-height: ${size(x)};
  `,
};

// Font Family https://tailwindcss.com/docs/font-family
export const fontSans = css`
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
`;
export const fontSerif = css`
  font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
`;
export const fontMono = css`
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
`;

// Word Break https://tailwindcss.com/docs/word-break
export const wordBreak = {
  normal: css`
    overflow-wrap: normal;
    word-break: normal;
  `,
  words: css`
    overflow-wrap: break-word;
  `,
  all: css`
    word-break: break-all;
  `,
};

// Font Smoothing https://tailwindcss.com/docs/font-smoothing
export const antialiased = css`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
export const subpixelAntialiased = css`
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
`;

export const text = {
  // Text Alignment https://tailwindcss.com/docs/text-align
  textLeft: css`
    text-align: left;
  `,
  textRight: css`
    text-align: right;
  `,
  textCenter: css`
    text-align: center;
  `,
  textJustify: css`
    text-align: justify;
  `,

  // Font Size https://tailwindcss.com/docs/font-size
  base: css`
    font-size: 1rem;
    line-height: 1.5rem;
  `,
  xs: css`
    font-size: 0.75rem;
    line-height: 1rem;
  `,
  sm: css`
    font-size: 0.875rem;
    line-height: 1.25rem;
  `,
  lg: css`
    font-size: 1.125rem;
    line-height: 1.75rem;
  `,
  xl: css`
    font-size: 1.25rem;
    line-height: 1.75rem;
  `,
  xl2: css`
    font-size: 1.5rem;
    line-height: 2rem;
  `,
  xl3: css`
    font-size: 1.875rem;
    line-height: 2.25rem;
  `,
};

// Text Decoration https://tailwindcss.com/docs/text-decoration
export const underline = css`
  text-decoration: underline;
`;
export const lineThrough = css`
  text-decoration: line-through;
`;
export const noUnderline = css`
  text-decoration: none;
`;

// Font Weight https://tailwindcss.com/docs/font-weight
export const fontThin = css`
  font-weight: 100;
`;
export const fontExtralight = css`
  font-weight: 200;
`;
export const fontNormal = css`
  font-weight: 400;
`;
export const fontMedium = css`
  font-weight: 500;
`;
export const fontSemibold = css`
  font-weight: 600;
`;
export const fontBold = css`
  font-weight: 700;
`;
export const fontExtrabold = css`
  font-weight: 800;
`;
export const fontBlack = css`
  font-weight: 900;
`;

export const list = {
  // List Style Type https://tailwindcss.com/docs/list-style-type
  none: css`
    list-style-type: none;
  `,
  disc: css`
    list-style-type: disc;
  `,
  square: css`
    list-style-type: square;
  `,
  decimal: css`
    list-style-type: decimal;
  `,
  // List Style Position https://tailwindcss.com/docs/list-style-position
  inside: css`
    list-style-position: inside;
  `,
  outside: css`
    list-style-position: outside;
  `,
};

// Text Transform https://tailwindcss.com/docs/text-transform
export const uppercase = css`
  text-transform: uppercase;
`;
export const lowercase = css`
  text-transform: lowercase;
`;
export const capitalize = css`
  text-transform: capitalize;
`;
export const normalCase = css`
  text-transform: none;
`;

// Text Overflow https://tailwindcss.com/docs/text-overflow
export const overflow = {
  truncate: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  ellipse: css`
    text-overflow: ellipsis;
  `,
  clip: css`
    text-overflow: clip;
  `,
};

// Whitespace https://tailwindcss.com/docs/whitespace
export const whitespace = {
  normal: css`
    white-space: normal;
  `,
  noWrap: css`
    white-space: nowrap;
  `,
  pre: css`
    white-space: pre;
  `,
  preLine: css`
    white-space: pre-line;
  `,
  preWrap: css`
    white-space: pre-wrap;
  `,
};

// Placeholder Color https://tailwindcss.com/docs/placeholder-color
export const placeholderColor = (color: Color, a = 100) => {
  return css`
    &::placeholder {
      color: ${alpha(color, a)};
    }
  `;
};

// Vertical Alignment https://tailwindcss.com/docs/vertical-align
export const align = {
  baseline: css`
    vertical-align: baseline;
  `,
  top: css`
    vertical-align: top;
  `,
  middle: css`
    vertical-align: middle;
  `,
  bottom: css`
    vertical-align: bottom;
  `,
  textTop: css`
    vertical-align: text-top;
  `,
  textBottom: css`
    vertical-align: text-bottom;
  `,
};
