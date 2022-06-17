import React, { useCallback, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { StyleProps } from '../helper/props';
import { dispatchAction, useAppSelector } from '../state/store';
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
  const handleChange = useCallback((value: string) => {
    if (value === 'dark' || value === 'light') {
      dispatchAction('switchScheme', value);
    } else {
      dispatchAction('switchScheme', 'auto');
    }
  }, []);

  return (
    <div className={className}>
      <Select items={selectItems} value={scheme} onChange={handleChange} />
    </div>
  );
};
