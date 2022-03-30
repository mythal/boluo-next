import React from 'react';
import { DataAttr } from '../../helper/props';
import { css, Theme } from '@emotion/react';

type DataAttrProps = DataAttr<{
  state?: 'error' | 'default' | 'warning';
}>;
type InputProps = React.ComponentPropsWithoutRef<'input'> & DataAttrProps;
type TextAreaProps = React.ComponentPropsWithoutRef<'textarea'> & DataAttrProps;

const style = (theme: Theme) => css`
  /* cursor */
  &:disabled {
    cursor: not-allowed;
  }
  /* spacing */
  padding: 0.4rem 0.5rem;

  /* color variables */
  --input-bg: ${theme.input.default.bg};
  --input-border-color: ${theme.input.default.border};
  --input-border-hover-color: ${theme.input.default.borderHover};
  &[data-state='error'] {
    --input-bg: ${theme.input.error.bg};
    --input-border-color: ${theme.input.error.border};
    --input-border-hover-color: ${theme.input.error.borderHover};
  }
  &[data-state='warning'] {
    --input-bg: ${theme.input.warning.bg};
    --input-border-color: ${theme.input.warning.border};
    --input-border-hover-color: ${theme.input.warning.borderHover};
  }
  /* background */
  background-color: var(--input-bg);
  /* border and shadow */
  border: 1px solid var(--input-border-color);
  &:not(:disabled):hover {
    border-color: var(--input-border-hover-color);
  }
  &:not(:disabled):focus {
    border-color: var(--input-border-hover-color);
  }
  border-radius: 1px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.focusRing};
  }
  /* disabled filter */
  &:disabled {
    filter: contrast(50%);
  }
`;

export const TextInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input css={style} ref={ref} {...props} />;
});
TextInput.displayName = 'Input';

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  return <textarea css={style} ref={ref} {...props} />;
});
TextArea.displayName = 'TextArea';
