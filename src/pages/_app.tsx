import { Provider as ReduxProvider } from 'react-redux';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { StyleProvider } from '../components/global/StyleProvider';
import { LocaleProvider } from '../components/global/LocaleProvider';
import { AppPropsWithLayout } from '../helper/layout';
import 'modern-normalize/modern-normalize.css';
import store from '../state/store';

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const title = Component.title;

  return (
    <ReduxProvider store={store}>
      <StyleProvider>
        <ErrorBoundary>
          <LocaleProvider>{getLayout(<Component {...pageProps} />, title)}</LocaleProvider>
        </ErrorBoundary>
      </StyleProvider>
    </ReduxProvider>
  );
}
export default App;
