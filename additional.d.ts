/// <reference types="@emotion/react/types/css-prop" />

// SVGR with Typescript
// https://github.com/gregberge/svgr/issues/38
declare module '*.svg' {
  import React from 'react';
  const content: React.FC<React.SVGProps<SVGSVGElement>>;

  export default content;
}

import '@emotion/react';
import { Theme as MyTheme } from './src/styles/theme';

declare module '@emotion/react' {
  export interface Theme extends MyTheme {}
}
