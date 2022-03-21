import type { VFC } from 'react';
import React, { useCallback } from 'react';
import { useAppSelector } from '../../state/store';
import { css } from '@emotion/react';
import { Toast } from '../fundamental/Toast';
import { dismissNotification, Notification } from '../../state/interface';
import { m } from '../../styles/utility/spacing';

const styles = {
  overlay: css`
    z-index: 999;
    position: fixed;
    bottom: -0.5rem;
    right: -0.5rem;
    display: flex;
    flex-direction: column-reverse;
  `,
};

const NotificationCard: VFC<Notification> = React.memo(({ id, level, child }) => {
  const onClose = useCallback(() => dismissNotification(id), [id]);
  return (
    <Toast css={m.t(2)} key={id} level={level} onClose={onClose}>
      {child}
    </Toast>
  );
});
NotificationCard.displayName = 'NotificationCard';

export const NotificationList: VFC = () => {
  const notifications = useAppSelector((state) => state.interface.notifications);
  return (
    <div css={styles.overlay}>
      {notifications.map((notification) => (
        <NotificationCard key={notification.id} {...notification} />
      ))}
    </div>
  );
};
