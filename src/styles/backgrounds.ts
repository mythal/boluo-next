import { css } from '@emotion/react';
import { alpha, Color } from './color';

// Background Attachment https://tailwindcss.com/docs/background-attachment
export const bgFixed = css`
  background-attachment: fixed;
`;
export const bgLocal = css`
  background-attachment: local;
`;
export const bgScroll = css`
  background-attachment: scroll;
`;

// Background Clip https://tailwindcss.com/docs/background-clip
export const bgClip = {
  border: css`
    background-clip: border-box;
  `,
  padding: css`
    background-clip: padding-box;
  `,
  content: css`
    background-clip: content-box;
  `,
  text: css`
    // noinspection CssInvalidPropertyValue
    background-clip: text;
  `,
};

// Background Color https://tailwindcss.com/docs/background-color
export const bgTransparent = css`
  background-color: transparent;
`;
export const bgCurrent = css`
  background-color: currentColor;
`;
export const bgColor = (color: Color, a: number = 100) => {
  return css`
    background-color: ${alpha(color, a)};
  `;
};

// Background Repeat https://tailwindcss.com/docs/background-repeat
export const bgRepeat = {
  all: css`
    background-repeat: repeat;
  `,
  no: css`
    background-repeat: no-repeat;
  `,
  x: css`
    background-repeat: repeat-x;
  `,
  y: css`
    background-repeat: repeat-y;
  `,
  round: css`
    background-repeat: round;
  `,
  space: css`
    background-repeat: space;
  `,
};

// Background Size https://tailwindcss.com/docs/background-size
export const bgAuto = css`
  background-size: auto;
`;
export const bgCover = css`
  background-size: cover;
`;
export const bgContain = css`
  background-size: contain;
`;
