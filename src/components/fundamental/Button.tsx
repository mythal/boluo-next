import { css, Theme } from '@emotion/react';
import React from 'react';
import { DataAttr } from '../../helper/props';
import { unit } from '../../styles/utility/sizing';

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> &
  DataAttr<{
    small?: boolean;
    type?: 'primary' | 'default';
  }>;

const styles = {
  button: (theme: Theme) => css`
    /* button cursor */
    &:not(:disabled) {
      cursor: pointer;
    }
    &:disabled {
      cursor: not-allowed;
    }

    /* reset button style */
    user-select: none;
    appearance: none;
    border: none;

    /* button layout */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0;

    /* spacing */
    gap: 0.25rem;
    &:not([data-small='true']) {
      padding: 0.125rem 1rem;
      min-height: 2.5rem;
    }
    &[data-small='true'] {
      padding: 0.125rem 0.75rem;
      min-height: 2rem;
    }

    border-radius: 1px;
    font-size: 1rem;

    /* button color */
    &[data-type='default'],
    &:not([data-type]) {
      --button-text-color: ${theme.button.default.text};
      --button-bg-color: ${theme.button.default.bg};
      --button-bg-hover-color: ${theme.button.default.bgHover};
      --button-bg-active-color: ${theme.button.default.bgActive};
    }
    &[data-type='primary'] {
      --button-text-color: ${theme.button.primary.text};
      --button-bg-color: ${theme.button.primary.bg};
      --button-bg-hover-color: ${theme.button.primary.bgHover};
      --button-bg-active-color: ${theme.button.primary.bgActive};
    }
    color: var(--button-text-color);
    background-color: var(--button-bg-color);
    &:not(:disabled):hover {
      background-color: var(--button-bg-hover-color);
    }
    &:not(:disabled):active {
      background-color: var(--button-bg-active-color);
    }

    /* button focus ring */
    position: relative;
    &:focus {
      z-index: 1;
    }
    --focus-ring: 0 0 0 0 #00000000;
    &:focus {
      outline: none;
      --focus-ring: 0 0 0 ${unit(1)} ${theme.focusRing};
    }
    box-shadow: var(--focus-ring);

    /* filter */
    &:disabled {
      filter: brightness(75%);
    }
  `,
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
  return (
    <button css={styles.button} ref={ref} {...props}>
      {children}
    </button>
  );
});
Button.displayName = 'Button';
