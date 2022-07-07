import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { userInterfaceReducer } from './user-interface';
import { parseBool } from '../helper/env';
import { ActionMap, Actions, makeAction } from './actions';

export function perform<K extends keyof ActionMap, Args extends Parameters<ActionMap[K]>>(type: K, ...args: Args) {
  store.dispatch(makeAction(type, ...args));
}

export type GenericHandle<M extends ActionMap, K extends keyof ActionMap, S> = (
  payload: ReturnType<M[K]>
) => (state: S) => S; // currying

export const applicationReducer = combineReducers({
  interface: userInterfaceReducer,
});

export type AppState = ReturnType<typeof applicationReducer>;
const enableReduxTrace = parseBool(process.env.NEXT_PUBLIC_REDUX_TRACE);
const composeEnhancers = composeWithDevTools({
  trace: process.env.NODE_ENV === 'development' && enableReduxTrace,
  traceLimit: 25,
});
export const store = createStore(applicationReducer, undefined, composeEnhancers(applyMiddleware(thunk)));
export type AppDispatch = ThunkDispatch<AppState, unknown, Actions>;

export const useAppDispatch = (): AppDispatch => {
  return useReduxDispatch<AppDispatch>();
};

export function useAppSelector<T>(mapper: (state: AppState) => T, equalityFn?: (a: T, b: T) => boolean): T {
  return useReduxSelector<AppState, T>(mapper, equalityFn);
}
