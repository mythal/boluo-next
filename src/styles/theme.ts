import { alpha, black, blue, blueGray, gray, green } from './utility/color';
import * as O from 'optics-ts';
import { darken } from 'color2k';

export type Theme = typeof lightTheme;

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
      bgOn: gray['300'],
      textDisabled: gray['500'],
      get borderOn() {
        return darken(this.bgOn, 0.15);
      },
      textOn: green['600'],
    },
  },
  colors: {
    background: gray['100'],
    text: gray['900'],
    link: blue['800'],
    shadow: alpha(gray['400'], 40),
    stroke: gray['500'],
    borderFocus: gray['400'],
  },
};

export const darkTheme: Theme = {
  oops: {
    colors: {
      shadow: black,
    },
  },
  button: {
    colors: {
      bg: gray['600'],
      border: gray['900'],
      text: gray['100'],
      bgHover: gray['500'],
      bgActive: gray['800'],
      shadow: black,
      bgOn: blueGray['500'],
      borderOn: blueGray['400'],
      textOn: green['200'],
      textDisabled: gray['400'],
    },
  },
  colors: {
    background: blueGray['800'],
    text: gray['100'],
    link: blue['300'],
    shadow: black,
    stroke: blueGray['500'],
    borderFocus: blueGray['300'],
  },
};

export const stylePropsOptic = O.optic<{ theme: Theme }>();
export const themeOptic = stylePropsOptic.prop('theme');
export const colors = themeOptic.prop('colors');
export const buttonTheme = themeOptic.prop('button');
export const buttonColors = buttonTheme.prop('colors');
export const oopsColors = themeOptic.prop('oops').prop('colors');
