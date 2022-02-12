import create from 'zustand';
import { combine, devtools, subscribeWithSelector } from 'zustand/middleware';
import { writeSchemeToStorage, Scheme } from '../helper/scheme';
import { OpticFor, get, optic } from 'optics-ts';
import type { IntlConfig } from 'react-intl';
import enMessages from '../../lang/compiled/en.json';

export const LOCALE_KEY = 'LOCALE';
export type Locale = 'en' | 'ja' | 'zh-CN';

const initialState = {
  scheme: 'light' as Scheme,
  locale: 'en' as Locale,
  messages: enMessages as IntlConfig['messages'],
};

const combinedState = combine(initialState, (set) => ({
  switchScheme: (scheme: Scheme) => set({ scheme }, PARTIAL, `switch to ${scheme}`),
  switchLanguage: async (localeString: string) => {
    let locale: Locale;
    let messages: IntlConfig['messages'];
    if (localeString.startsWith('zh')) {
      locale = 'zh-CN';
      messages = (await import('../../lang/compiled/zh_CN.json')).default;
    } else if (localeString.startsWith('ja')) {
      locale = 'ja';
      messages = (await import('../../lang/compiled/ja_JP.json')).default;
    } else {
      locale = 'en';
      messages = enMessages;
    }
    localStorage.setItem(LOCALE_KEY, locale);
    set({ locale, messages }, PARTIAL, `switch ${locale} `);
  },
}));

export type Store = ReturnType<typeof combinedState>;
export const storeOptic: OpticFor<Store> = optic<Store>();
export const getLocale = get(storeOptic.prop('locale'));
export const getMessages = get(storeOptic.prop('messages'));
export const getSwitchLanguage = get(storeOptic.prop('switchLanguage'));
export const getScheme = get(storeOptic.prop('scheme'));
export const getSwitchScheme = get(storeOptic.prop('switchScheme'));

export const useStore = create(devtools(subscribeWithSelector(combinedState)));

const REPLACE = true;
const PARTIAL = false;
useStore.subscribe(
  (state) => state.scheme,
  (scheme) => {
    writeSchemeToStorage(scheme);
  }
);
