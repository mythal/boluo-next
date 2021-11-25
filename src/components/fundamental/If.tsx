import type { ReactElement } from 'react';

interface Props {
  when: boolean;
  children: ReactElement;
}

export const If = ({ when, children }: Props) => {
  return when ? children : null;
};
