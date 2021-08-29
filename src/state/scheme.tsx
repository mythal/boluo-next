import { atom } from 'jotai';
import {
  applyScheme,
  readSchemeFromStorage,
  Scheme,
  startSchemeSwitching,
  stopSchemeSwitching,
  writeSchemeToStorage,
} from '../styles/scheme';
import { useEffect } from 'react';

const initialTheme = readSchemeFromStorage();

export const useScheme = () => {
  useEffect(() => {
    applyScheme(initialTheme);
    startSchemeSwitching();
    const handle = setTimeout(stopSchemeSwitching, 2000);
    return () => {
      startSchemeSwitching();
      window.clearTimeout(handle);
    };
  }, []);
};

export const schemeAtom = atom<Scheme, Scheme>(initialTheme, (get, set, update) => {
  startSchemeSwitching();
  set(schemeAtom, update);
  setTimeout(() => {
    applyScheme(update);
    writeSchemeToStorage(update);
    setTimeout(stopSchemeSwitching, 1000);
  });
});
