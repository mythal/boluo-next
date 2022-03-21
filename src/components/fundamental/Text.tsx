import { css } from '@emotion/react';
import { FC } from 'react';
import { StyleProps } from '../../helper/props';
import { text } from '../../styles/utility/typography';

const style = css`
  margin: 0.5em 0;

  &[data-size='small'] {
    ${text.sm};
    margin: 0.25em 0;
  }
`;

interface Props extends StyleProps {
  size?: 'small' | 'normal';
}

export const Text: FC<Props> = ({ children, size = 'normal', className }) => (
  <p className={className} css={style} data-size={size}>
    {children}
  </p>
);
