import React, { useState } from 'react';
import { ColorPicker } from '../components/ColorPicker';

export const Colors: React.VFC = () => {
  const [color, setColor] = useState('#000000');
  return (
    <div>
      <p>
        <a href="">react-colorful</a>
      </p>
      <p>
        <ColorPicker color={color} onChange={setColor} />
      </p>
    </div>
  );
};
