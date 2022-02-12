import { ErrorBoundary } from '../components/ErrorBoundary';
import { StyleProvider } from '../components/global/StyleProvider';
import { LocaleProvider } from '../components/global/LocaleProvider';
import { AppPropsWithLayout } from '../helper/layout';
import 'modern-normalize/modern-normalize.css';

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const title = Component.title;

  return (
    <StyleProvider>
      <ErrorBoundary>
        <LocaleProvider>{getLayout(<Component {...pageProps} />, title)}</LocaleProvider>
      </ErrorBoundary>
    </StyleProvider>
  );
}
export default App;
