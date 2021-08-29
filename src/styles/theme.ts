import { blue, gray } from './utility/color';
import * as O from 'optics-ts';

export type Theme = typeof lightTheme;

export const lightTheme = {
  button: {
    colors: {
      bg: gray['800'],
      text: gray['200'],
      bgHover: gray['600'],
      bgActive: gray['500'],
    },
  },
  colors: {
    background: gray['100'],
    text: gray['900'],
    link: blue['800'],
  },
};

export const darkTheme: Theme = {
  button: {
    colors: {
      bg: gray['200'],
      text: gray['800'],
      bgHover: gray['400'],
      bgActive: gray['500'],
    },
  },
  colors: {
    background: gray['900'],
    text: gray['100'],
    link: blue['300'],
  },
};

export const stylePropsOptic = O.optic<{ theme: Theme }>();
export const themeOptic = stylePropsOptic.prop('theme');
export const colors = themeOptic.prop('colors');
export const buttonTheme = themeOptic.prop('button');
export const buttonColors = buttonTheme.prop('colors');
