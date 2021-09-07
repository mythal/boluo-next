import React from 'react';
import { unit } from '../styles/utility/sizing';
import styled from '@emotion/styled';
import { get } from 'optics-ts';
import { buttonColors, colors } from '../styles/themes/light';
import { DataAttr } from '../helper/props';
import { text } from '../styles/utility/typography';
import { darken } from 'color2k';

type Attr = DataAttr<{
  on: boolean;
  icon: boolean;
  group: boolean;
  small: boolean;
  light: boolean;
}>;

// Styling The Good Ol' Button Element
// https://ishadeed.com/article/styling-the-good-old-button/

export const Button = styled.button<Attr>`
  ${text.base};
  display: inline-flex;
  gap: ${unit(1)};
  align-items: center;
  justify-content: center;
  appearance: none;
  font-family: inherit;
  user-select: none;
  &[data-small='true'] {
    ${text.sm};
  }
  &:focus {
    outline: none;
  }
  // cursor
  cursor: pointer;
  &[disabled] {
    cursor: not-allowed;
  }
  // padding
  padding: 0.5em 1em;
  &[data-small='true'] {
    // padding: 0.25em 0.5em;
  }
  &[data-icon='true'] {
    padding: 0 ${unit(3)};
  }

  // width
  width: max-content;
  max-width: 8em;
  min-width: 6em;
  &[data-small='true'] {
    min-width: 5em;
  }
  &[data-icon='true'] {
    min-width: unset;
  }
  // height
  min-height: 2.5em;
  line-height: 1.2em;
  &[data-small='true'] {
    min-height: 2.25em;
  }

  // radius
  --border-radius: 2px;
  border-radius: var(--border-radius);

  // group
  &[data-group='true'] {
    &:first-of-type {
      border-radius: var(--border-radius) 0 0 var(--border-radius);
      border-right: none;
    }

    &:not(:first-of-type):not(:last-of-type) {
      border-left: none;
      border-right: none;
      border-radius: 0;
    }

    &:last-of-type {
      border-left: none;
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
    }
  }
  // animation
  transition: transform 60ms ease-in, box-shadow 60ms ease-in;
  &:active:not([data-light='true']) {
    transform: translateY(1px);
  }
  // colors
  --bg-color: ${get(buttonColors.prop('bg'))};
  background-color: var(--bg-color);

  color: ${get(buttonColors.prop('text'))};
  &[disabled] {
    color: ${get(buttonColors.prop('textDisabled'))};
  }
  &:hover:not([disabled]):not(:active) {
    --bg-color: ${get(buttonColors.prop('bgHover'))};
  }
  &.on,
  &[data-on='true'] {
    --bg-color: ${get(buttonColors.prop('bgOn'))};
  }
  &:active {
    --bg-color: ${get(buttonColors.prop('bgActive'))};
  }
  &[data-light='true']:active {
    --bg-color: ${get(buttonColors.prop('bgActive'))};
  }

  // border
  &:not([data-light]) {
    border: 1px solid ${({ theme }) => theme.colors.stroke};
  }
  &[data-light='true'] {
    border: 1px solid var(--bg-color);
  }
  &.on,
  &[data-on='true'] {
    border-color: ${get(buttonColors.prop('borderOn'))};
  }

  // shadow
  --shadow-color: ${get(colors.prop('shadow'))};

  &:active {
    --shadow-color: ${({ theme }) => darken(theme.colors.shadow, 0.2)};
  }
  &:focus {
    --extra-shadow: 0 0 0 1px var(--bg-color) inset, 0 0 0 2px ${get(colors.prop('borderFocus'))} inset;
  }
  // fix shadow overlap https://stackoverflow.com/a/20208253/1137004
  z-index: 1;
  position: relative;
  &:not([data-light]) {
    --shadow-offset: 2px;

    &:active {
      --shadow-offset: 1px;
    }

    &[data-small] {
      --shadow-offset: 1px;

      &:active {
        --shadow-offset: 0;
      }
    }

    box-shadow: var(--shadow-offset) var(--shadow-offset) 0 0 var(--shadow-color),
      var(--extra-shadow, 0 0 0 0 #00000000);
  }

  &[data-light] {
    box-shadow: var(--extra-shadow);
  }
`;
