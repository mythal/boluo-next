import { SerializedStyles } from '@emotion/utils';
import { darken, lighten } from 'color2k';
import { black, blue, gray, green, red, white, yellow } from './utility/color';

interface ButtonTheme {
  text: string;
  bg: string;
  bgHover: string;
  bgActive: string;
}

interface InputTheme {
  bg: string;
  placeholder: string;
  border: string;
  borderHover: string;
}

interface Select {
  border: string;
  activeBorder: string;
  text: string;
  bg: string;
  disableBg: string;
  disableText: string;
  hoverBg: string;
  activeBg: string;
  listBg: string;
  listBorder: string;
  listHoverBg: string;
}

export interface Theme {
  mode: 'light' | 'dark';
  primary: string;
  link: {
    color: string;
    hover: string;
    active: string;
  };
  button: {
    default: ButtonTheme;
    primary: ButtonTheme;
  };
  text: string;
  background: string;
  focusRing: string;
  on: string;
  off: string;
  select: Select;
  tooltip: {
    bg: string;
  };
  toast: {
    outline: string;
    default: string;
    warning: string;
    error: string;
  };
  input: {
    default: InputTheme;
    error: InputTheme;
    warning: InputTheme;
  };
  dialog: {
    bg: string;
    border: string;
    shadow: string;
  };
}

export const lightTheme = ((): Theme => {
  const primary = green['600'];
  const text = '#000';
  const link: Theme['link'] = {
    color: darken(primary, 0.125),
    hover: primary,
    active: lighten(primary, 0.125),
  };
  const button: Theme['button'] = {
    default: {
      text,
      bg: '#d0d0d0',
      bgHover: '#dedede',
      bgActive: '#AAA',
    },
    primary: {
      text: '#FFF',
      bg: primary,
      bgHover: lighten(primary, 0.0625),
      bgActive: darken(primary, 0.0625),
    },
  };
  const input: Theme['input'] = {
    default: {
      bg: '#FFF',
      placeholder: gray['400'],
      border: gray['300'],
      borderHover: gray['600'],
    },
    error: {
      bg: red['100'],
      border: red['500'],
      borderHover: red['400'],
      placeholder: red['600'],
    },
    warning: {
      bg: yellow['100'],
      border: yellow['500'],
      borderHover: yellow['300'],
      placeholder: yellow['500'],
    },
  };
  const select: Select = {
    border: gray['300'],
    activeBorder: gray['500'],
    text: black,
    bg: white,
    disableBg: gray['100'],
    disableText: gray['500'],
    hoverBg: gray['50'],
    activeBg: gray['200'],
    listBg: gray['50'],
    listBorder: black,
    listHoverBg: gray['100'],
  };
  return {
    mode: 'light',
    primary,
    link,
    button,
    text: '#9b0000',
    background: '#fff',
    focusRing: 'rgb(234,234,234)',
    on: '#000',
    off: '#FFF',
    select,
    tooltip: {
      bg: '#faf9cc',
    },
    toast: {
      outline: 'rgba(0,0,0,0.1)',
      default: gray['700'],
      warning: yellow['600'],
      error: red['700'],
    },
    dialog: {
      bg: gray['50'],
      border: gray['300'],
      shadow: 'rgba(0,0,0,0.03)',
    },
    input,
  };
})();

export const darkTheme: Theme = ((): Theme => {
  const primary = blue['700'];
  const text = '#fff';
  const link: Theme['link'] = {
    color: lighten(primary, 0.3),
    hover: lighten(primary, 0.4),
    active: primary,
  };
  const button: Theme['button'] = {
    default: {
      text,
      bg: '#5d5d5d',
      bgHover: '#707070',
      bgActive: '#333333',
    },
    primary: {
      text,
      bg: darken(primary, 0),
      bgHover: lighten(primary, 0.125),
      bgActive: darken(primary, 0.125),
    },
  };
  const input: Theme['input'] = {
    default: {
      bg: gray['900'],
      placeholder: gray['700'],
      border: gray['600'],
      borderHover: gray['400'],
    },
    error: {
      bg: red['900'],
      placeholder: red['700'],
      border: red['500'],
      borderHover: red['600'],
    },
    warning: {
      bg: yellow['900'],
      placeholder: yellow['700'],
      border: yellow['500'],
      borderHover: yellow['600'],
    },
  };

  const select: Select = {
    border: gray['600'],
    activeBorder: gray['500'],
    text: white,
    bg: gray['900'],
    disableBg: black,
    disableText: gray['500'],
    hoverBg: gray['50'],
    activeBg: black,
    listBg: black,
    listBorder: gray['800'],
    listHoverBg: gray['900'],
  };
  return {
    mode: 'dark',
    primary,
    link,
    button,
    text,
    background: 'rgba(46, 59, 79, 1)',
    focusRing: lighten(primary, 0.2),
    on: '#FFF',
    off: '#000000',
    select,
    tooltip: {
      bg: '#F5F4BC',
    },
    toast: {
      outline: 'rgba(255,255,255,0.1)',
      default: gray['900'],
      warning: yellow['700'],
      error: red['800'],
    },
    dialog: {
      bg: gray['800'],
      border: gray['900'],
      shadow: 'rgba(0, 0, 0, 0.25)',
    },
    input,
  };
})();

export type ThemedStyles = (theme: Theme) => SerializedStyles;

export const defaultTheme = lightTheme;
