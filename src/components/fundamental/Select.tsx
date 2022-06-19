import React from 'react';
import { useSelect } from 'downshift';
import { display, position } from '../../styles/utility/layout';
import { css, Theme } from '@emotion/react';
import { unit } from '../../styles/utility/sizing';
import { StyleProps } from '../../helper/props';
import Icon from './Icon';

export interface SelectItem {
  label: string;
  value: string;
}

interface Props extends StyleProps {
  items: SelectItem[];
  value: SelectItem['value'];
  onChange: (newSelectedItem: SelectItem['value']) => void;
  label?: string;
  disabled?: boolean;
}

const styles = {
  toggleButton: (theme: Theme) => css`
    --active-border: ${theme.select.activeBorder};
    --active-bg: ${theme.select.activeBg};
    display: flex;
    color: ${theme.select.text};
    gap: ${unit(1)};
    width: 100%;
    justify-content: space-between;
    padding: ${unit(2)};
    border: ${unit(0.5)} solid ${theme.select.border};
    border-radius: ${unit(1)};
    background-color: ${theme.select.bg};
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      background-color: ${theme.select.disableBg};
      color: ${theme.select.disableText};
    }

    &:not(:disabled):hover {
      background-color: var(--active-bg);
      border-color: var(--active-border);
    }

    &[data-open='true'] {
      background-color: var(--active-bg);
      border-color: var(--active-border);
    }
  `,
  itemList: (theme: Theme) => css`
    &[data-open='false'] {
      display: none;
    }
    &[data-open='true'] {
      padding: 0;
      width: 100%;
      margin: ${unit(1)} 0 0 0;
      color: ${theme.select.text};
      list-style: none;
      position: absolute;
      z-index: 10;
      box-shadow: ${unit(1)} ${unit(1)} 0 rgba(0, 0, 0, 0.1);
      border: 1px solid ${theme.select.listBorder};
      --radius: ${unit(1)};
      border-radius: var(--radius);
      user-select: none;
    }

    & > li {
      --radius: ${unit(1)};

      &:first-of-type {
        border-radius: var(--radius) var(--radius) 0 0;
      }

      &:last-of-type {
        border-radius: 0 0 var(--radius) var(--radius);
      }

      &:hover,
      &[data-highlighted='true'] {
        background-color: ${theme.select.listHighlightBg};
        color: ${theme.select.listHighlightText};
      }

      &[data-selected='true'] {
        background-color: ${theme.select.listSelectedBg};
        color: ${theme.select.listSelectedText};
        &:hover,
        &[data-highlighted='true'] {
          background-color: ${theme.select.listSelectedHighlightBg};
        }
      }

      padding: ${unit(3)} ${unit(4)};
      background-color: ${theme.select.listBg};
      cursor: pointer;
    }
  `,
};

export const Select: React.FC<Props> = ({ items, value, onChange, label, className, disabled = false }) => {
  function itemToString(item: SelectItem | null) {
    return item ? item.value : '';
  }
  const selectedItem = items.find((item) => item.value === value) ?? null;
  const { isOpen, getToggleButtonProps, getLabelProps, getMenuProps, highlightedIndex, getItemProps } = useSelect({
    items,
    itemToString,
    selectedItem,
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        onChange(selectedItem.value);
      }
    },
  });

  return (
    <div css={[position.relative]} className={className}>
      <div>
        {label && (
          <label css={[display.block]} {...getLabelProps()}>
            {label}
          </label>
        )}
        <button
          css={styles.toggleButton}
          aria-label="toggle menu"
          type="button"
          {...getToggleButtonProps()}
          data-open={isOpen}
          disabled={disabled}
          aria-disabled={disabled}
        >
          <span>{selectedItem?.label}</span>
          <span>{isOpen ? <Icon icon="chevrons-up" /> : <Icon icon="chevrons-down" />}</span>
        </button>
      </div>
      <ul css={styles.itemList} {...getMenuProps()} data-open={isOpen} aria-hidden={!isOpen}>
        {items.map((item, index) => (
          <li
            key={item.value}
            {...getItemProps({ item, index })}
            data-highlighted={index === highlightedIndex}
            data-selected={selectedItem?.value === item.value}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
