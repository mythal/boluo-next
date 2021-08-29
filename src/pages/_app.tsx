import { TopLevelErrorBoundary } from '../components/TopLevelErrorBoundary';
import { LocaleProvider } from '../components/LocaleProvider';
import { Provider } from 'jotai';
import { AppPropsWithLayout } from '../helper/layout';
import 'modern-normalize/modern-normalize.css';
import '../styles/global.css';
import { useScheme } from '../state/scheme';
import { GlobalStyle } from '../styles/GlobalStyle';

function App({ Component, pageProps }: AppPropsWithLayout) {
  useScheme();
  const getLayout = Component.getLayout ?? ((page) => page);
  const title = Component.title;

  return (
    <TopLevelErrorBoundary>
      <GlobalStyle />
      <Provider>
        <LocaleProvider>{getLayout(<Component {...pageProps} />, title)}</LocaleProvider>
      </Provider>
    </TopLevelErrorBoundary>
  );
}
export default App;
