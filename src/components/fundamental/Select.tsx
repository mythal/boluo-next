import React from 'react';
import { useSelect } from 'downshift';
import { StyleProps } from '../../helper/props';
import Icon from './Icon';
import { useTransition } from 'transition-hook';
import clsx from 'clsx';

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
  const transitionTimeMs = 60;
  const { stage } = useTransition(isOpen, transitionTimeMs);

  return (
    <div className={clsx('relative', className)}>
      <div>
        {label && (
          <label className="block" {...getLabelProps()}>
            {label}
          </label>
        )}
        <button
          className={clsx(
            'flex justify-between gap-1 w-full p-2',
            'rounded cursor-pointer',
            'disabled:cursor-not-allowed',
            'text-black bg-white border-1/2 border-gray-300',
            'dark:text-white dark:bg-gray-900 dark:border-gray-600',
            'disabled:bg-gray-100 disabled:text-gray-500',
            'dark:disabled:bg-black dark:disabled:text-gray-500',
            'hover-enabled:bg-gray-200 hover-enabled:border-gray-500',
            'dark:hover-enabled:bg-gray-800 dark:hover-enabled:border-gray-500',
            isOpen && 'bg-gray-200 border-gray-500 dark:bg-black dark:border-gray-500'
          )}
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
      <ul
        {...getMenuProps()}
        data-open={isOpen}
        data-stage={stage}
        aria-hidden={!isOpen}
        className={clsx(
          'p-0 w-full m-0 mt-1 list-none absolute z-10 border rounded select-none',
          'origin-top scale-y-0 transition-all duration-100',
          'shadow-menu border border-black dark:border-gray-600',
          'text-black dark:text-white',
          stage === 'enter' && 'scale-y-100'
        )}
      >
        {items.map((item, index) => {
          const highlighted = index === highlightedIndex;
          const selected = selectedItem?.value === item.value;
          return (
            <li
              key={item.value}
              {...getItemProps({ item, index })}
              className={clsx(
                'cursor-pointer px-4 py-3',
                'first-of-type:rounded-t last-of-type:rounded-b',
                !highlighted && !selected && ['text-black bg-gray-100', 'dark:text-white dark:bg-black'],
                'hover:bg-gray-50',
                'dark:hover:bg-gray-600',
                highlighted && !selected && 'bg-gray-50 dark:bg-gray-600',
                selected && [
                  'text-white',
                  'hover:bg-green-600',
                  'dark:hover:bg-blue-600',
                  highlighted ? 'bg-green-600 dark:bg-blue-600' : 'bg-green-700 dark:bg-blue-800',
                ]
              )}
            >
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
