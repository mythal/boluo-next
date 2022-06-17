import { display } from '../styles/utility/layout';
import { gap } from '../styles/utility/grid';
import { m } from '../styles/utility/spacing';
import { TextArea, TextInput } from '../components/fundamental/TextInput';
import { Select, SelectItem } from '../components/fundamental/Select';
import { useState } from 'react';
import { w } from '../styles/utility/sizing';
import { flex } from '../styles/utility/flex';

export const FormDesign = () => {
  const line = [display.flex, gap(2), m.y(2)];
  const selectItems = [
    { label: 'Hello, world', value: 'en' },
    { label: '你好，世界', value: 'zh' },
    { label: 'こんにちは、世界', value: 'ja' },
  ];
  const [selected, setSelected] = useState<SelectItem['value']>('ja');

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
      <div css={m.t(2)}>
        <div css={[w(64), display.flex, flex.col, gap(2)]}>
          <Select items={selectItems} value={selected} onChange={setSelected} />
          <Select items={selectItems} value={selected} onChange={setSelected} />
          <Select items={selectItems} value={selected} onChange={setSelected} disabled />
        </div>
      </div>
    </div>
  );
};
