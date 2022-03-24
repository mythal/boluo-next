import React from 'react';
import Fairy from './fairy.svg';
import Sun from './sun.svg';
import Moon from './moon.svg';
import DiceTwentyFacesTwenty from './dice-twenty-faces-twenty.svg';
import Refresh from './refresh.svg';
import Archive from './archive.svg';
import CircleNotch from './circle-notch.svg';
import Close from './close.svg';
import X from './x.svg';
import Pause from './pause.svg';
import Play from './play.svg';
import Settings from './settings.svg';

const iconMap = {
  sun: Sun,
  moon: Moon,
  ['dice-twenty-faces-twenty']: DiceTwentyFacesTwenty,
  fairy: Fairy,
  refresh: Refresh,
  archive: Archive,
  spinner: CircleNotch,
  close: Close,
  x: X,
  pause: Pause,
  play: Play,
  settings: Settings,
};

export const icons: Record<keyof typeof iconMap, React.FC<React.SVGProps<SVGSVGElement>>> = iconMap;
