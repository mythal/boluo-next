import { css } from '@emotion/react';
import { icons } from '../icons/icons';
import React from 'react';

interface Props {
  icon: keyof typeof icons;
  className?: string;
  noStrut?: boolean;
}

const strutStyle = css`
  &::before {
    /*
    * https://juejin.im/entry/5bc441a5f265da0aca333506
    * https://codepen.io/airen/pen/pZVvyL
    */
    content: '\u200b';
  }
  display: inline-flex;
  align-items: center;
  font-size: 1em;
`;
const Icon = ({ icon, noStrut, className }: Props) => {
  const DynamicIcon = icons[icon];
  const loaded = <DynamicIcon aria-hidden className={className} />;
  if (noStrut) {
    return loaded;
  } else {
    return <span css={strutStyle}>{loaded}</span>;
  }
};

export default React.memo(Icon);
