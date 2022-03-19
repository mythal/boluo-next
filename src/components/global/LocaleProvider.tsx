import React from 'react';
import { IntlProvider } from 'react-intl';
import { IntlErrorCode, OnErrorFn } from '@formatjs/intl';
import { useAppSelector } from '../../state/store';

const onError: OnErrorFn = (err) => {
  if (err.code === IntlErrorCode.MISSING_TRANSLATION) {
    console.debug(err.message);
    return;
  }
  console.error(err);
};

export const LocaleProvider: React.FC = ({ children }) => {
  const locale = useAppSelector((state) => state.interface.locale);
  const messages = useAppSelector((state) => state.interface.messages);
  return (
    <IntlProvider locale={locale} messages={messages} defaultLocale="en" onError={onError}>
      {children}
    </IntlProvider>
  );
};
