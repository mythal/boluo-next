import React, { ChangeEventHandler, useState } from 'react';
import { StyleProps } from '../helper/props';
import { useAppDispatch, useAppSelector } from '../state/store';
import { changeLocale } from '../state/interface';

export const LocaleSwitch: React.FC<StyleProps> = ({ className }) => {
  const locale = useAppSelector((state) => state.interface.locale);
  const dispatch = useAppDispatch();
  const [loadState, setLoadState] = useState<'loaded' | 'loading'>('loaded');
  const handler: ChangeEventHandler<HTMLSelectElement> = async (event) => {
    setLoadState('loading');
    await dispatch(changeLocale(event.target.value));
    setLoadState('loaded');
  };
  return (
    <select className={className} disabled={loadState !== 'loaded'} value={locale} onChange={handler}>
      <option value="en">English</option>
      <option value="zh-CN">简体中文</option>
      <option value="ja">日本語</option>
    </select>
  );
};
