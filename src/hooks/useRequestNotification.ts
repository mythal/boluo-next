import { useEffect, useState } from 'react';
import { empty } from '../helper/function';

interface Result {
  permission: typeof Notification.permission;
  request: () => void;
}

export const useRequestNotification = (): Result => {
  const [permission, setPermisson] = useState<typeof Notification.permission>(
    typeof window === 'undefined' ? 'default' : Notification.permission
  );
  useEffect(() => {
    if (!navigator.permissions) {
      // Safari doesn't support Notification.permission
      // https://caniuse.com/permissions-api
      return;
    }
    navigator.permissions.query({ name: 'notifications' }).then((status) => {
      status.onchange = () => {
        if (status.state === 'granted') {
          setPermisson('granted');
        } else if (status.state === 'denied') {
          setPermisson('denied');
        } else {
          setPermisson('default');
        }
      };
    });
  }, []);
  if (typeof Notification === 'undefined') {
    return {
      permission: 'default',
      request: empty,
    };
  }
  const request = () => Notification.requestPermission((permission) => setPermisson(permission));

  return { permission, request };
};
