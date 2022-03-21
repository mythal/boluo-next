import { I, i } from '../helper/function';
import { Action, AppDispatch, makeAction, store } from './store';
import { Reducer } from 'redux';
import { IntlConfig } from 'react-intl';
import enMessages from '../../lang/compiled/en.json';
import type { ReactChild } from 'react';
import { Id, makeId } from '../helper/id';
import * as O from 'optics-ts';

export type Scheme = 'light' | 'dark' | 'auto';
export type Locale = 'en' | 'ja' | 'zh-CN';
export type IntlMessages = IntlConfig['messages'];
export interface Notification {
  id: Id;
  child: ReactChild;
  level: 'warn' | 'default' | 'error';
}

export interface InterfaceState {
  scheme: Scheme;
  locale: Locale;
  messages: IntlMessages;
  notifications: Notification[];
}

export const interfaceActions = {
  switchScheme: i as I<Scheme>,
  changeLocale: (locale: Locale, messages: IntlMessages) => ({ locale, messages }),
  notify: (child: ReactChild, level: Notification['level']): Notification => ({ child, level, id: makeId() }),
  dismissNotification: i as I<Id>,
};

const initState: InterfaceState = {
  scheme: 'light',
  locale: 'en',
  messages: undefined,
  notifications: [],
};
const notificationsOptic = O.optic<InterfaceState>().prop('notifications');
export type InterfaceActions = Action<keyof typeof interfaceActions>;
export const interfaceReducer: Reducer<InterfaceState, InterfaceActions> = (state = initState, action) => {
  switch (action.type) {
    case 'switchScheme':
      return { ...state, scheme: action.payload };
    case 'changeLocale':
      const { locale, messages } = action.payload;
      return { ...state, locale, messages };
    case 'notify':
      return O.modify(notificationsOptic)((notifications) => notifications.concat([action.payload]))(state);
    case 'dismissNotification':
      return O.remove(notificationsOptic.find((notification) => notification.id === action.payload))(state);
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

export const notify = (node: ReactChild, level: Notification['level'] = 'default') => {
  const action = makeAction('notify', node, level);
  store.dispatch(action);
};

export const dismissNotification = (id: Id) => {
  store.dispatch(makeAction('dismissNotification', id));
};
