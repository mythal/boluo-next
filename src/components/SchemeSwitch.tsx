import { useAtom } from 'jotai';
import { schemeAtom } from '../state/scheme';
import { useCallback } from 'react';

export const SchemeSwitch = () => {
  const [scheme, setScheme] = useAtom(schemeAtom);
  const switchToDark = useCallback(() => setScheme('dark'), [setScheme]);
  const switchToLight = useCallback(() => setScheme('light'), [setScheme]);

  return (
    <div>
      <button onClick={switchToLight}>Light</button>
      <button onClick={switchToDark}>Dark</button>
    </div>
  );
};
