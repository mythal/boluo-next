import { display } from '../styles/utility/layout';
import { gap } from '../styles/utility/grid';
import { m } from '../styles/utility/spacing';
import { Toast } from '../components/fundamental/Toast';
import { useState } from 'react';
import { itemsStart } from '../styles/utility/box-alignment';
import { empty } from '../helper/function';
import { Button } from '../components/fundamental/Button';
import { notify } from '../state/interface';

export const NotificationDesign = () => {
  const line = [display.flex, gap(2), m.y(2), itemsStart];
  const [open, setOpen] = useState(true);

  return (
    <div>
      <h2>Static toasts</h2>
      <div css={line}>
        <Toast>Hello, world</Toast>
        {open && <Toast onClose={() => setOpen(false)}>I can be closed</Toast>}
        <Toast onClose={() => console.log('on close')} timeout={10000}>
          UwU
        </Toast>
      </div>
      <div css={line}>
        <Toast level="default">Default</Toast>
        <Toast level="error" onClose={empty}>
          Error
        </Toast>
        <Toast level="warn" onClose={empty}>
          Warning
        </Toast>
      </div>

      <h2>Notifications</h2>
      <div css={line}>
        <Button
          onClick={() => {
            notify(`hello, world ${new Date()}`);
          }}
        >
          Show
        </Button>

        <Button
          onClick={() => {
            notify(`warning!! ${new Date()}`, 'warn');
          }}
        >
          Show warning
        </Button>

        <Button
          onClick={() => {
            notify(`error!!! ${new Date()}`, 'error');
          }}
        >
          Show error
        </Button>
      </div>
    </div>
  );
};
