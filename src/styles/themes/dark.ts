import { black, blue, blueGray, gray } from '../utility/color';
import { Theme } from './light';

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
      textDisabled: gray['400'],
    },
  },
  colors: {
    background: blueGray['800'],
    text: gray['100'],
    link: blue['300'],
    shadow: 'rgba(0,0,0,0.37)',
    stroke: blueGray['500'],
    borderFocus: 'rgba(255,255,255,0.37)',
  },
};
