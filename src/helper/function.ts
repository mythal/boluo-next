export const not = (x: unknown): boolean => !x;

// identity
export type I<T> = (x: T) => T;
export const i = <T>(x: T): T => x;

export const empty = () => {
  // empty function
};
