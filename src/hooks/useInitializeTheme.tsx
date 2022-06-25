import { darkTheme, defaultTheme, lightTheme, Theme } from '../styles/theme';
import { useCallback, useEffect, useRef, useState } from 'react';
import { startSchemeSwitching, stopSchemeSwitching } from '../helper/scheme';
import { isDaytime } from '../helper/time';
import { useAppSelector } from '../state/store';
import { switchScheme } from '../state/interface';

export const useInitializeTheme = (): Theme => {
  const scheme = useAppSelector((state) => state.interface.scheme);
  const [theme, setTheme] = useState(defaultTheme);
  const schemeRef = useRef<typeof scheme>(scheme);

  useEffect(() => {
    schemeRef.current = scheme;
    const storageScheme = localStorage.getItem('SCHEME');
    if (storageScheme && storageScheme !== scheme) {
      switchScheme(storageScheme);
    }
  }, [scheme]);

  useEffect(() => {
    const listenSchemeChange = (e: StorageEvent) => {
      if (e.key === 'SCHEME') {
        if (e.newValue !== schemeRef.current) {
          switchScheme(e.newValue ?? 'auto');
        }
      }
    };
    window.addEventListener('storage', listenSchemeChange);
    return () => window.removeEventListener('storage', listenSchemeChange);
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === 'test') {
      return;
    }
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
      switchDark();
    } else if (scheme === 'light') {
      switchLight();
    } else if (scheme === 'auto') {
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
  }, [scheme, switchDark, switchLight]);

  return theme;
};
