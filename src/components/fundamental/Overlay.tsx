import React, { FC, useRef } from 'react';
import { Portal } from './Portal';
import { useOutside } from '../../hooks/useOutside';
import { useOnEsc } from '../../hooks/useOnEsc';
import { css } from '@emotion/react';

const styles = {
  container: css`
    position: absolute;
    z-index: 99;
    left: 0;
    top: 0;
  `,
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
      <div ref={containerRef} css={styles.container} {...props}>
        {children}
      </div>
    </Portal>
  );
};
