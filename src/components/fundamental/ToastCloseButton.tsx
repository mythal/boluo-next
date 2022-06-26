import clsx from 'clsx';
import React from 'react';
import Icon from './Icon';

interface Props {
  onClose: () => void;
}

export const ToastCloseButton: React.FC<Props> = ({ onClose }) => {
  return (
    <button
      aria-label="close"
      onClick={() => onClose()}
      className={clsx(
        'cursor-pointer appearance-none border-none',
        'w-7 h-7 text-xl flex items-center justify-center rounded text-[inherit]',
        'bg-white/20 hover:bg-white/50 active:bg-white/75 focus:ring'
      )}
    >
      <Icon icon="x" />
    </button>
  );
};
