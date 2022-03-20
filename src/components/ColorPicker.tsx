import { HexColorInput, HexColorPicker } from 'react-colorful';
import React from 'react';

interface Props {
  color: string;
  onChange: (newColor: string) => void;
}

export const ColorPicker: React.VFC<Props> = ({ color, onChange }) => (
  <>
    <HexColorPicker color={color} onChange={onChange} />
    <HexColorInput color={color} onChange={onChange} />
  </>
);
