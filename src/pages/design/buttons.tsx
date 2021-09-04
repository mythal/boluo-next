import { space } from '../../styles/utility/spacing';
import { Page } from '../../helper/layout';
import { getLayout } from '../../components/DesignLayout';
import { Button } from '../../components/Button';
import { display } from '../../styles/utility/layout';
import { gap } from '../../styles/utility/grid';
import Icon from '../../components/Icon';

const Buttons: Page = () => {
  return (
    <div css={[space.y(4)]}>
      <div css={[space.x(2), space.y(1)]}>
        <Button>Button</Button>
        <Button data-on>ON State</Button>
        <Button data-icon>
          <Icon icon="fairy" />
        </Button>
        <Button data-icon>
          <Icon icon="dice-twenty-faces-twenty" /> With text
        </Button>
        <Button disabled>Disabled</Button>
      </div>
      <div css={[display.flex, gap(2)]}>
        <Button data-small>small</Button>
        <Button data-small>
          <Icon icon="archive" /> small
        </Button>
      </div>
      <div css={[display.flex, gap(2)]}>
        <Button data-light>Light</Button>
      </div>
    </div>
  );
};

Buttons.getLayout = getLayout;
Buttons.title = 'Button';

export default Buttons;
