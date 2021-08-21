import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';

export const LocaleEnProvider = dynamic(() => import('./LocaleEnProvider'));
export const LocaleZhCnProvider = dynamic(() => import('./LocaleZhCnProvider'));
export const LocaleJaProvider = dynamic(() => import('./LocaleJaProvider'));

export function useLocaleProvider() {
  const router = useRouter();
  const locale = router.locale ?? router.defaultLocale ?? 'en';
  if (locale.startsWith('zh')) {
    return LocaleZhCnProvider;
  } else if (locale.startsWith('ja')) {
    return LocaleJaProvider;
  } else {
    return LocaleEnProvider;
  }
}
