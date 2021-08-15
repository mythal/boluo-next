/// <reference types="@emotion/react/types/css-prop" />

// SVGR with Typescript
// https://github.com/gregberge/svgr/issues/38
declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  export { ReactComponent };
  export default ReactComponent;
}
