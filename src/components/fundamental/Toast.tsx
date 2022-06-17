import React, { useEffect, useState } from 'react';
import { css, keyframes, Theme } from '@emotion/react';
import { ToastCloseButton } from './ToastCloseButton';
import type { Notification } from '../../state/interface';
import { useTransition } from 'transition-hook';
import { ChildrenProps, StyleProps } from '../../helper/props';
import { unit } from '../../styles/utility/sizing';
import { shadow } from '../../styles/utility/effect';

interface Props extends StyleProps, ChildrenProps {
  level?: Notification['level'];
  timeout?: number;
  onClose?: () => void;
}

const styles = {
  shadowInitial: shadow.xl,
  shadowFinal: css`
    box-shadow: ${unit(0.5)} ${unit(0.5)} 0 rgba(0, 0, 0, 0.25);
  `,
  darkOutline: css`
    border-color: rgba(128, 128, 128, 0.5);
  `,
  closeButtonContainer: css`
    margin-left: 0.5rem;
  `,
  container: (theme: Theme) => css`
    display: flex;
    justify-content: space-between;
    width: max(15vw, 10em);
    padding: 1rem;
    border-radius: ${unit(1)};
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
    border: ${unit(0.5)} solid ${theme.toast.outline};

    &[data-stage='leave'] {
      animation: ${leave} 210ms;
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
    opacity: 0;
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
