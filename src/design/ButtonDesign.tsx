import { FC } from 'react';
import { Button } from '../components/fundamental/Button';
import Icon from '../components/fundamental/Icon';
import { SpinnerIcon } from '../components/SpinnerIcon';

export const ButtonDesign: FC = () => {
  return (
    <div>
      <div className="flex gap-2 my-2">
        <Button>Button</Button>
        <Button data-icon>
          <Icon icon="fairy" />
        </Button>
        <Button>
          <Icon icon="dice-twenty-faces-twenty" /> With text
        </Button>
        <Button disabled>Disabled</Button>
      </div>
      <div className="flex gap-2 my-2">
        <Button data-small>small</Button>
        <Button data-small>
          <Icon icon="archive" /> small
        </Button>
        <Button data-small>
          <SpinnerIcon /> small
        </Button>
      </div>
      <div className="flex gap-2 my-2">
        <Button data-type="primary">Primary</Button>
      </div>
    </div>
  );
};
