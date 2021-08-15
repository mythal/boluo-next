import { Fragment, useEffect, useState } from 'react';

export const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return isClient;
};

export const ClientOnly: React.FC = ({ children }) => {
  if (!useIsClient()) return null;
  return <Fragment>{children}</Fragment>;
};
