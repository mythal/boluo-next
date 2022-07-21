/// <reference types="@emotion/react/types/css-prop" />

// SVGR with Typescript
// https://github.com/gregberge/svgr/issues/38
declare module '*.svg' {
  import type React from 'react';

  const content: React.FC<React.SVGProps<SVGSVGElement>>;

  export default content;
}
