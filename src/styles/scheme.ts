import { CSSInterpolation } from '@emotion/css';
import { css } from '@emotion/react';
import { gray } from './utility/color';

export type Scheme = 'light' | 'dark' | 'auto';
// Dark Mode https://tailwindcss.com/docs/dark-mode
export const dark = (...styles: CSSInterpolation[]) => {
  return css`
    html[data-scheme='dark'] & {
      ${styles};
    }
    @media (prefers-color-scheme: dark) {
      html:not([data-scheme='light']) & {
        ${styles};
      }
    }
  `;
};
export const switchToDark = () => {
  document.documentElement.dataset['scheme'] = 'dark';
};
export const switchToLight = () => {
  document.documentElement.dataset['scheme'] = 'light';
};
export const switchToAuto = () => {
  const html = document.documentElement;
  delete html.dataset['scheme'];
};

export const valueToTheme = (value: unknown): Scheme => {
  if (value === 'dark') {
    return 'dark';
  } else if (value === 'light') {
    return 'light';
  } else {
    return 'auto';
  }
};

export const currentTheme = (): Scheme => {
  return valueToTheme(document.documentElement.dataset['scheme']);
};

const SCHEME_KEY = 'SCHEME';

export const readSchemeFromStorage = (): Scheme => {
  try {
    return valueToTheme(localStorage.getItem(SCHEME_KEY));
  } catch (e) {
    return 'auto';
  }
};

export const writeSchemeToStorage = (scheme: Scheme) => {
  localStorage.setItem(SCHEME_KEY, scheme);
};

export const applyScheme = (scheme: Scheme) => {
  document.documentElement.dataset['scheme'] = scheme;
};
export const startSchemeSwitching = () => {
  const result = document.documentElement.getElementsByTagName('body');
  for (const body of result) {
    body.classList.add('switching');
  }
};
export const stopSchemeSwitching = () => {
  const result = document.documentElement.getElementsByTagName('body');
  for (const body of result) {
    body.classList.remove('switching');
  }
};
