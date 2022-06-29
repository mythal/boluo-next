import type { FC } from 'react';
import type { ChildrenProps } from '../../helper/props';

import { store } from '../../state/store';
import { useMemo } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ErrorBoundary } from '../ErrorBoundary';
import { NextLocaleProvider } from './NextLocaleProvider';
import { SchemeProvider } from './SchemeProvider';
import { SWRConfig } from 'swr';
import type { SwrFallbackProps } from '../../helper/SwrProps';

interface Props extends ChildrenProps, SwrFallbackProps {}

export const Providers: FC<Props> = ({ children, swrFallback = {} }) => {
  const swrConfig = useMemo(
    () => ({
      fallback: swrFallback,
    }),
    [swrFallback]
  );
  return (
    <ReduxProvider store={store}>
      <SWRConfig value={swrConfig}>
        <SchemeProvider>
          <ErrorBoundary>
            <NextLocaleProvider>{children}</NextLocaleProvider>
          </ErrorBoundary>
        </SchemeProvider>
      </SWRConfig>
    </ReduxProvider>
  );
};
