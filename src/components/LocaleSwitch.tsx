import React, { ChangeEventHandler } from 'react';
import { StyleProps } from '../helper/props';
import { useAtom } from 'jotai';
import { localeAtom } from '../state/locale';

export const LocaleSwitch: React.FC<StyleProps> = ({ className }) => {
  const [locale, setLocale] = useAtom(localeAtom);
  const handler: ChangeEventHandler<HTMLSelectElement> = async (event) => {
    setLocale(event.target.value);
  };
  return (
    <select className={className} value={locale} onChange={handler}>
      <option value="en">English</option>
      <option value="zh-CN">简体中文</option>
      <option value="ja">日本語</option>
    </select>
  );
};
