import { TopLevelErrorBoundary } from '../components/TopLevelErrorBoundary';
import { LocaleProvider } from '../components/LocaleProvider';
import { Provider } from 'jotai';
import { AppPropsWithLayout } from '../helper/layout';
import 'modern-normalize/modern-normalize.css';
import '../styles/global.css';
import { GlobalStyle } from '../styles/GlobalStyle';
import { ThemeProvider } from '../components/ThemeProvider';

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const title = Component.title;

  return (
    <TopLevelErrorBoundary>
      <Provider>
        <ThemeProvider>
          <GlobalStyle />
          <LocaleProvider>{getLayout(<Component {...pageProps} />, title)}</LocaleProvider>
        </ThemeProvider>
      </Provider>
    </TopLevelErrorBoundary>
  );
}
export default App;
