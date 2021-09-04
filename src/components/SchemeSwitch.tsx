import { useAtom } from 'jotai';
import { schemeAtom } from '../state/scheme';
import React, { useCallback } from 'react';
import { useIntl } from 'react-intl';
import { StyleProps } from '../helper/props';
import { Button } from './Button';
import { text } from '../styles/utility/typography';
import { css } from '@emotion/react';
import Icon from './Icon';

const wrapper = css`
  ${text.sm};
  width: max-content;
`;

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
    <div className={className} css={wrapper}>
      <Button
        onClick={isLight ? switchToAuto : switchToLight}
        data-on={isLight}
        aria-label={lightButtonLabel}
        data-group
        data-icon
      >
        <Icon noStrut icon="sun" />
      </Button>
      <Button
        onClick={isDark ? switchToAuto : switchToDark}
        data-on={isDark}
        aria-label={darkButtonLabel}
        data-group
        data-icon
      >
        <Icon noStrut icon={'moon'} />
      </Button>
    </div>
  );
};
