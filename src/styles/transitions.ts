import { css, keyframes } from '@emotion/react';

// Transition Property https://tailwindcss.com/docs/transition-property
export const transitionNone = css`
  transition-property: none;
`;
export const transitionAll = css`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;
export const transition = css`
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;
export const transitionColors = css`
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;

export const transitionOpacity = css`
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;
export const transitionShadow = css`
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;
export const transitionTransform = css`
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;

// Transition Duration https://tailwindcss.com/docs/transition-duration
export const duration = {
  75: css`
    transition-duration: 75ms;
  `,
  100: css`
    transition-duration: 100ms;
  `,
  150: css`
    transition-duration: 150ms;
  `,
  200: css`
    transition-duration: 200ms;
  `,
  300: css`
    transition-duration: 300ms;
  `,
  500: css`
    transition-duration: 500ms;
  `,
  700: css`
    transition-duration: 700ms;
  `,
  1000: css`
    transition-duration: 1000ms;
  `,
};

// Transition Timing Function https://tailwindcss.com/docs/transition-timing-function
export const easeLinear = css`
  transition-timing-function: linear;
`;
export const easeIn = css`
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
`;
export const easeOut = css`
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
`;
export const easeInOut = css`
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

// Transition Delay https://tailwindcss.com/docs/transition-delay
export const delay = {
  75: css`
    transition-delay: 75ms;
  `,
  100: css`
    transition-delay: 100ms;
  `,
  150: css`
    transition-delay: 150ms;
  `,
  200: css`
    transition-delay: 200ms;
  `,
  300: css`
    transition-delay: 300ms;
  `,
  500: css`
    transition-delay: 500ms;
  `,
  700: css`
    transition-delay: 700ms;
  `,
  1000: css`
    transition-delay: 1000ms;
  `,
};

// Animation https://tailwindcss.com/docs/animation
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const ping = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
`;
const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
`;
const bounce = keyframes`
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
`;
export const animate = {
  none: css`
    animation: none;
  `,
  spin: css`
    animation: ${spin} 1s linear infinite;
  `,
  ping: css`
    animation: ${ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  `,
  pulse: css`
    animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  `,
  bounce: css`
    animation: ${bounce} 1s infinite;
  `,
};
