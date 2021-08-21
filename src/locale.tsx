import { atom, useAtom } from 'jotai';
import en from '../lang/compiled/en.json';
import React, { useEffect, useState } from 'react';
import { IntlProvider, ResolvedIntlConfig } from 'react-intl';

export async function loadLocaleData(locale: string) {
  if (locale.startsWith('ja')) {
    return (await import('../lang/compiled/ja_JP.json')).default;
  } else if (locale.startsWith('zh')) {
    return (await import('../lang/compiled/zh_CN.json')).default;
  }
  return en;
}

export const DEFAULT_LOCALE = 'en';
export const localeAtom = atom(DEFAULT_LOCALE);
export const useMessages = () => {
  const [locale] = useAtom(localeAtom);
  const [messages, setMessages] = useState<ResolvedIntlConfig['messages']>(en);

  useEffect(() => {
    if (locale === DEFAULT_LOCALE) {
      setMessages(en);
      return;
    }
    (async () => {
      setMessages(await loadLocaleData(locale));
    })();
  }, [locale]);
  return messages;
};

export const LocaleProvider: React.FC = ({ children }) => {
  const [locale] = useAtom(localeAtom);
  return (
    <IntlProvider locale={locale} messages={useMessages()} defaultLocale={DEFAULT_LOCALE}>
      {children}
    </IntlProvider>
  );
};
