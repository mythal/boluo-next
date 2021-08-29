import { atom } from 'jotai';
import {
  applyScheme,
  readSchemeFromStorage,
  Scheme,
  startSchemeSwitching,
  stopSchemeSwitching,
  writeSchemeToStorage,
} from '../styles/scheme';
import { useEffect, useRef } from 'react';
import { useUpdateAtom } from 'jotai/utils';

export const useScheme = () => {
  const initialTheme = useRef(readSchemeFromStorage());
  const updateScheme = useUpdateAtom(schemeAtom);
  useEffect(() => {
    updateScheme(initialTheme.current);
    applyScheme(initialTheme.current);
    startSchemeSwitching();
    const handle = setTimeout(stopSchemeSwitching, 2000);
    return () => {
      startSchemeSwitching();
      window.clearTimeout(handle);
    };
  }, [updateScheme]);
};

export const schemeAtom = atom<Scheme, Scheme>('light', (get, set, update) => {
  startSchemeSwitching();
  set(schemeAtom, update);
  setTimeout(() => {
    applyScheme(update);
    writeSchemeToStorage(update);
    setTimeout(stopSchemeSwitching, 1000);
  });
});
