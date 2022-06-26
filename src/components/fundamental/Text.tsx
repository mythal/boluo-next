import clsx from 'clsx';
import { FC } from 'react';
import { ChildrenProps, StyleProps } from '../../helper/props';

interface Props extends StyleProps, ChildrenProps {
  size?: 'small' | 'normal';
}

export const Text: FC<Props> = ({ children, size = 'normal', className }) => (
  <p
    className={clsx(size === 'normal' && 'my-2 mx-0', size === 'small' && 'text-sm my-1 mx-0', className)}
    data-size={size}
  >
    {children}
  </p>
);
