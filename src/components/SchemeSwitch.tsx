import React, { useCallback } from 'react';
import { useIntl } from 'react-intl';
import { StyleProps } from '../helper/props';
import { dispatchAction, useAppSelector } from '../state/store';
import { switchStyle } from '../styles/styles';

export const SchemeSwitch: React.FC<StyleProps> = ({ className }) => {
  const intl = useIntl();
  const scheme = useAppSelector((state) => state.interface.scheme);
  const text = {
    light: intl.formatMessage({ defaultMessage: 'Light' }),
    dark: intl.formatMessage({ defaultMessage: 'Dark' }),
    auto: intl.formatMessage({ defaultMessage: 'Auto' }),
  };
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = useCallback((e) => {
    const value = e.target.value;
    if (value === 'dark' || value === 'light') {
      dispatchAction('switchScheme', value);
    } else {
      dispatchAction('switchScheme', 'auto');
    }
  }, []);

  return (
    <div className={className}>
      <select value={scheme} onChange={handleChange} css={switchStyle}>
        <option value="auto">{text.auto}</option>
        <option value="light">{text.light}</option>
        <option value="dark">{text.dark}</option>
      </select>
    </div>
  );
};
