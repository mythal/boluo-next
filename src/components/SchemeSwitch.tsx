import { useAtom } from 'jotai';
import { schemeAtom } from '../state/scheme';
import { useCallback } from 'react';
import Sun from '../icons/sun.svg';
import Moon from '../icons/moon.svg';
import { useIntl } from 'react-intl';

export const SchemeSwitch = () => {
  const intl = useIntl();
  const [scheme, setScheme] = useAtom(schemeAtom);
  const switchToDark = useCallback(() => setScheme('dark'), [setScheme]);
  const switchToLight = useCallback(() => setScheme('light'), [setScheme]);
  const lightButtonLabel = intl.formatMessage({ defaultMessage: 'Switch to light scheme' });
  const darkButtonLabel = intl.formatMessage({ defaultMessage: 'Switch to dark scheme' });

  return (
    <div>
      <button onClick={switchToLight} data-active={scheme === 'light'} aria-label={lightButtonLabel}>
        <Sun aria-hidden />
      </button>
      <button onClick={switchToDark} data-active={scheme === 'dark'} aria-label={darkButtonLabel}>
        <Moon aria-hidden />
      </button>
    </div>
  );
};
