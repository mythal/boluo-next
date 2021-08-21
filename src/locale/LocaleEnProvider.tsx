import messages from '../../lang/compiled/en.json';
import React from 'react';
import { IntlProvider } from 'react-intl';

export const LocaleEnProvider: React.FC = ({ children }) => {
  return (
    <IntlProvider locale="en" messages={messages} defaultLocale="en">
      {children}
    </IntlProvider>
  );
};

export default LocaleEnProvider;
