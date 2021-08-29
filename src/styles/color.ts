import { blue, gray } from './utility/color';

export const lightTheme = {
  background: gray['100'],
  text: gray['900'],
  link: blue['800'],
};

export const darkTheme: typeof lightTheme = {
  // ...lightTheme,
  background: gray['900'],
  text: gray['100'],
  link: blue['300'],
};
