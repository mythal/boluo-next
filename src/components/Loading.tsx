import { FC, useRef } from 'react';
import { SpinnerIcon } from './SpinnerIcon';
import { useContainerQuery } from '../hooks/useContainerQuery';
import clsx from 'clsx';

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
  const xs = width === 'xs' || height === 'xs';
  const sm = !xs && (width === 'sm' || height === 'sm');
  const md = !(sm || xs) && (width === 'md' || height === 'md');
  const lg = !(sm || xs || md);
  return (
    <div
      ref={container}
      data-width={width}
      data-height={height}
      className={clsx(
        'h-full w-full',
        'flex items-center justify-center',
        lg && 'text-[3rem]',
        md && 'text-2xl',
        sm && 'text-base',
        xs && 'text-sm'
      )}
    >
      <SpinnerIcon label="loading..." />
    </div>
  );
};
