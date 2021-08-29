import React from 'react';
import { unit } from '../styles/utility/sizing';
import styled from '@emotion/styled';
import { get } from 'optics-ts';
import { buttonColors } from '../styles/theme';

export const Button = styled.button`
  padding: ${unit(2)};
  border: none;
  background-color: ${get(buttonColors.prop('bg'))};
  color: ${get(buttonColors.prop('text'))};
  &:hover {
    background-color: ${get(buttonColors.prop('bgHover'))};
  }

  &.active,
  &:active,
  &[data-active='true'] {
    transform: translateY(1px);
    background-color: ${get(buttonColors.prop('bgActive'))};
  }
`;
