import { CSSInterpolation } from '@emotion/css';
import { css } from '@emotion/react';

export const disabled = (...styles: CSSInterpolation[]): CSSInterpolation => ({
  '&:disabled': css(styles),
});
export const hover = (...styles: CSSInterpolation[]): CSSInterpolation => ({
  '&:hover': css(styles),
});
export const focus = (...styles: CSSInterpolation[]): CSSInterpolation => ({
  '&:focus': css(styles),
});
export const active = (...styles: CSSInterpolation[]): CSSInterpolation => ({
  '&:active': css(styles),
});
