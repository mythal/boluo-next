import messages from '../../lang/compiled/zh_CN.json';
import React from 'react';
import { IntlProvider } from 'react-intl';

export const LocaleZhCnProvider: React.FC = ({ children }) => {
  return (
    <IntlProvider locale="zh-CN" messages={messages} defaultLocale="en">
      {children}
    </IntlProvider>
  );
};

export default LocaleZhCnProvider;
