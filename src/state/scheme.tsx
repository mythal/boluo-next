import { atom, useAtom } from 'jotai';
import {
  readSchemeFromStorage,
  Scheme,
  startSchemeSwitching,
  stopSchemeSwitching,
  writeSchemeToStorage,
} from '../helper/scheme';
import { defaultTheme, lightTheme, darkTheme, Theme } from '../styles/theme';
import { useCallback, useEffect, useState } from 'react';
import { isDaytime } from '../helper/time';

export const useInitTheme = (): Theme => {
  const [scheme, updateScheme] = useAtom(schemeAtom);
  const [theme, setTheme] = useState(defaultTheme);

  // Fetch scheme setting from user local storage
  useEffect(() => {
    updateScheme(readSchemeFromStorage());
  }, [updateScheme]);

  useEffect(() => {
    const colorSchemeMeta = document.documentElement.querySelector<HTMLMetaElement>('meta[name="color-scheme"]');
    if (!colorSchemeMeta) {
      console.warn('The <meta name="color-scheme"/> tag cannot be found ');
      return;
    }
    if (scheme === 'dark' || scheme === 'light') {
      colorSchemeMeta.content = scheme;
    } else {
      colorSchemeMeta.content = 'light dark';
    }
  }, [scheme]);

  const switchDark = useCallback(() => {
    setTheme(darkTheme);
  }, []);
  const switchLight = useCallback(() => {
    setTheme(lightTheme);
  }, []);

  // Set theme
  useEffect(() => {
    // Color transition on switching
    startSchemeSwitching();
    const schemeSwitchHandle = setTimeout(stopSchemeSwitching, 1000);
    if (scheme === 'dark') {
      console.log('switch to dark theme');
      switchDark();
    } else if (scheme === 'light') {
      console.log('switch to light theme');
      switchLight();
    } else if (scheme === 'auto') {
      console.log('auto switch theme');
      if (!window.matchMedia) {
        // When the `matchMedia` is unsupported
        isDaytime() ? switchLight() : switchDark();
        return;
      }
      // Detect prefers-color-scheme change https://stackoverflow.com/a/59621903/1137004
      const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
      const autoChangeScheme = (mediaQueryList: { matches: boolean }) => {
        if (mediaQueryList.matches) {
          switchDark();
        } else {
          switchLight();
        }
      };
      autoChangeScheme(colorSchemeQueryList);
      colorSchemeQueryList.addEventListener('change', autoChangeScheme);
      return () => {
        colorSchemeQueryList.removeEventListener('change', autoChangeScheme);
        window.clearTimeout(schemeSwitchHandle);
      };
    }
    return () => window.clearTimeout(schemeSwitchHandle);
  }, [scheme, switchDark, switchLight, updateScheme]);

  return theme;
};

export const schemeAtom = atom<Scheme, Scheme>('auto', (_get, set, scheme) => {
  writeSchemeToStorage(scheme);
  set(schemeAtom, scheme);
});
