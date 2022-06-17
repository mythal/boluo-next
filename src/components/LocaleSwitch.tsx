import React, { useMemo, useState } from 'react';
import { StyleProps } from '../helper/props';
import { useAppDispatch, useAppSelector } from '../state/store';
import { changeLocale } from '../state/interface';
import { Select } from './fundamental/Select';

export const LocaleSwitch: React.FC<StyleProps> = ({ className }) => {
  const locale = useAppSelector((state) => state.interface.locale);
  const dispatch = useAppDispatch();
  const [loadState, setLoadState] = useState<'loaded' | 'loading'>('loaded');
  const handler = async (value: string) => {
    setLoadState('loading');
    await dispatch(changeLocale(value));
    setLoadState('loaded');
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
  return (
    <Select disabled={loadState === 'loading'} className={className} items={items} value={locale} onChange={handler} />
  );
};
