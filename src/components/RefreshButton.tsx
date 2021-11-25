import Icon from './fundamental/Icon';
import { FormattedMessage } from 'react-intl';
import { Button } from './fundamental/Button';
import React, { useCallback } from 'react';
import { StyleProps } from '../helper/props';

interface Props extends StyleProps {
  small?: boolean;
}

export const RefreshButton = ({ className, small }: Props) => {
  const refresh = useCallback(() => {
    location.reload();
  }, []);
  return (
    <Button aria-label="refresh" onClick={refresh} className={className} data-small={small}>
      <Icon icon="refresh" />
      <FormattedMessage defaultMessage="Refresh" />
    </Button>
  );
};
