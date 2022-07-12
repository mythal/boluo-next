import clsx from 'clsx';
import React from 'react';
import type { DataAttr } from '../../helper/props';

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> &
  DataAttr<{
    small?: boolean;
    type?: 'primary' | 'default';
  }>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, ...props }, ref) => {
  const isSmall = props['data-small'] ?? false;
  const type = props['data-type'] ?? 'default';
  return (
    <button
      className={clsx(
        'disabled:cursor-not-allowed enabled:cursor-pointer',
        'select-none appearance-none border-none',
        'inline-flex items-center justify-center focus:ring disabled:brightness-75 disabled:contrast-75',
        'm-0 gap-1 rounded-sm px-4 py-2 text-base',

        isSmall && 'min-h-[2rem] py-0.5 px-3',

        type === 'default' && [
          'bg-gray-300 text-black hover-enabled:bg-gray-200',
          'active-enabled:bg-gray-400 dark:bg-gray-600',
          'dark:text-white dark:hover-enabled:bg-gray-500 dark:active-enabled:bg-gray-600',
        ],

        type === 'primary' && [
          'bg-green-600 text-white hover-enabled:bg-green-500 active-enabled:bg-green-700',
          'dark:bg-blue-600 dark:hover-enabled:bg-blue-500 dark:active-enabled:bg-blue-700',
        ],
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = 'Button';
