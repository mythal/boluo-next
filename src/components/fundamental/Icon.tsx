import { css } from '@emotion/react';
import { icons } from '../../icons/icons';
import React from 'react';

interface Props {
  icon: keyof typeof icons;
  className?: string;
  noStrut?: boolean;
  label?: string;
}

const strutStyle = css`
  &::before {
    /*
    * https://juejin.cn/post/6844903693406437384 https://archive.ph/Qik5h
    * https://codepen.io/airen/pen/pZVvyL
    */
    content: '\u200b';
  }
  display: inline-flex;
  align-items: center;
  font-size: 1em;
`;
const Icon: React.FC<Props> = ({ icon, noStrut, className, label }: Props) => {
  const DynamicIcon = icons[icon];
  const loaded = (
    <DynamicIcon aria-hidden role="img" width="1em" height="1em" className={className} aria-label={label} />
  );
  if (noStrut) {
    return loaded;
  } else {
    return <span css={strutStyle}>{loaded}</span>;
  }
};
Icon.displayName = 'Icon';
export default React.memo(Icon);
