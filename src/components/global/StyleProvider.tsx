import React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider, Global, ThemeProvider } from '@emotion/react';
import { globalStyle } from '../../styles/global';
import { useInitializeTheme } from '../../hooks/useInitializeTheme';
import { ChildrenProps } from '../../helper/props';

// to fix https://github.com/emotion-js/emotion/issues/1061
const cache = createCache({
  key: 'style',
});

export const StyleProvider: React.FC<ChildrenProps> = ({ children }) => {
  const theme = useInitializeTheme();
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};
