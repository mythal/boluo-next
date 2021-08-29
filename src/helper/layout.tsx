// Typescript with Layout
// https://nextjs.org/docs/basic-features/layouts#with-typescript
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { AppProps } from 'next/app';

export type Page = NextPage & {
  getLayout?: (page: ReactElement, title?: string) => ReactNode;
  title?: string;
};
export type AppPropsWithLayout = AppProps & {
  Component: Page;
};
