import { SerializedStyles } from '@emotion/utils';
import { darken, lighten } from 'color2k';
import { blue, gray, green, red, yellow } from './utility/color';

interface ButtonTheme {
  text: string;
  bg: string;
  bgHover: string;
  bgActive: string;
}

interface InputTheme {
  bg: string;
  border: string;
  borderHover: string;
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
  select: string;
  tooltip: {
    bg: string;
  };
  toast: {
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
      border: gray['300'],
      borderHover: gray['400'],
    },
    error: {
      bg: red['100'],
      border: red['500'],
      borderHover: red['400'],
    },
    warning: {
      bg: yellow['100'],
      border: yellow['500'],
      borderHover: yellow['300'],
    },
  };
  return {
    mode: 'light',
    primary,
    link,
    button,
    text: '#9b0000',
    background: '#fff',
    focusRing: 'rgba(173,173,173,0.25)',
    on: '#000',
    off: '#FFF',
    select: button.default.bg,
    tooltip: {
      bg: '#faf9cc',
    },
    toast: {
      default: '#383838',
      warning: '#9a9a00',
      error: '#ad0000',
    },
    dialog: {
      bg: gray['50'],
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
      border: gray['600'],
      borderHover: gray['400'],
    },
    error: {
      bg: red['900'],
      border: red['700'],
      borderHover: red['600'],
    },
    warning: {
      bg: yellow['900'],
      border: yellow['700'],
      borderHover: yellow['600'],
    },
  };
  return {
    mode: 'dark',
    primary,
    link,
    button,
    text,
    background: 'rgba(46, 59, 79, 1)',
    focusRing: 'rgba(122,122,122,0.89)',
    on: '#FFF',
    off: '#000000',
    select: button.default.bg,
    tooltip: {
      bg: '#F5F4BC',
    },
    toast: {
      default: '#000',
      warning: '#838305',
      error: '#960808',
    },
    dialog: {
      bg: gray['800'],
    },
    input,
  };
})();

export type ThemedStyles = (theme: Theme) => SerializedStyles;

export const defaultTheme = lightTheme;
