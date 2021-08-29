import { css, Global } from '@emotion/react';
import { Theme } from './theme';

const globalStyle = (theme: Theme) => css`
  body {
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }

  body.switching,
  body.switching * {
    transition-duration: 200ms;
    transition-timing-function: ease-in;
    transition-property: background-color, border-bottom-color, border-top-color, border-left-color, border-right-color,
      outline-color;
  }

  a {
    color: ${theme.colors.link};
  }
`;

export const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};
