import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { IntlProvider, ResolvedIntlConfig } from 'react-intl';
import en from '../../lang/compiled/en.json';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import { useState } from 'react';
import { TopLevelErrorBoundary } from '../components/TopLevelErrorBoundary';

async function loadLocaleData(locale: string) {
  if (locale.startsWith('ja')) {
    return (await import('../../lang/compiled/ja_JP.json')).default;
  } else if (locale.startsWith('zh')) {
    return (await import('../../lang/compiled/zh_CN.json')).default;
  }
  return en;
}
export const localeAtom = atom('en');

const useMessages = () => {
  const [locale] = useAtom(localeAtom);
  const [messages, setMessages] = useState<ResolvedIntlConfig['messages']>(en);

  useEffect(() => {
    (async () => {
      setMessages(await loadLocaleData(locale));
    })();
  }, [locale]);
  return messages;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TopLevelErrorBoundary>
      <IntlProvider locale="en" messages={useMessages()} defaultLocale="en">
        <Component {...pageProps} />
      </IntlProvider>
    </TopLevelErrorBoundary>
  );
}
export default MyApp;
