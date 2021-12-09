import { css } from '@emotion/react';
import { ThemedStyles } from './theme';

export const globalStyle: ThemedStyles = (theme) => css`
  html {
    width: 100%;
    height: 100%;
    font-size: clamp(12px, 1.25vw, 15px);
    background-color: ${theme.background};
    color: ${theme.text};
  }

  body {
    width: 100%;
    height: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
  }

  a {
    text-decoration: none;
    color: ${theme.link.color};
    &:hover {
      color: ${theme.link.hover};
    }
    &:active {
      color: ${theme.link.active};
    }
  }

  html.switching,
  html.switching * {
    transition-duration: 200ms;
    transition-timing-function: ease-in;
    transition-property: background-color, border-bottom-color, border-top-color, border-left-color, border-right-color,
      outline-color;
  }
`;
