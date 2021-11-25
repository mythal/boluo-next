import React from 'react';
import Icon from './fundamental/Icon';
import { spin } from '../styles/utility/transitions';
import { css } from '@emotion/react';

const style = css`
  animation: ${spin} 1s linear infinite;
`;

export const SpinnerIcon: React.FC = () => {
  return <Icon css={style} icon="spinner" />;
};
SpinnerIcon.displayName = 'SpinnerIcon';
