import { Locale, toLocale } from '../helper/locale';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const useLocale = (): [Locale, (locale: Locale) => void] => {
  const router = useRouter();
  const changeLocale = useCallback(
    async (locale: Locale) => {
      const url = router.pathname;
      const as = undefined;
      await router.push(url, as, { locale });
    },
    [router]
  );
  return [toLocale(router.locale), changeLocale];
};
