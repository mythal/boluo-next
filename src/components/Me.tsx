import { useMe } from '../hooks/useMe';

export const Me = () => {
  const me = useMe();
  if (!me) {
    return <span>Not logged in</span>;
  }
  return <span>{me.user.nickname}</span>;
};
