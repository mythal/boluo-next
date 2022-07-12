import { useCallback } from 'react';
import { useSWRConfig } from 'swr';
import { get } from '../api';

export function useLogout(): () => void {
  const { mutate } = useSWRConfig();
  return useCallback(async () => {
    await get('/users/logout');
    mutate('/users/get_me', null);
  }, [mutate]);
}
