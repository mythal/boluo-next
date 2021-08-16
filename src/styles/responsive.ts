// Breakpoints https://tailwindcss.com/docs/breakpoints
import { CSSInterpolation } from '@emotion/css';
import { css } from '@emotion/react';

export const breakpoint = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xl2: '1536px',
};
export const responsive = (breakPoint: string, ...styles: Array<CSSInterpolation>): CSSInterpolation => ({
  [`@media (min-width: ${breakPoint})`]: css(styles),
});
export const sm = (...styles: Array<CSSInterpolation>) => responsive(breakpoint.sm, styles);
export const md = (...styles: Array<CSSInterpolation>) => responsive(breakpoint.md, styles);
export const lg = (...styles: Array<CSSInterpolation>) => responsive(breakpoint.lg, styles);
export const xl = (...styles: Array<CSSInterpolation>) => responsive(breakpoint.xl, styles);
export const xl2 = (...styles: Array<CSSInterpolation>) => responsive(breakpoint.xl, styles);
