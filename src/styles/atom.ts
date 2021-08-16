import { css } from '@emotion/react';
import { fontSans, leading, text, textColor } from './typography';
import { darkTheme, lightTheme } from './theme';
import { dark } from './scheme';

export const span = css`
  ${fontSans};
  ${text.base};
  color: ${lightTheme.textColor};
  ${dark(textColor(darkTheme.textColor))};
  transition: color;
  transition-duration: 100ms;
`;

export const paragraph = css`
  ${span};
  ${leading.normal};
`;

export const link = css`
  ${span};
  color: ${lightTheme.linkColor};
  ${dark(textColor(darkTheme.linkColor))};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
