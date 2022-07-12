import React, { useCallback, useMemo } from 'react';
import { useIntl } from 'react-intl';
import type { StyleProps } from '../helper/props';
import { switchScheme } from '../state/user-interface';
import { perform, useAppSelector } from '../state/store';
import { Select } from './fundamental/Select';

export const SchemeSwitch: React.FC<StyleProps> = ({ className }) => {
  const intl = useIntl();
  const scheme = useAppSelector((state) => state.interface.scheme);
  const selectItems = useMemo(
    () => [
      {
        label: intl.formatMessage({ defaultMessage: 'Light' }),
        value: 'light',
      },
      {
        label: intl.formatMessage({ defaultMessage: 'Dark' }),
        value: 'dark',
      },
      {
        label: intl.formatMessage({ defaultMessage: 'Auto' }),
        value: 'auto',
      },
    ],
    [intl]
  );

  return (
    <div className={className}>
      <Select items={selectItems} value={scheme} onChange={switchScheme} />
    </div>
  );
};
