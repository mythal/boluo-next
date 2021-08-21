import messages from '../../lang/compiled/ja_JP.json';
import React from 'react';
import { IntlProvider } from 'react-intl';

export const LocaleJaProvider: React.FC = ({ children }) => {
  return (
    <IntlProvider locale="zh-CN" messages={messages} defaultLocale="en">
      {children}
    </IntlProvider>
  );
};

export default LocaleJaProvider;
