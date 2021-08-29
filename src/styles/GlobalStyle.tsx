import { css, Global } from '@emotion/react';
import { dark } from './scheme';
import { lightTheme, darkTheme } from './color';

const globalStyle = css`
  body {
    background-color: ${lightTheme.background};
    color: ${lightTheme.text};
    ${dark(css`
      background-color: ${darkTheme.background};
      color: ${darkTheme.text};
    `)};
  }

  body.switching,
  body.switching * {
    transition-duration: 200ms;
    transition-timing-function: ease-in;
    transition-property: background-color, border-bottom-color, border-top-color, border-left-color, border-right-color,
      outline-color;
  }

  a {
    color: ${lightTheme.link};
    ${dark(css`
      color: ${darkTheme.link};
    `)};
  }
`;

export const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};
