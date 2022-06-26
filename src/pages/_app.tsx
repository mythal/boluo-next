import { Provider as ReduxProvider } from 'react-redux';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { LocaleProvider } from '../components/global/LocaleProvider';
import { AppPropsWithLayout } from '../helper/layout';
import { store } from '../state/store';
import { NotificationList } from '../components/global/NotificationList';
import { usePreventScroll } from '@react-aria/overlays';
import '../styles/globals.tailwind.css';
import { SchemeProvider } from '../components/global/SchemeProvider';

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register(new URL('../serviceWorker.ts', import.meta.url))
      .then(function (reg) {
        // registration worked
        console.log('Registration succeeded. Scope is ' + reg.scope);
      })
      .catch(function (error) {
        // registration failed
        console.log('Registration failed with ' + error);
      });
  }
}

if (typeof window !== 'undefined') {
  registerServiceWorker();
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const title = Component.title;
  usePreventScroll();

  return (
    <ReduxProvider store={store}>
      <SchemeProvider>
        <ErrorBoundary>
          <LocaleProvider>{getLayout(<Component {...pageProps} />, title)}</LocaleProvider>
          <NotificationList />
        </ErrorBoundary>
      </SchemeProvider>
    </ReduxProvider>
  );
}
export default App;
