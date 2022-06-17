import React from 'react';
import Icon from './fundamental/Icon';
import { spin } from '../styles/utility/transitions';
import { css } from '@emotion/react';

const style = css`
  animation: ${spin} 1s linear infinite;
`;

interface Props {
  label?: string;
}

export const SpinnerIcon: React.FC<Props> = ({ label }) => {
  return <Icon css={style} icon="spinner" label={label} />;
};
SpinnerIcon.displayName = 'SpinnerIcon';
