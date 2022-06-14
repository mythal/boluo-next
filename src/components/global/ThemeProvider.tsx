import React from 'react';
import { useInitializeTheme } from '../../hooks/useInitializeTheme';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ChildrenProps } from '../../helper/props';

export const ThemeProvider: React.FC<ChildrenProps> = ({ children }) => {
  const theme = useInitializeTheme();
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
