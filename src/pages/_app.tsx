import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { TopLevelErrorBoundary } from '../components/TopLevelErrorBoundary';
import { useLocaleProvider } from '../locale/useLocaleProvider';
import { Provider } from 'jotai';

function App({ Component, pageProps }: AppProps) {
  const LocaleProvider = useLocaleProvider();

  return (
    <TopLevelErrorBoundary>
      <Provider>
        <LocaleProvider>
          <Component {...pageProps} />
        </LocaleProvider>
      </Provider>
    </TopLevelErrorBoundary>
  );
}
export default App;
