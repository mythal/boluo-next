import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

// See also https://github.com/vercel/next.js/tree/canary/examples/with-portals
export const Portal: React.FC = React.memo(({ children }) => {
  const rootRef = useRef<HTMLDivElement | null>();
  useEffect(() => {
    rootRef.current = (document.getElementById('portal') as HTMLDivElement) ?? null;
  }, []);
  return rootRef.current ? ReactDOM.createPortal(children, rootRef.current) : null;
});
Portal.displayName = 'Portal';
