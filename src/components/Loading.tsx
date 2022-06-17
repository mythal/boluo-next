import { FC, useRef } from 'react';
import { css } from '@emotion/react';
import { SpinnerIcon } from './SpinnerIcon';
import { useContainerQuery } from '../hooks/useContainerQuery';

const styles = {
  container: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &[data-width='lg']&[data-height='lg'] {
      font-size: 3rem;
    }
    &[data-width='md'],
    &[data-height='md'] {
      font-size: 1.5rem;
    }
    &[data-width='sm'],
    &[data-height='sm'] {
      font-size: 1rem;
    }
    &[data-width='xs'],
    &[data-height='xs'] {
      font-size: 0.75rem;
    }
  `,
};

const config = {
  width: {
    xs: 0,
    sm: 100,
    md: 180,
    lg: 250,
  },
  height: {
    xs: 0,
    sm: 100,
    md: 180,
    lg: 250,
  },
};

export const Loading: FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const [width, height] = useContainerQuery(container, config);
  return (
    <div css={styles.container} ref={container} data-width={width} data-height={height}>
      <SpinnerIcon label="loading..." />
    </div>
  );
};
