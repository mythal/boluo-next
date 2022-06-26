import React from 'react';
import { useInitializeTheme } from '../../hooks/useInitializeTheme';
import { ChildrenProps } from '../../helper/props';

export const SchemeProvider: React.FC<ChildrenProps> = ({ children }) => {
  useInitializeTheme();
  return <React.Fragment>{children}</React.Fragment>;
};
