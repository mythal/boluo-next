import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { TopLevelErrorBoundary } from '../components/TopLevelErrorBoundary';
import { useLocaleProvider } from '../locale/useLocaleProvider';

function MyApp({ Component, pageProps }: AppProps) {
  const LocaleProvider = useLocaleProvider();
  return (
    <LocaleProvider>
      <TopLevelErrorBoundary>
        <Component {...pageProps} />
      </TopLevelErrorBoundary>
    </LocaleProvider>
  );
}
export default MyApp;
