import { atom } from 'jotai';
import enMessages from '../../lang/compiled/en.json';
import type { IntlConfig } from 'react-intl';

const STORAGE_KEY = 'LOCALE';

type Locale = 'en' | 'ja' | 'zh-CN';

export const localeAtom = atom<Locale, string>('en', (get, set, locale) => {
  localStorage.setItem(STORAGE_KEY, locale);
  if (locale.startsWith('zh')) {
    (async () => {
      const zhMessages = await import('../../lang/compiled/zh_CN.json');
      set(messagesAtom, zhMessages.default);
    })();
    set(localeAtom, 'zh-CN');
  } else if (locale.startsWith('ja')) {
    (async () => {
      const jaMessages = await import('../../lang/compiled/ja_JP.json');
      set(messagesAtom, jaMessages.default);
    })();
    set(localeAtom, 'ja');
  } else {
    set(localeAtom, 'en');
    set(messagesAtom, enMessages);
  }
});
localeAtom.onMount = (set) => {
  const storageLocale = localStorage.getItem(STORAGE_KEY);
  if (storageLocale) {
    set(storageLocale);
  }
};

export const messagesAtom = atom<IntlConfig['messages']>(enMessages);
