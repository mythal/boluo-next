import { I, i } from '../helper/function';
import { Action, AppDispatch, GenericHandle, makeAction, store } from './store';
import { Reducer } from 'redux';
import { IntlConfig } from 'react-intl';
import type { ReactNode } from 'react';
import { Id, makeId } from '../helper/id';
import { prop, compose, remove, modify, find, set, appendTo } from 'optics-ts/standalone';

export type Scheme = 'light' | 'dark' | 'auto';
export type Locale = 'en' | 'ja' | 'zh-CN';
export type IntlMessages = IntlConfig['messages'];
export interface Notification {
  id: Id;
  child: ReactNode;
  level: 'warn' | 'default' | 'error';
}

export interface InterfaceState {
  scheme: Scheme;
  locale: Locale;
  notifications: Notification[];
}

export const interfaceActions = {
  switchScheme: i as I<Scheme>,
  changeLocale: (locale: Locale) => locale,
  notify: (child: ReactNode, level: Notification['level']): Notification => ({ child, level, id: makeId() }),
  dismissNotification: i as I<Id>,
};

const initState: InterfaceState = {
  scheme: 'light',
  locale: 'en',
  notifications: [],
};

export type InterfaceActions = Action<keyof typeof interfaceActions>;
type Handler<K extends keyof typeof interfaceActions> = GenericHandle<typeof interfaceActions, K, InterfaceState>;

const handleSwitchScheme: Handler<'switchScheme'> = set(prop('scheme'));

const handleNotify: Handler<'notify'> = set(compose('notifications', appendTo));

const handleChangeLocale: Handler<'changeLocale'> = set(prop('locale'));

const handleDissmissNotification: Handler<'dismissNotification'> = (id) =>
  remove(
    compose(
      'notifications',
      find((notification: Notification) => notification.id === id)
    )
  );

export const interfaceReducer: Reducer<InterfaceState, InterfaceActions> = (state = initState, action) => {
  switch (action.type) {
    case 'switchScheme':
      return handleSwitchScheme(action.payload)(state);
    case 'changeLocale':
      return handleChangeLocale(action.payload)(state);
    case 'notify':
      return handleNotify(action.payload)(state);
    case 'dismissNotification':
      return handleDissmissNotification(action.payload)(state);
    default:
      return state;
  }
};

export const changeLocale = (localeString: string) => {
  let locale: Locale;
  if (localeString.startsWith('zh')) {
    locale = 'zh-CN';
  } else if (localeString.startsWith('ja')) {
    locale = 'ja';
  } else {
    locale = 'en';
  }
  store.dispatch(makeAction('changeLocale', locale));
};

export const notify = (node: ReactNode, level: Notification['level'] = 'default') => {
  const action = makeAction('notify', node, level);
  store.dispatch(action);
};

export const dismissNotification = (id: Id) => {
  store.dispatch(makeAction('dismissNotification', id));
};
