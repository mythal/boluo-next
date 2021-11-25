import { css } from '@emotion/react';
import { FC } from 'react';

const style = css`
  margin: 0.5em 0;
`;

export const Text: FC = ({ children, ...props }) => <p {...props}>{children}</p>;
