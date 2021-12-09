import React from 'react';
import Icon from './Icon';
import { css } from '@emotion/react';

interface Props {
  onClose: () => void;
}

const style = css`
  /* cursor */
  cursor: pointer;
  /* reset */
  appearance: none;
  border: none;
  /* size */
  width: 1.75rem;
  height: 1.75rem;
  font-size: 1.25rem;
  /* place at center */
  display: flex;
  justify-content: center;
  align-items: center;
  /* color */
  color: inherit;
  background-color: rgba(255, 255, 255, 0.35);
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  &:active {
    background-color: rgba(255, 255, 255, 0.75);
  }
  /* radius */
  border-radius: 0.25rem;
  /* focus */
  &:focus {
    box-shadow: 0 0 0 2px #ffffff77;
  }
`;

export const ToastCloseButton: React.FC<Props> = ({ onClose }) => {
  return (
    <button css={style} aria-label="close" onClick={() => onClose()}>
      <Icon icon="close" />
    </button>
  );
};
