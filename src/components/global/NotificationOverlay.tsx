import type { VFC } from 'react';
import { useAppSelector } from '../../state/store';
import { css } from '@emotion/react';
import { Toast } from '../fundamental/Toast';
import { dismissNotification } from '../../state/interface';
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

export const NotificationOverlay: VFC = () => {
  const notifications = useAppSelector((state) => state.interface.notifications);
  return (
    <div css={styles.overlay}>
      {notifications.map((notification) => {
        const onClose = () => dismissNotification(notification.id);
        return (
          <Toast css={m.t(2)} key={notification.id} level={notification.level} onClose={onClose}>
            {notification.child}
          </Toast>
        );
      })}
    </div>
  );
};
