import { useRef, VFC } from 'react';
import { css } from '@emotion/react';
import { SpinnerIcon } from './SpinnerIcon';
import { useContainerQuery } from '../hooks/useContainerQuery';
import { m } from '../styles/utility/spacing';
import { animate } from '../styles/utility/transitions';
import { text } from '../styles/utility/typography';

const styles = {
  container: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &[data-width='md'] {
      font-size: 1.5rem;
    }
    &[data-width='xs'],
    &[data-height='xs'] {
      ${text.xs};
    }
  `,
};

const config = {
  width: {
    xs: 0,
    sm: 100,
    md: 180,
  },
  height: {
    xs: 0,
    sm: 100,
  },
};

export const Loading: VFC = () => {
  const container = useRef<HTMLDivElement>(null);
  const [width, height] = useContainerQuery(container, config);
  return (
    <div css={styles.container} ref={container} data-width={width} data-height={height}>
      <SpinnerIcon />
      {width !== 'xs' && <span css={[m.l(1), animate.pulse]}>loading</span>}
    </div>
  );
};
