import React, { useEffect, useState } from 'react';
import { css, keyframes, Theme } from '@emotion/react';
import { shadow } from '../../styles/utility/effect';
import { ToastCloseButton } from './ToastCloseButton';
import type { Notification } from '../../state/interface';
import { useTransition } from 'transition-hook';

interface Props {
  level?: Notification['level'];
  timeout?: number;
  onClose?: () => void;
  className?: string;
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
    justify-content: space-between;
    width: max(15vw, 10em);
    padding: 1rem;
    border-radius: 0.125rem;
    color: #fff;
    ${styles.shadowFinal};
    animation: ${place} 0.5s cubic-bezier(0, 0, 0.2, 1);

    --toast-bg-color: ${theme.toast.default};
    &[data-level='warn'] {
      --toast-bg-color: ${theme.toast.warning};
    }
    &[data-level='error'] {
      --toast-bg-color: ${theme.toast.error};
    }
    background-color: var(--toast-bg-color);
    border: 1px solid var(--toast-bg-color);
    ${theme.mode === 'dark' && styles.darkOutline};

    &[data-stage='leave'] {
      animation: ${leave} 200ms;
    }
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

export const leave = keyframes`
  0% {

  }
  100% {
    transform: translateX(100%);
  }
`;

export const Toast: React.FC<Props> = ({ level = 'default', onClose, timeout, children, className }) => {
  const [show, setShow] = useState(true);
  const { stage, shouldMount } = useTransition(show, 200);

  useEffect(() => {
    if (!shouldMount && onClose) {
      onClose();
    }
  }, [onClose, shouldMount]);

  useEffect(() => {
    if (timeout === undefined || onClose === undefined) {
      return;
    }
    const handle = setTimeout(onClose, timeout);
    return () => window.clearTimeout(handle);
  }, [onClose, timeout]);

  if (!shouldMount) {
    return null;
  }
  return (
    <div role="alert" css={styles.container} data-level={level} className={className} data-stage={stage}>
      <div>{children}</div>
      {onClose && (
        <div css={styles.closeButtonContainer}>
          <ToastCloseButton onClose={() => setShow(false)} />
        </div>
      )}
    </div>
  );
};
