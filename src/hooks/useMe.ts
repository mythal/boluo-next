import useSWR from 'swr';
import { get } from '../api';
import { GetMe } from '../api/types/users';

export const useMe = (): GetMe | null => {
  const key = '/users/get_me' as const;
  const { data } = useSWR(key, get, { fallbackData: null });
  return data ?? null;
};
