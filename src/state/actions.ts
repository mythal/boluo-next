import * as userInterface from './user-interface.actions';

const actionMap = {
  ...userInterface,
};

export type ActionMap = typeof actionMap;

export type Action<K> = K extends keyof ActionMap
  ? {
      type: K;
      payload: ReturnType<ActionMap[K]>;
    }
  : never;

export function makeAction<K extends keyof ActionMap, Args extends Parameters<ActionMap[K]>>(
  type: K,
  ...args: Args
): Action<K> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return {
    type,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    payload: actionMap[type](...args),
  };
}

export type Actions = Action<keyof ActionMap>;
