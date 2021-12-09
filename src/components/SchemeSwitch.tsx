import { useAtom } from 'jotai';
import { schemeAtom } from '../state/scheme';
import React, { useCallback } from 'react';
import { useIntl } from 'react-intl';
import { StyleProps } from '../helper/props';
import { css } from '@emotion/react';

const style = css`
  padding: 0.25rem 1rem;
  min-height: 2.5rem;
  display: flex;
  width: 100%;
  font-size: 1rem;
`;

export const SchemeSwitch: React.FC<StyleProps> = ({ className }) => {
  const intl = useIntl();
  const [scheme, setScheme] = useAtom(schemeAtom);
  const text = {
    light: intl.formatMessage({ defaultMessage: 'Light' }),
    dark: intl.formatMessage({ defaultMessage: 'Dark' }),
    auto: intl.formatMessage({ defaultMessage: 'Auto' }),
  };
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = useCallback(
    (e) => {
      const value = e.target.value;
      if (value === 'dark' || value === 'light') {
        setScheme(value);
      } else {
        setScheme('auto');
      }
    },
    [setScheme]
  );

  return (
    <div className={className}>
      <select value={scheme} onChange={handleChange} css={style}>
        <option value="auto">{text.auto}</option>
        <option value="light">{text.light}</option>
        <option value="dark">{text.dark}</option>
      </select>
    </div>
  );
};
