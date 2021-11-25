import React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider, Global, ThemeProvider } from '@emotion/react';
import { globalStyle } from '../../styles/global';
import { useInitTheme } from '../../state/scheme';

// to fix https://github.com/emotion-js/emotion/issues/1061
const cache = createCache({
  key: 'style',
});

export const StyleProvider: React.FC = ({ children }) => {
  const theme = useInitTheme();
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};
