import { useAtom } from 'jotai';
import { schemeAtom } from '../state/scheme';
import React, { useCallback } from 'react';
import Sun from '../icons/sun.svg';
import Moon from '../icons/moon.svg';
import { useIntl } from 'react-intl';
import { StyleProps } from '../helper/props';
import { Button } from './Button';

export const SchemeSwitch: React.FC<StyleProps> = ({ className }) => {
  const intl = useIntl();
  const [scheme, setScheme] = useAtom(schemeAtom);
  const isLight = scheme === 'light';
  const isDark = scheme === 'dark';
  const switchToDark = useCallback(() => setScheme('dark'), [setScheme]);
  const switchToLight = useCallback(() => setScheme('light'), [setScheme]);
  const switchToAuto = useCallback(() => setScheme('auto'), [setScheme]);
  const lightButtonLabel = intl.formatMessage({ defaultMessage: 'Switch to light scheme' });
  const darkButtonLabel = intl.formatMessage({ defaultMessage: 'Switch to dark scheme' });

  return (
    <div className={className}>
      <Button onClick={isLight ? switchToAuto : switchToLight} data-active={isLight} aria-label={lightButtonLabel}>
        <Sun aria-hidden />
      </Button>
      <Button onClick={isDark ? switchToAuto : switchToDark} data-active={isDark} aria-label={darkButtonLabel}>
        <Moon aria-hidden />
      </Button>
    </div>
  );
};
