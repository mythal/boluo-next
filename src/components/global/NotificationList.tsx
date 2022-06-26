import type { FC } from 'react';
import React, { useCallback } from 'react';
import { useAppSelector } from '../../state/store';
import { Toast } from '../fundamental/Toast';
import { dismissNotification, Notification } from '../../state/interface';

const NotificationCard: FC<Notification> = React.memo(({ id, level, child }) => {
  const onClose = useCallback(() => dismissNotification(id), [id]);
  return (
    <Toast className="mt-4" key={id} global level={level} onClose={onClose}>
      {child}
    </Toast>
  );
});
NotificationCard.displayName = 'NotificationCard';

export const NotificationList: FC = () => {
  const notifications = useAppSelector((state) => state.interface.notifications);
  return (
    <div className="z-40 fixed -bottom-2 -right-2 flex flex-col-reverse">
      {notifications.map((notification) => (
        <NotificationCard key={notification.id} {...notification} />
      ))}
    </div>
  );
};
