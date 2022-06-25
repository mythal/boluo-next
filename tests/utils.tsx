import { render as jestRender, RenderOptions } from '@testing-library/react';
import { FC, ReactElement } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { StyleProvider } from '../src/components/global/StyleProvider';
import { IntlProvider } from 'react-intl';
import { store } from '../src/state/store';

// See https://testing-library.com/docs/react-testing-library/setup#custom-render
const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <StyleProvider>
        <IntlProvider locale="en">{children}</IntlProvider>
      </StyleProvider>
    </ReduxProvider>
  );
};
export const render = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  jestRender(ui, { wrapper: AllTheProviders, ...options });
