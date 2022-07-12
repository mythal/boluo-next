import useSWR from 'swr';
import { get } from '../api';
import type { GetMe } from '../api/types/users';

export const useMe = (): GetMe | null => {
  const { data } = useSWR('/users/get_me', (path) => get(path), { fallbackData: null, suspense: true });
  return data ?? null;
};
