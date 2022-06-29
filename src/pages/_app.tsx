import { AppPropsWithLayout } from '../helper/layout';
import { usePreventScroll } from '@react-aria/overlays';
import '../styles/globals.tailwind.css';

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
  return getLayout(<Component {...pageProps} />, title);
}
export default App;
