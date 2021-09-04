import { css, Global } from '@emotion/react';
import { Theme } from './theme';

const globalStyle = (theme: Theme) => css`
  body {
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    font-size: 14px;
  }

  a {
    color: ${theme.colors.link};
  }
`;

export const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};
