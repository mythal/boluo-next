import React from 'react';
import { localeAtom, messagesAtom } from '../../state/locale';
import { useAtomValue } from 'jotai/utils';
import { IntlProvider } from 'react-intl';
import { IntlErrorCode, OnErrorFn } from '@formatjs/intl';

const onError: OnErrorFn = (err) => {
  if (err.code === IntlErrorCode.MISSING_TRANSLATION) {
    console.debug(err.message);
    return;
  }
  console.error(err);
};

export const LocaleProvider: React.FC = ({ children }) => {
  const locale = useAtomValue(localeAtom);
  const messages = useAtomValue(messagesAtom);
  return (
    <IntlProvider locale={locale} messages={messages} defaultLocale="en" onError={onError}>
      {children}
    </IntlProvider>
  );
};
