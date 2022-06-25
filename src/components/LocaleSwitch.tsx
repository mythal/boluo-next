import React, { useMemo, useState } from 'react';
import { StyleProps } from '../helper/props';
import { useAppDispatch, useAppSelector } from '../state/store';
import { changeLocale } from '../state/interface';
import { Select } from './fundamental/Select';

export const LocaleSwitch: React.FC<StyleProps> = ({ className }) => {
  const locale = useAppSelector((state) => state.interface.locale);
  const handler = async (value: string) => {
    changeLocale(value);
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
