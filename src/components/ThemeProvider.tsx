import React from 'react';
import { useTheme } from '../state/scheme';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

export const ThemeProvider: React.FC = ({ children }) => {
  const theme = useTheme();
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
