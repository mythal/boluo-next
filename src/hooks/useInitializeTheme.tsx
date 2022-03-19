import { darkTheme, defaultTheme, lightTheme, Theme } from '../styles/theme';
import { useCallback, useEffect, useState } from 'react';
import { startSchemeSwitching, stopSchemeSwitching } from '../helper/scheme';
import { isDaytime } from '../helper/time';
import { useAppSelector } from '../state/store';

export const useInitializeTheme = (): Theme => {
  const scheme = useAppSelector((state) => state.interface.scheme);
  const [theme, setTheme] = useState(defaultTheme);

  // Fetch scheme setting from user local storage
  // useEffect(() => {
  //   updateScheme(readSchemeFromStorage());
  // }, [dispatch]);

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
