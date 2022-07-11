import type { Reducer } from 'redux';
import type { IntlConfig } from 'react-intl';
import type { ReactNode } from 'react';
import { prop, compose, remove, find, set, appendTo } from 'optics-ts/standalone';
import type { Id } from '../helper/id';
// eslint-disable-next-line import/no-cycle
import { perform, GenericHandle } from './store';
import type { Action } from './actions';
// Use the module's type as the action map object.
import type * as userInterfaceActions from './user-interface.actions';

export type Scheme = 'light' | 'dark' | 'auto';
export type Locale = 'en' | 'ja' | 'zh-CN';
export type IntlMessages = IntlConfig['messages'];
export interface UiNotification {
  id: Id;
  child: ReactNode;
  level: 'warn' | 'default' | 'error';
}

export interface UserInterfaceState {
  scheme: Scheme;
  locale: Locale;
  notifications: UiNotification[];
}

const initState: UserInterfaceState = {
  scheme: 'light',
  locale: 'en',
  notifications: [],
};

export type InterfaceActions = Action<keyof typeof userInterfaceActions>;

// Recieve a action and state (curried), return a new state
type Handler<K extends InterfaceActions['type']> = GenericHandle<
  // Limit action types to userInterfaceActions
  typeof userInterfaceActions,
  K,
  UserInterfaceState
>;

export type Handlers = {
  [key in InterfaceActions['type']]: Handler<key>;
};

const handleDissmissNotification: Handler<'dismissNotification'> = (id) =>
  remove(
    compose(
      'notifications',
      find((notification: UiNotification) => notification.id === id)
    )
  );

const handlers: Handlers = {
  switchScheme: set(prop('scheme')),
  notify: set(compose('notifications', appendTo)),
  changeLocale: set(prop('locale')),
  dismissNotification: handleDissmissNotification,
};

export const userInterfaceReducer: Reducer<UserInterfaceState, InterfaceActions> = (state = initState, action) => {
  if (action.type in handlers) {
    const handler: Handler<typeof action.type> = handlers[action.type];
    return handler(action.payload)(state);
  } else {
    return state;
  }
};

export const switchScheme = (schemeString: string) => {
  if (schemeString === 'dark' || schemeString === 'light') {
    localStorage.setItem('SCHEME', schemeString);
    perform('switchScheme', schemeString);
  } else {
    localStorage.setItem('SCHEME', 'auto');
    perform('switchScheme', 'auto');
  }
};

export const changeLocale = (localeString: string) => {
  let locale: Locale;
  localStorage.setItem('LOCALE', localeString);
  if (localeString.startsWith('zh')) {
    locale = 'zh-CN';
  } else if (localeString.startsWith('ja')) {
    locale = 'ja';
  } else {
    locale = 'en';
  }
  perform('changeLocale', locale);
};

export const notify = (node: ReactNode, level: UiNotification['level'] = 'default') => {
  perform('notify', node, level);
};
