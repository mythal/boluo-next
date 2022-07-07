import React, { useEffect, useState } from 'react';
import { ToastCloseButton } from './ToastCloseButton';
import type { UiNotification } from '../../state/user-interface';
import { useTransition } from 'transition-hook';
import { ChildrenProps, StyleProps } from '../../helper/props';
import clsx from 'clsx';

interface Props extends StyleProps, ChildrenProps {
  level?: UiNotification['level'];
  timeout?: number;
  global?: boolean;
  onClose?: () => void;
}

export const Toast: React.FC<Props> = ({
  level = 'default',
  onClose,
  timeout,
  children,
  className,
  global = false,
}) => {
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
    <div
      role="alert"
      data-level={level}
      className={clsx(
        'flex justify-between rounded p-4 text-white shadow-toast',
        'border-1/2 border-black/10 dark:border-white/10',
        'w-[max(15vw,10em)]',
        level === 'default' && 'bg-gray-700 dark:bg-gray-900',
        level === 'warn' && 'bg-warning-600 dark:bg-warning-700',
        level === 'error' && 'bg-error-700 dark:bg-error-800',
        global && [
          'translate-y-64 opacity-0',
          stage === 'enter' && 'translate-y-0 opacity-100 transition-all duration-300',
          stage === 'leave' && 'translate-x-full translate-y-0 opacity-0 transition-all duration-200',
        ],
        className
      )}
      data-stage={stage}
    >
      <div>{children}</div>
      {onClose && (
        <div className="ml-2">
          <ToastCloseButton onClose={() => setShow(false)} />
        </div>
      )}
    </div>
  );
};
