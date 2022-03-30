import React from 'react';
import { useRouter } from 'next/router';
import Home from './Home.mdx';

interface RouteItem {
  title: string;
  component: React.FC;
}

const createRouteTable = <T extends { [key: string]: RouteItem }>(table: T) => table;

export const tabRouteTable = createRouteTable({
  '': {
    title: 'Design',
    component: Home,
  },
  buttons: {
    title: 'Buttons',
    component: React.lazy(() => import('./ButtonDesign')),
  },
  forms: {
    title: 'Form',
    component: React.lazy(() => import('./FormDesign')),
  },
  'error-handling': {
    title: 'Error Handling',
    component: React.lazy(() => import('./ErrorHandlingDesign')),
  },
  notifications: {
    title: 'Notifications',
    component: React.lazy(() => import('./NotificationDesign')),
  },
  popovers: {
    title: 'Popovers',
    component: React.lazy(() => import('./PopoverDesign')),
  },
  sortable: {
    title: 'Sortable',
    component: React.lazy(() => import('./SortableDesign')),
  },
  virtual: {
    title: 'Virtual List',
    component: React.lazy(() => import('./VirtualListDesign')),
  },
  colors: {
    title: 'Colors',
    component: React.lazy(() => import('./ColorDesign')),
  },
  loading: {
    title: 'Loading',
    component: React.lazy(() => import('./LoadingDesign')),
  },
  dialogs: {
    title: 'Dialog',
    component: React.lazy(() => import('./DialogDesign')),
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
