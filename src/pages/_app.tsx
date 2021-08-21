import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { TopLevelErrorBoundary } from '../components/TopLevelErrorBoundary';
import { LocaleProvider } from '../locale';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TopLevelErrorBoundary>
      <LocaleProvider>
        <Component {...pageProps} />
      </LocaleProvider>
    </TopLevelErrorBoundary>
  );
}
export default MyApp;
