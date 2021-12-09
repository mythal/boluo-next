import Fairy from './fairy.svg';
import Sun from './sun.svg';
import Moon from './moon.svg';
import DiceTwentyFacesTwenty from './dice-twenty-faces-twenty.svg';
import Refresh from './refresh.svg';
import Archive from './archive.svg';
import CircleNotch from './circle-notch.svg';
import Close from './close.svg';
import React from 'react';

const iconMap = {
  sun: Sun,
  moon: Moon,
  ['dice-twenty-faces-twenty']: DiceTwentyFacesTwenty,
  fairy: Fairy,
  refresh: Refresh,
  archive: Archive,
  spinner: CircleNotch,
  close: Close,
};

export const icons: Record<keyof typeof iconMap, React.FC<React.SVGProps<SVGSVGElement>>> = iconMap;
