import React, { ChangeEventHandler } from 'react';
import { StyleProps } from '../helper/props';
import { getLocale, useStore } from '../state/store';

export const LocaleSwitch: React.FC<StyleProps> = ({ className }) => {
  const locale = useStore(getLocale);
  const setLocale = useStore((state) => state.switchLanguage);
  const handler: ChangeEventHandler<HTMLSelectElement> = async (event) => {
    await setLocale(event.target.value);
  };
  return (
    <select className={className} value={locale} onChange={handler}>
      <option value="en">English</option>
      <option value="zh-CN">简体中文</option>
      <option value="ja">日本語</option>
    </select>
  );
};
