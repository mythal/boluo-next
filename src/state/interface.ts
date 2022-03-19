import { I, i } from '../helper/function';
import { Action, AppDispatch, makeAction } from './store';
import { Reducer } from 'redux';
import { IntlConfig } from 'react-intl';
import enMessages from '../../lang/compiled/en.json';

export type Scheme = 'light' | 'dark' | 'auto';
export type Locale = 'en' | 'ja' | 'zh-CN';
export type IntlMessages = IntlConfig['messages'];

export interface InterfaceState {
  scheme: Scheme;
  locale: Locale;
  messages: IntlMessages;
}

export const interfaceActions = {
  switchScheme: i as I<Scheme>,
  changeLocale: (locale: Locale, messages: IntlMessages) => ({ locale, messages }),
};

const initState: InterfaceState = {
  scheme: 'light',
  locale: 'en',
  messages: undefined,
};

export type InterfaceActions = Action<keyof typeof interfaceActions>;
export const interfaceReducer: Reducer<InterfaceState, InterfaceActions> = (state = initState, action) => {
  switch (action.type) {
    case 'switchScheme':
      return { ...state, scheme: action.payload };
    case 'changeLocale':
      const { locale, messages } = action.payload;
      return { ...state, locale, messages };
    default:
      return state;
  }
};

export const changeLocale = (localeString: string) => async (dispatch: AppDispatch) => {
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
  dispatch(makeAction('changeLocale', locale, messages));
};
