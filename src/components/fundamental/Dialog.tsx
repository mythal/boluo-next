import { FC } from 'react';
import { Overlay } from './Overlay';
import { Button } from './Button';
import { useIntl } from 'react-intl';
import { useTransition } from 'transition-hook';
import { ChildrenProps, StyleProps } from '../../helper/props';
import clsx from 'clsx';

interface Props extends StyleProps, ChildrenProps {
  title?: string;
  show?: boolean;
  dismiss: () => void;
  showDismissButton?: boolean;
  dismissText?: string;
  onSubmit?: () => void;
  submitText?: string;
}

export const Dialog: FC<Props> = ({
  children,
  title,
  onSubmit,
  submitText,
  className,
  show = true,
  dismiss,
  showDismissButton = true,
  dismissText,
}) => {
  const transitionTimeMs = 300;
  const { stage, shouldMount } = useTransition(show, transitionTimeMs);
  const intl = useIntl();
  if (!submitText) {
    submitText = intl.formatMessage({ defaultMessage: 'Submit', id: 'submit' });
  }
  if (!dismissText) {
    dismissText = intl.formatMessage({ defaultMessage: 'Cancel', id: 'cancel' });
  }
  if (!shouldMount) {
    return null;
  }

  return (
    <Overlay
      dismiss={dismiss}
      data-stage={stage}
      className={clsx(
        'border-solid border-[0.125rem] border-gray-300 dark:border-gray-900 rounded',
        'bg-gray-50 dark:bg-gray-800  opacity-0 p-4 min-w-[14em]',
        'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        'shadow-1 shadow-[rgba(0,0,0,0.03)] dark:shadow-[rgba(0, 0, 0, 0.25)]',
        stage === 'enter' && 'transition-all duration-200 opacity-100',
        stage === 'leave' && ['transition-all duration-200 opacity-0', '-translate-x-1/2 translate-y-[30em]'],
        className
      )}
    >
      {title && <div className="text-xl mb-2 pb-1">{title}</div>}
      <div>{children}</div>
      {(onSubmit || showDismissButton) && (
        <div className="mt-8 text-right">
          {showDismissButton && <Button onClick={() => dismiss()}>{dismissText}</Button>}
          {onSubmit && (
            <Button data-type="primary" onClick={() => onSubmit()} className="ml-1" type="submit">
              {submitText}
            </Button>
          )}
        </div>
      )}
    </Overlay>
  );
};
