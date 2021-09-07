import { alpha, blue, gray, warmGray } from '../utility/color';
import * as O from 'optics-ts';
import { darken, lighten } from 'color2k';

export type Theme = typeof lightTheme;

const primary = warmGray['500'];

export const lightTheme = {
  oops: {
    colors: {
      shadow: gray['300'],
    },
  },
  button: {
    colors: {
      bg: gray['200'],
      text: gray['900'],
      border: gray['700'],
      bgHover: gray['300'],
      bgActive: gray['400'],
      shadow: gray['200'],
      bgOn: lighten(primary, 0.3333),
      textDisabled: gray['500'],
      get borderOn() {
        return darken(this.bgOn, 0.15);
      },
    },
  },
  colors: {
    background: gray['100'],
    text: gray['900'],
    link: blue['800'],
    shadow: alpha(gray['400'], 40),
    stroke: gray['500'],
    borderFocus: 'rgba(0,0,0,0.3)',
  },
};

export const stylePropsOptic = O.optic<{ theme: Theme }>();
export const themeOptic = stylePropsOptic.prop('theme');
export const colors = themeOptic.prop('colors');
export const buttonTheme = themeOptic.prop('button');
export const buttonColors = buttonTheme.prop('colors');
export const oopsColors = themeOptic.prop('oops').prop('colors');
