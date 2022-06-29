import React from 'react';
import { IntlProvider } from 'react-intl';
import { IntlErrorCode, OnErrorFn } from '@formatjs/intl';
import { notify } from '../../state/user-interface';
import useSWRImmutable from 'swr/immutable';
import { ChildrenProps } from '../../helper/props';
import { useRouter } from 'next/router';
import { IntlMessages, loadMessages, Locale } from '../../helper/locale';

const onError: OnErrorFn = (err) => {
  if (err.code === IntlErrorCode.MISSING_TRANSLATION) {
    console.debug(err.message);
    return;
  }
  console.error(err);
};

const useLoadMessages = (locale: Locale): IntlMessages => {
  const { data, error } = useSWRImmutable<IntlMessages>(locale, loadMessages);
  if (error) {
    notify('An error occurred while loading the language data.', 'error');
  }
  if (!data) {
    return undefined;
  }
  return data;
};

export const toLocale = (data: unknown): Locale => {
  if (typeof data !== 'string') {
    return 'en';
  } else if (data.startsWith('zh')) {
    return 'zh-CN';
  } else if (data.startsWith('ja')) {
    return 'ja';
  } else {
    return 'en';
  }
};

export const NextLocaleProvider: React.FC<ChildrenProps> = ({ children }) => {
  const router = useRouter();
  const locale = toLocale(router.locale);
  const messages = useLoadMessages(locale);
  return (
    <IntlProvider locale={locale} messages={messages} defaultLocale="en" onError={onError}>
      {children}
    </IntlProvider>
  );
};
