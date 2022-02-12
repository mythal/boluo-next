import React, { useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { IntlErrorCode, OnErrorFn } from '@formatjs/intl';
import { getLocale, getMessages, getSwitchLanguage, LOCALE_KEY, useStore } from '../../state/store';

const onError: OnErrorFn = (err) => {
  if (err.code === IntlErrorCode.MISSING_TRANSLATION) {
    console.debug(err.message);
    return;
  }
  console.error(err);
};

export const LocaleProvider: React.FC = ({ children }) => {
  const locale = useStore(getLocale);
  const messages = useStore(getMessages);
  const switchLanguage = useStore(getSwitchLanguage);
  useEffect(() => {
    const locale = localStorage.getItem(LOCALE_KEY);
    if (locale) {
      switchLanguage(locale).then(console.log);
    }
  }, [switchLanguage]);
  return (
    <IntlProvider locale={locale} messages={messages} defaultLocale="en" onError={onError}>
      {children}
    </IntlProvider>
  );
};
