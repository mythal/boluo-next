import { css } from '@emotion/react';
import { unit } from './sizing';

// Margin https://tailwindcss.com/docs/margin
export const m = (x: number) => css`
  margin-left: ${unit(x)};
  margin-top: ${unit(x)};
  margin-right: ${unit(x)};
  margin-bottom: ${unit(x)};
`;
m.px = css`
  margin: 1px;
`;
m.auto = css`
  margin: auto;
`;
const mX = (n: number) => css`
  margin-left: ${unit(n)};
  margin-right: ${unit(n)};
`;
mX.auto = css`
  margin-left: auto;
  margin-right: auto;
`;
mX.px = css`
  margin-left: 1px;
  margin-right: 1px;
`;
m.x = mX;
const mY = (n: number) => css`
  margin-top: ${unit(n)};
  margin-bottom: ${unit(n)};
`;
mY.auto = css`
  margin-top: auto;
  margin-bottom: auto;
`;
mY.px = css`
  margin-top: 1px;
  margin-bottom: 1px;
`;
m.y = mY;

const mL = (n: number) => css`
  margin-left: ${unit(n)};
`;
mL.auto = css`
  margin-left: auto;
`;
mL.px = css`
  margin-left: 1px;
`;
m.l = mL;

const mT = (n: number) => css`
  margin-top: ${unit(n)};
`;
mT.auto = css`
  margin-top: auto;
`;
mT.px = css`
  margin-top: 1px;
`;
m.t = mT;

const mR = (n: number) => css`
  margin-right: ${unit(n)};
`;
mR.auto = css`
  margin-right: auto;
`;
mR.px = css`
  margin-right: 1px;
`;
m.r = mR;

const mB = (n: number) => css`
  margin-bottom: ${unit(n)};
`;
mB.auto = css`
  margin-bottom: auto;
`;
mB.px = css`
  margin-bottom: 1px;
`;
m.b = mB;

// Padding https://tailwindcss.com/docs/padding
export const p = (x: number) => css`
  padding: ${unit(x)};
`;
p.px = css`
  padding: 1px;
`;
const pX = (n: number) => css`
  padding-left: ${unit(n)};
  padding-right: ${unit(n)};
`;
p.x = pX;
const pY = (n: number) => css`
  padding-top: ${unit(n)};
  padding-bottom: ${unit(n)};
`;
p.y = pY;
const pL = (n: number) => css`
  padding-left: ${unit(n)};
`;
p.l = pL;

const pT = (n: number) => css`
  padding-top: ${unit(n)};
`;
p.t = pT;

const pR = (n: number) => css`
  padding-right: ${unit(n)};
`;
p.r = pR;

const pB = (n: number) => css`
  padding-bottom: ${unit(n)};
`;
p.b = pB;

const spaceX = (x: number) => css`
  & > * + * {
    margin-left: ${unit(x)};
  }
`;
spaceX.rev = (n: number) => css`
  & > * + * {
    margin-right: ${unit(n)};
  }
`;

const spaceY = (value: number) => css`
  & > * + * {
    margin-top: ${unit(value)};
  }
`;
spaceY.rev = (value: number) => css`
  & > * + * {
    margin-bottom: ${unit(value)};
  }
`;

/*
 * Space Between
 * https://tailwindcss.com/docs/space
 */
export const space = {
  x: spaceX,
  y: spaceY,
};
