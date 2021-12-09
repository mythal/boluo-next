import { Page } from '../../helper/layout';
import { getLayout } from '../../components/DesignLayout';
import { Button } from '../../components/fundamental/Button';
import Icon from '../../components/fundamental/Icon';
import { gap } from '../../styles/utility/grid';
import { display } from '../../styles/utility/layout';
import { m } from '../../styles/utility/spacing';
import { SpinnerIcon } from '../../components/SpinnerIcon';

const Buttons: Page = () => {
  const line = [display.flex, gap(2), m.y(2)];

  return (
    <div>
      <div css={line}>
        <Button>Button</Button>
        <Button data-icon>
          <Icon icon="fairy" />
        </Button>
        <Button>
          <Icon icon="dice-twenty-faces-twenty" /> With text
        </Button>
        <Button disabled>Disabled</Button>
      </div>
      <div css={line}>
        <Button data-small>small</Button>
        <Button data-small>
          <Icon icon="archive" /> small
        </Button>
        <Button data-small>
          <SpinnerIcon /> small
        </Button>
      </div>
      <div css={line}>
        <Button data-type="primary">Primary</Button>
      </div>
    </div>
  );
};

Buttons.getLayout = getLayout;
Buttons.title = 'Button';

export default Buttons;
