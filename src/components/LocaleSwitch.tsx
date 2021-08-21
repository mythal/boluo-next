import { useAtom } from 'jotai';
import { localeAtom } from '../locale';

export const LocaleSwitch = () => {
  const [locale, setLocale] = useAtom(localeAtom);
  return (
    <select value={locale} onChange={(event) => setLocale(event.target.value)}>
      <option value="en">English</option>
      <option value="zh-CN">简体中文</option>
      <option value="ja-JP">日本語</option>
    </select>
  );
};
