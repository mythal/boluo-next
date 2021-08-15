import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import en from '../../lang/compiled/en.json';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import { useState } from 'react';

function loadLocaleData(locale: string) {
  if (locale.startsWith('ja')) {
    return import('../../lang/compiled/ja_JP.json');
  } else if (locale.startsWith('zh')) {
    return import('../../lang/compiled/zh_CN.json');
  }
  return en;
}
export const localeAtom = atom('en');

const useMessages = () => {
  const [locale] = useAtom(localeAtom);
  const [messages, setMessages] = useState(en);

  useEffect(() => {
    (async () => {
      setMessages(await loadLocaleData(locale));
    })();
  }, [locale]);
  return messages;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider locale="en" messages={useMessages()} defaultLocale="en">
      <Component {...pageProps} />
    </IntlProvider>
  );
}
export default MyApp;
