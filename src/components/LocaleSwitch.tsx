import { useRouter } from 'next/router';
import { ChangeEventHandler } from 'react';

export const LocaleSwitch = () => {
  const router = useRouter();
  const handler: ChangeEventHandler<HTMLSelectElement> = async (event) => {
    const locale = event.target.value;
    document.cookie = `NEXT_LOCALE=${locale}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    await router.push('/', '/', { locale });
  };
  return (
    <select value={router.locale ?? router.defaultLocale} onChange={handler}>
      <option value="en">English</option>
      <option value="zh-CN">简体中文</option>
      <option value="ja">日本語</option>
    </select>
  );
};
