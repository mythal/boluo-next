import { display } from '../styles/utility/layout';
import { gap } from '../styles/utility/grid';
import { m } from '../styles/utility/spacing';
import { TextArea, TextInput } from '../components/fundamental/TextInput';

export const FormDesign = () => {
  const line = [display.flex, gap(2), m.y(2)];

  return (
    <div>
      <div css={line}>
        <TextInput placeholder="Default" />
        <TextInput placeholder="Error" data-state="error" />
        <TextInput placeholder="Warning" data-state="warning" />
      </div>
      <div css={line}>
        <TextInput disabled placeholder="Default" />
        <TextInput disabled placeholder="Error" data-state="error" />
        <TextInput disabled placeholder="Warning" data-state="warning" />
      </div>
      <div>
        <TextArea />
      </div>
    </div>
  );
};
