// Breakpoints https://tailwindcss.com/docs/breakpoints
import { CSSInterpolation } from '@emotion/css';
import { css } from '@emotion/react';

export const breakpoint = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};
export const responsive = (breakPoint: string, ...styles: Array<CSSInterpolation>): CSSInterpolation => ({
  [`@media (min-width: ${breakPoint})`]: css(styles),
});
export const onSm = (...styles: Array<CSSInterpolation>) => responsive(breakpoint.sm, styles);
export const onMd = (...styles: Array<CSSInterpolation>) => responsive(breakpoint.md, styles);
export const onLg = (...styles: Array<CSSInterpolation>) => responsive(breakpoint.lg, styles);
export const onXl = (...styles: Array<CSSInterpolation>) => responsive(breakpoint.xl, styles);
export const on2Xl = (...styles: Array<CSSInterpolation>) => responsive(breakpoint['2xl'], styles);
