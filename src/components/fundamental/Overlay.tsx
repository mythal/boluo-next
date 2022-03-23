import React, { CSSProperties, FC, useRef } from 'react';
import { Portal } from './Portal';
import { useOutside } from '../../hooks/useOutside';
import { useOnEsc } from '../../hooks/useOnEsc';

const style: CSSProperties = {
  position: 'absolute',
  zIndex: 99,
};

type Props = React.HTMLAttributes<HTMLDivElement> & {
  dismiss?: () => void;
};

export const Overlay: FC<Props> = ({ children, dismiss, ...props }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useOutside(dismiss, containerRef);
  useOnEsc(dismiss);
  return (
    <Portal>
      <div ref={containerRef} style={style} {...props}>
        {children}
      </div>
    </Portal>
  );
};
