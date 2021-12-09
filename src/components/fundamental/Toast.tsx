import React, { useEffect } from 'react';
import { css, keyframes, Theme } from '@emotion/react';
import { shadow } from '../../styles/utility/effect';
import { animate } from '../../styles/utility/transitions';
import { Button } from './Button';
import Icon from './Icon';
import { ToastCloseButton } from './ToastCloseButton';

interface Props {
  type?: 'default' | 'error' | 'warning';
  timeout?: number;
  onClose?: () => void;
}

const styles = {
  shadowInitial: shadow.xl,
  shadowFinal: shadow.lg,
  darkOutline: css`
    border-color: rgba(255, 255, 255, 0.42);
  `,
  closeButtonContainer: css`
    margin-left: 0.5rem;
  `,
  container: (theme: Theme) => css`
    display: flex;
    max-width: 10rem;
    padding: 1rem;
    border-radius: 0.125rem;
    color: #fff;
    ${styles.shadowFinal};
    animation: ${place} 0.5s cubic-bezier(0, 0, 0.2, 1);

    --toast-bg-color: ${theme.toast.default};
    &[data-kind='warning'] {
      --toast-bg-color: ${theme.toast.warning};
    }
    &[data-kind='error'] {
      --toast-bg-color: ${theme.toast.error};
    }
    background-color: var(--toast-bg-color);
    border: 1px solid var(--toast-bg-color);
    ${theme.mode === 'dark' && styles.darkOutline};
  `,
};

export const place = keyframes`
  0% {
    transform: scale(2);
    opacity: 0;
    ${styles.shadowInitial};
  }
  75%, 100% {
    transform: scale(1);
    opacity: 1;
    ${styles.shadowFinal};
  }
`;

export const Toast: React.FC<Props> = ({ type = 'default', onClose, timeout, children }) => {
  useEffect(() => {
    if (timeout === undefined || onClose === undefined) {
      return;
    }
    const handle = setTimeout(onClose, timeout);
    return () => window.clearTimeout(handle);
  }, [onClose, timeout]);
  return (
    <div role="alert" css={styles.container} data-kind={type}>
      <div>{children}</div>
      {onClose && (
        <div css={styles.closeButtonContainer}>
          <ToastCloseButton onClose={onClose} />
        </div>
      )}
    </div>
  );
};
