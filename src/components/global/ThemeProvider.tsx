import React from 'react';
import { useInitTheme } from '../../state/scheme';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

export const ThemeProvider: React.FC = ({ children }) => {
  const theme = useInitTheme();
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
