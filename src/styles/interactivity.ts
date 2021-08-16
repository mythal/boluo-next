import { css } from '@emotion/react';

// Appearance https://tailwindcss.com/docs/appearance
export const appearance = {
  none: css`
    appearance: none;
  `,
};

// Cursor https://tailwindcss.com/docs/cursor
export const cursor = {
  auto: css`
    cursor: auto;
  `,
  default: css`
    cursor: default;
  `,
  pointer: css`
    cursor: pointer;
  `,
  wait: css`
    cursor: wait;
  `,
  text: css`
    cursor: text;
  `,
  move: css`
    cursor: move;
  `,
  notAllowed: css`
    cursor: not-allowed;
  `,
};

// Outline https://tailwindcss.com/docs/outline
export const outline = {
  none: css`
    outline: 2px solid transparent;
    outline-offset: 2px;
  `,
  white: css`
    outline: 2px dotted white;
    outline-offset: 2px;
  `,
  black: css`
    outline: 2px dotted black;
    outline-offset: 2px;
  `,
};

// Pointer Events https://tailwindcss.com/docs/pointer-events
export const pointerEvents = {
  none: css`
    pointer-events: none;
  `,
  auto: css`
    pointer-events: auto;
  `,
};

// Resize https://tailwindcss.com/docs/resize
export const resize = {
  none: css`
    resize: none;
  `,
  y: css`
    resize: vertical;
  `,
  x: css`
    resize: horizontal;
  `,
  both: css`
    resize: both;
  `,
};

// User Select https://tailwindcss.com/docs/user-select
export const select = {
  none: css`
    user-select: none;
  `,
  text: css`
    user-select: text;
  `,
  all: css`
    user-select: all;
  `,
  auto: css`
    user-select: auto;
  `,
};
