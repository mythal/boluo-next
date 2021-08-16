import { black, blue, white } from './color';

export const lightTheme = {
  bgColor: white,
  textColor: black,
  linkColor: blue['800'],
};

export const darkTheme: typeof lightTheme = {
  ...lightTheme,
  bgColor: black,
  textColor: white,
  linkColor: blue['300'],
};
