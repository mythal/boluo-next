import { IS_DEBUG } from '../const';
import { ApiError, AppErrorBox } from './errors';

export const makeUri = (path: string, query?: object): string => {
  if (path[0] !== '/') {
    path = '/api/' + path;
  } else {
    path = '/api' + path;
  }
  if (path.at(-1) !== '/') {
    path = path + '/';
  }
  if (query === undefined) {
    return path;
  }
  const entities = Object.entries(query);
  if (entities.length === 0) {
    return path;
  }
  const searchParams = new URLSearchParams();
  for (const entry of entities) {
    const [key, value] = entry;
    if (typeof value === 'boolean' || typeof value === 'number' || typeof value === 'string') {
      searchParams.set(key, String(value));
    }
  }
  return `${path}?${searchParams}`;
};

interface AppResponse {
  isOk: boolean;
  ok: unknown;
  err: ApiError;
}

export const request = async <T>(
  path: string,
  method: string,
  body: Exclude<RequestInit['body'], undefined>,
  contentType = 'application/json'
): Promise<T> => {
  const headers = new Headers({
    'Content-Type': contentType,
  });
  if (IS_DEBUG) {
    headers.append('development', '');
  }
  const result = await fetch(path, {
    method,
    headers,
    body,
    credentials: 'include',
  });
  let res: Response;
  try {
    res = await result;
  } catch (cause) {
    throw new AppErrorBox({ code: 'FETCH_FAIL', cause });
  }
  let data: AppResponse;
  try {
    data = await res.json();
  } catch (cause) {
    console.error('Failed to parse JSON: ', cause);
    throw new AppErrorBox({ code: 'NOT_JSON', cause });
  }
  if (data.isOk) {
    return data.ok as T;
  } else {
    throw new AppErrorBox(data.err);
  }
};
