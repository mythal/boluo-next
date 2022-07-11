import { makeUri, request } from './request';
import { GetMe } from './types/users';

export function get(path: '/users/get_me'): Promise<GetMe | null>;

export function get<Q extends object, T>(path: string, query?: Q): Promise<T> {
  return request(makeUri(path, query), 'GET', null);
}
