import clsx from 'clsx';
import React from 'react';
import { DataAttr } from '../../helper/props';

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
        'enabled:cursor-pointer disabled:cursor-not-allowed',
        'select-none appearance-none border-none',
        'inline-flex items-center justify-center focus:ring disabled:brightness-75',
        'm-0 gap-1 px-4 py-2 rounded-sm text-base',

        isSmall && 'py-0.5 px-3 min-h-[2rem]',

        type === 'default' &&
          'text-black dark:text-white bg-gray-300 \
           active-enabled:bg-gray-400 hover-enabled:bg-gray-200 \
           dark:bg-gray-800 dark:hover-enabled:bg-gray-700 dark:active-enabled:bg-gray-600',

        type === 'primary' &&
          'text-white bg-green-600 hover-enabled:bg-green-500 active-enabled:bg-green-700 \
           dark:bg-blue-600 dark:hover-enabled:bg-blue-500 dark:active-enabled:bg-blue-700',
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
