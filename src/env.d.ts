/// <reference types="@emotion/react/types/css-prop" />

// SVGR with Typescript
// https://github.com/gregberge/svgr/issues/38
declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  export { ReactComponent };
  export default ReactComponent;
}

import '@emotion/react';
import { Theme as MyTheme } from './styles/themes/light';

declare module '@emotion/react' {
  export interface Theme extends MyTheme {}
}
