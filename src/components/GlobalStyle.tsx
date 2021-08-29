import { css, Global } from '@emotion/react';
import { dark } from '../styles/scheme';

const globalStyle = css`
  body {
    background-color: white;
    color: black;
    ${dark(css`
      background-color: black;
      color: white;
    `)};
  }

  body.switching,
  body.switching * {
    transition-duration: 200ms;
    transition-timing-function: ease-in;
    transition-property: background-color, border-bottom-color, border-top-color, border-left-color, border-right-color,
      outline-color;
  }
`;

export const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};
