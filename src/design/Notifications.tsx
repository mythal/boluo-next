import { display } from '../styles/utility/layout';
import { gap } from '../styles/utility/grid';
import { m } from '../styles/utility/spacing';
import { Toast } from '../components/fundamental/Toast';
import { useState } from 'react';
import { itemsStart } from '../styles/utility/box-alignment';
import { empty } from '../helper/function';

export const Notifications = () => {
  const line = [display.flex, gap(2), m.y(2), itemsStart];
  const [open, setOpen] = useState(true);

  return (
    <div>
      <div css={line}>
        <Toast>Hello, world</Toast>
        {open && <Toast onClose={() => setOpen(false)}>I can be closed</Toast>}
        <Toast onClose={() => console.log('on close')} timeout={10000}>
          UwU
        </Toast>
      </div>
      <div css={line}>
        <Toast type="default">Default</Toast>
        <Toast type="error" onClose={empty}>
          Error
        </Toast>
        <Toast type="warning" onClose={empty}>
          Warning
        </Toast>
      </div>
    </div>
  );
};
