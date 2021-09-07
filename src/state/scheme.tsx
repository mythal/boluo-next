import { atom, useAtom } from 'jotai';
import {
  readSchemeFromStorage,
  Scheme,
  startSchemeSwitching,
  stopSchemeSwitching,
  writeSchemeToStorage,
} from '../helper/scheme';
import { lightTheme } from '../styles/themes/light';
import { darkTheme } from '../styles/themes/dark';
import { useEffect, useState } from 'react';
import { isDaytime } from '../helper/time';

export const useTheme = () => {
  const [scheme, updateScheme] = useAtom(schemeAtom);
  const [theme, setTheme] = useState(lightTheme);

  // Fetch scheme setting from user local storage
  useEffect(() => {
    updateScheme(readSchemeFromStorage());
  }, [updateScheme]);

  // Set theme
  useEffect(() => {
    if (scheme === 'dark') {
      setTheme(darkTheme);
    } else if (scheme === 'light') {
      setTheme(lightTheme);
    } else if (scheme === 'auto') {
      if (!window.matchMedia) {
        // When unsupported
        setTheme(isDaytime() ? lightTheme : darkTheme);
        return;
      }
      // Detect prefers-color-scheme change https://stackoverflow.com/a/59621903/1137004
      const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
      const autoChangeScheme = (mediaQueryList: { matches: boolean }) => {
        if (mediaQueryList.matches) {
          setTheme(darkTheme);
        } else {
          setTheme(lightTheme);
        }
      };
      autoChangeScheme(colorSchemeQueryList);
      colorSchemeQueryList.addEventListener('change', autoChangeScheme);
      return () => colorSchemeQueryList.removeEventListener('change', autoChangeScheme);
    }
  }, [scheme, updateScheme]);

  useEffect(() => {
    // Color transition on switching
    startSchemeSwitching();
    const handle = setTimeout(stopSchemeSwitching, 2000);
    return () => window.clearTimeout(handle);
  }, [theme]);

  return theme;
};

export const schemeAtom = atom<Scheme, Scheme>('light', (_get, set, scheme) => {
  writeSchemeToStorage(scheme);
  set(schemeAtom, scheme);
});
