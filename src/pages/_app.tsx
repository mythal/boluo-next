import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';

const messagesInChinese = {
  welcome: '欢迎',
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider locale="en" defaultLocale="en">
      <Component {...pageProps} />
    </IntlProvider>
  );
}
export default MyApp;
