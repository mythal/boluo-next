import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { interfaceActions, interfaceReducer } from './interface';

const actionMap = {
  ...interfaceActions,
};

type ActionMap = typeof actionMap;

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
  // FIXME: remove ts-ignore.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return {
    type,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    payload: actionMap[type](...args),
  };
}

export function dispatchAction<K extends keyof ActionMap, Args extends Parameters<ActionMap[K]>>(
  type: K,
  ...args: Args
) {
  store.dispatch(makeAction(type, ...args));
}

export type Actions = Action<keyof ActionMap>;

export const applicationReducer = combineReducers({
  interface: interfaceReducer,
});

export type AppState = ReturnType<typeof applicationReducer>;

export const store = createStore(applicationReducer, undefined, composeWithDevTools(applyMiddleware(thunk)));
export type AppDispatch = ThunkDispatch<AppState, unknown, Actions>;

export const useAppDispatch = (): AppDispatch => {
  return useReduxDispatch<AppDispatch>();
};

export function useAppSelector<T>(mapper: (state: AppState) => T, equalityFn?: (a: T, b: T) => boolean): T {
  return useReduxSelector<AppState, T>(mapper, equalityFn);
}
