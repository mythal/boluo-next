import { ReactElement } from 'react';
import { Buttons } from './Buttons';
import { Form } from './Form';
import { ErrorHandling } from './ErrorHandling';
import { Notifications } from './Notifications';
import { Pop } from './Pop';
import { Sortable } from './Sortable';
import { VirtualList } from './VirtualList';
import { useRouter } from 'next/router';

export const DefaultContent = () => {
  return <p>This is the place to design and tweak UI components.</p>;
};

interface RouteItem {
  title: string;
  component: ReactElement;
}

const createRouteTable = <T extends { [key: string]: RouteItem }>(table: T) => table;

export const tabRouteTable = createRouteTable({
  '': {
    title: 'Design',
    component: <DefaultContent />,
  },
  buttons: {
    title: 'Buttons',
    component: <Buttons />,
  },
  forms: {
    title: 'Form Controls',
    component: <Form />,
  },
  'error-handling': {
    title: 'Error Handling',
    component: <ErrorHandling />,
  },
  notifications: {
    title: 'Notifications',
    component: <Notifications />,
  },
  popovers: {
    title: 'Popovers',
    component: <Pop />,
  },
  sortable: {
    title: 'Sortable',
    component: <Sortable />,
  },
  virtual: {
    title: 'Virtual List',
    component: <VirtualList />,
  },
});

export const useDesignRoute = (): keyof typeof tabRouteTable => {
  const router = useRouter();
  const { params } = router.query;
  if (!params || !(params instanceof Array) || !params[0]) {
    return '';
  }
  const tab = params[0];
  if (tabRouteTable.hasOwnProperty(tab)) {
    return tab as keyof typeof tabRouteTable;
  } else {
    return '';
  }
};
