import { CSSInterpolation } from '@emotion/css';
import { css } from '@emotion/react';

export type Scheme = 'light' | 'dark';
export const schemeToClassName = (scheme: string | null): string => {
  if (scheme === null || scheme === 'auto' || !['dark', 'light'].includes(scheme)) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'scheme-dark';
    } else {
      return 'scheme-light';
    }
  }
  return `scheme-${scheme}`;
};
// Dark Mode https://tailwindcss.com/docs/dark-mode
export const dark = (...styles: CSSInterpolation[]) => {
  const styles_ = css(styles);
  return css({
    '[data-theme="dark"] &': styles_,
    '[data-theme="auto"] &': {
      '@media (prefers-color-scheme: dark)': styles_,
    },
  });
};
export const resetThemeClasses = () => {
  const html = document.documentElement;
  delete html.dataset['theme'];
};
export const switchToDark = () => {
  document.documentElement.dataset['theme'] = 'dark';
};
export const switchToLight = () => {
  document.documentElement.dataset['theme'] = 'light';
};
export const switchToAuto = () => {
  document.documentElement.dataset['theme'] = 'auto';
};
