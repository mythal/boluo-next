import React, { useMemo } from 'react';
import { StyleProps } from '../helper/props';
import { Select } from './fundamental/Select';
import { useLocale } from '../hooks/useLocale';
import { toLocale } from '../helper/locale';

export const LocaleSwitch: React.FC<StyleProps> = ({ className }) => {
  const [locale, changeLocale] = useLocale();
  const handler = async (value: string) => {
    changeLocale(toLocale(value));
  };
  const items = useMemo(
    () => [
      {
        value: 'en',
        label: 'English',
      },
      {
        value: 'zh-CN',
        label: '简体中文',
      },
      {
        value: 'ja',
        label: '日本語',
      },
    ],
    []
  );
  return <Select className={className} items={items} value={locale} onChange={handler} />;
};
