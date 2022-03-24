import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { FormDesign } from './FormDesign';
import { ErrorHandlingDesign } from './ErrorHandlingDesign';
import { NotificationDesign } from './NotificationDesign';
import { PopoverDesign } from './PopoverDesign';
import { SortableDesign } from './SortableDesign';
import { VirtualListDesign } from './VirtualListDesign';
import { ButtonDesign } from './ButtonDesign';
import Home from './Home.mdx';
import { ColorDesign } from './ColorDesign';
import { LoadingDesign } from './LoadingDesign';
import { DialogDesign } from './DialogDesign';

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
    component: <ButtonDesign />,
  },
  forms: {
    title: 'FormDesign Controls',
    component: <FormDesign />,
  },
  'error-handling': {
    title: 'Error Handling',
    component: <ErrorHandlingDesign />,
  },
  notifications: {
    title: 'Notifications',
    component: <NotificationDesign />,
  },
  popovers: {
    title: 'Popovers',
    component: <PopoverDesign />,
  },
  sortable: {
    title: 'Sortable',
    component: <SortableDesign />,
  },
  virtual: {
    title: 'Virtual List',
    component: <VirtualListDesign />,
  },
  colors: {
    title: 'Colors',
    component: <ColorDesign />,
  },
  loading: {
    title: 'Loading',
    component: <LoadingDesign />,
  },
  dialogs: {
    title: 'Dialog',
    component: <DialogDesign />,
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
