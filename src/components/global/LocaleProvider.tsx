import React from 'react';
import { IntlProvider } from 'react-intl';
import { IntlErrorCode, OnErrorFn } from '@formatjs/intl';
import { useAppSelector } from '../../state/store';
import type { IntlMessages, Locale } from '../../state/interface';
import { notify } from '../../state/interface';
import useSWRImmutable from 'swr/immutable';
import { ChildrenProps } from '../../helper/props';

const onError: OnErrorFn = (err) => {
  if (err.code === IntlErrorCode.MISSING_TRANSLATION) {
    console.debug(err.message);
    return;
  }
  console.error(err);
};

const useLoadMessages = (locale: Locale): IntlMessages => {
  const { data, error } = useSWRImmutable<{ default: IntlMessages }>(locale, async () => {
    switch (locale) {
      case 'en':
        return import('../../../lang/compiled/en.json');
      case 'ja':
        return import('../../../lang/compiled/ja_JP.json');
      case 'zh-CN':
        return import('../../../lang/compiled/zh_CN.json');
    }
  });
  if (error) {
    notify('An error occurred while loading the language data.', 'error');
  }
  if (!data) {
    return undefined;
  }
  return data.default;
};

export const LocaleProvider: React.FC<ChildrenProps> = ({ children }) => {
  const locale = useAppSelector((state) => state.interface.locale);
  const messages = useLoadMessages(locale);
  return (
    <IntlProvider locale={locale} messages={messages} defaultLocale="en" onError={onError}>
      {children}
    </IntlProvider>
  );
};
