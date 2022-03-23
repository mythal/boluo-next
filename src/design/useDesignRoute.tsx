import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { Form } from './Form';
import { ErrorHandling } from './ErrorHandling';
import { Notifications } from './Notifications';
import { Pop } from './Pop';
import { Sortable } from './Sortable';
import { VirtualList } from './VirtualList';
import { Buttons } from './Buttons';
import Home from './Home.mdx';
import { Colors } from './Colors';
import { LoadingFallback } from './LoadingFallback';
import { Dialogs } from './Dialogs';

interface RouteItem {
  title: string;
  component: ReactElement;
}

const createRouteTable = <T extends { [key: string]: RouteItem }>(table: T) => table;

export const tabRouteTable = createRouteTable({
  '': {
    title: 'Design',
    component: <Home />,
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
  colors: {
    title: 'Colors',
    component: <Colors />,
  },
  loading: {
    title: 'Loading',
    component: <LoadingFallback />,
  },
  dialogs: {
    title: 'Dialog',
    component: <Dialogs />,
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
