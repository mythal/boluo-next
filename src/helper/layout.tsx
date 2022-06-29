// Typescript with Layout
// https://nextjs.org/docs/basic-features/layouts#with-typescript
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { AppProps } from 'next/app';
import { SwrFallbackProps } from './SwrProps';
export type Page = NextPage<SwrFallbackProps> & {
  getLayout?: (page: ReactElement, title?: string) => ReactNode;
  title?: string;
};
export type AppPropsWithLayout = AppProps & {
  Component: Page;
};
