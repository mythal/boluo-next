import React, { FC, useRef } from 'react';
import { Portal } from './Portal';
import { useOutside } from '../../hooks/useOutside';
import { useOnEsc } from '../../hooks/useOnEsc';
import clsx from 'clsx';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  dismiss?: () => void;
};

export const Overlay: FC<Props> = ({ children, dismiss, className, ...props }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useOutside(dismiss, containerRef);
  useOnEsc(dismiss);
  return (
    <Portal>
      <div ref={containerRef} className={clsx('absolute z-50', className)} {...props}>
        {children}
      </div>
    </Portal>
  );
};
