import type { ReactNode } from 'react';
import { Id, makeId } from '../helper/id';
import type { Locale, Scheme, UiNotification } from './user-interface';

export const switchScheme = (scheme: Scheme) => scheme;

export const changeLocale = (locale: Locale) => locale;

export const notify = (child: ReactNode, level: UiNotification['level']): UiNotification => ({
  child,
  level,
  id: makeId(),
});

export const dismissNotification = (id: Id) => id;
