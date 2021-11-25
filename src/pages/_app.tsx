import { ErrorBoundary } from '../components/ErrorBoundary';
import { StyleProvider } from '../components/global/StyleProvider';
import { LocaleProvider } from '../components/global/LocaleProvider';
import { Provider } from 'jotai';
import { AppPropsWithLayout } from '../helper/layout';
import 'modern-normalize/modern-normalize.css';

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const title = Component.title;

  return (
    <Provider>
      <StyleProvider>
        <ErrorBoundary>
          <LocaleProvider>{getLayout(<Component {...pageProps} />, title)}</LocaleProvider>
        </ErrorBoundary>
      </StyleProvider>
    </Provider>
  );
}
export default App;
