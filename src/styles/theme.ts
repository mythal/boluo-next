import { SerializedStyles } from '@emotion/utils';
import { darken, lighten } from 'color2k';
import { blue, blueGray, green, red, yellow } from './utility/color';

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
  input: {
    default: InputTheme;
    error: InputTheme;
    warning: InputTheme;
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
      bg: lighten(primary, 0.0625),
      bgHover: lighten(primary, 0.125),
      bgActive: lighten(primary, 0),
    },
  };
  const input: Theme['input'] = {
    default: {
      bg: '#FFF',
      border: '#4b4b4b',
      borderHover: '#949494',
    },
    error: {
      bg: red['50'],
      border: red['400'],
      borderHover: red['300'],
    },
    warning: {
      bg: yellow['50'],
      border: yellow['400'],
      borderHover: yellow['300'],
    },
  };
  return {
    mode: 'light',
    primary,
    link,
    button,
    text: '#000',
    background: '#fff',
    focusRing: 'rgba(0,102,255,0.25)',
    on: '#000',
    off: '#FFF',
    select: button.default.bg,
    tooltip: {
      bg: '#faf9cc',
    },
    input,
  };
})();

export const darkTheme: Theme = ((): Theme => {
  const primary = blue['700'];
  const text = '#fff';
  const link: Theme['link'] = {
    color: lighten(primary, 0.275),
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
      bg: '#252525',
      border: '#9f9f9f',
      borderHover: '#DDD',
    },
    error: {
      bg: '#7e0101',
      border: '#c50d0d',
      borderHover: '#FF0000',
    },
    warning: {
      bg: yellow['900'],
      border: yellow['600'],
      borderHover: yellow['500'],
    },
  };
  return {
    mode: 'dark',
    primary,
    link,
    button,
    text,
    background: blueGray[800],
    focusRing: 'rgba(122,122,122,0.89)',
    on: '#FFF',
    off: '#000000',
    select: button.default.bg,
    tooltip: {
      bg: '#F5F4BC',
    },
    input,
  };
})();

export type ThemedStyles = (theme: Theme) => SerializedStyles;

export const defaultTheme = lightTheme;
