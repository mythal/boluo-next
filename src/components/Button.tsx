import React from 'react';
import { unit } from '../styles/utility/sizing';
import styled from '@emotion/styled';
import { get } from 'optics-ts';
import { buttonColors, colors } from '../styles/theme';
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
  --border-radius: 2px;
  --bg-color: ${get(buttonColors.prop('bg'))};
  --shadow-color: ${get(colors.prop('shadow'))};

  display: inline-flex;
  gap: ${unit(1)};
  align-items: center;
  justify-content: center;
  appearance: none;
  font-family: inherit;
  cursor: pointer;

  padding: ${unit(2)} ${unit(5)};
  border-radius: var(--border-radius);

  &:not([data-light]) {
    border: 1px solid ${({ theme }) => theme.colors.stroke};
  }

  &[data-light] {
    border: 1px solid var(--bg-color);
    &:active {
      filter: brightness(70%);
    }
  }

  background-color: var(--bg-color);
  color: ${get(buttonColors.prop('text'))};
  transition: transform 60ms ease-in, box-shadow 60ms ease-in;
  // fix shadow overlap https://stackoverflow.com/a/20208253/1137004
  z-index: 1;
  position: relative;

  min-height: 2.5em;
  min-width: 5em;
  line-height: 1.2em;

  &[data-small='true'] {
    min-height: 1.75em;
    min-width: 3.5em;
    ${text.sm};
    padding: ${unit(1)} ${unit(2)};
  }

  &[data-icon='true'] {
    min-width: unset;
    padding: 0 ${unit(3)};
  }

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

  &:hover:not([disabled]) {
    --bg-color: ${get(buttonColors.prop('bgHover'))};
  }

  &.on,
  &[data-on='true'] {
    --bg-color: ${get(buttonColors.prop('bgOn'))};
    border-color: ${get(buttonColors.prop('borderOn'))};
  }

  &:active {
    &:not([data-light]) {
      transform: translateY(1px);
    }
    --shadow-color: ${({ theme }) => darken(theme.colors.shadow, 0.2)};
    --bg-color: ${get(buttonColors.prop('bgActive'))};
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    cursor: not-allowed;
    color: ${get(buttonColors.prop('textDisabled'))};
  }

  // The shadow

  &:focus {
    --extra-shadow: 0 0 0 1px var(--bg-color) inset, 0 0 0 2px ${get(colors.prop('borderFocus'))} inset;
  }

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
    // box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.29), 0 1px 1px 0 rgba(0, 0, 0, 0.22);
    box-shadow: var(--extra-shadow);
  }
`;
