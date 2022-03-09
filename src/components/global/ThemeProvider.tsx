import React from 'react';
import { useInitializeTheme } from '../../hooks/useInitializeTheme';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

export const ThemeProvider: React.FC = ({ children }) => {
  const theme = useInitializeTheme();
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
