import { Toast } from '../components/fundamental/Toast';
import { useState } from 'react';
import { empty } from '../helper/function';
import { Button } from '../components/fundamental/Button';
import { notify } from '../state/interface';

export const NotificationDesign = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <h2>Static toasts</h2>
      <div className="flex gap-4 my-4 items-start">
        <Toast>Hello, world</Toast>
        {open && <Toast onClose={() => setOpen(false)}>I can be closed</Toast>}
        <Toast onClose={() => console.log('on close')} timeout={10000}>
          UwU
        </Toast>
      </div>
      <div className="flex gap-4 my-4 items-start">
        <Toast level="default">Default</Toast>
        <Toast level="error" onClose={empty}>
          Error
        </Toast>
        <Toast level="warn" onClose={empty}>
          Warning
        </Toast>
      </div>

      <h2>Notifications</h2>
      <div className="flex gap-4 my-4 items-start">
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
