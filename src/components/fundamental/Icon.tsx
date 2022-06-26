import { icons } from '../../icons/icons';
import React from 'react';

interface Props {
  icon: keyof typeof icons;
  className?: string;
  noStrut?: boolean;
  label?: string | undefined;
}

const Icon: React.FC<Props> = ({ icon, noStrut = false, className, label }: Props) => {
  const DynamicIcon = icons[icon];
  const loaded = (
    <DynamicIcon aria-hidden role="img" width="1em" height="1em" className={className} aria-label={label} />
  );
  if (noStrut) {
    return loaded;
  } else {
    return <span className="before:content-['\200b'] inline-flex items-center">{loaded}</span>;
  }
};
Icon.displayName = 'Icon';
export default React.memo(Icon);
