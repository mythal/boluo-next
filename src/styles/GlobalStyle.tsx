import { css, Global } from '@emotion/react';
import { Theme } from './themes/light';

const globalStyle = (theme: Theme) => css`
  :root {
    font-size: 14px;
  }

  body {
    background: ${theme.colors.background};
    color: ${theme.colors.text};
  }

  a {
    color: ${theme.colors.link};
  }
`;

export const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};
