import { Page } from '../../helper/layout';
import React, { FC, Suspense, useState } from 'react';
import Link from 'next/link';
import { tabRouteTable, useDesignRoute } from '../../design/useDesignRoute';
import Home from '../../design/Home.mdx';
import { SchemeSwitch } from '../../components/SchemeSwitch';
import Head from 'next/head';
import { Button } from '../../components/fundamental/Button';
import Icon from '../../components/fundamental/Icon';
import { Dialog } from '../../components/fundamental/Dialog';
import { LocaleSwitch } from '../../components/LocaleSwitch';
import { useRequestNotification } from '../../hooks/useRequestNotification';
import clsx from 'clsx';
import { Loading } from '../../components/Loading';
import { GetServerSideProps } from 'next';

const DesignRoute: FC<{ tab: keyof typeof tabRouteTable }> = ({ tab }) => {
  if (tabRouteTable.hasOwnProperty(tab)) {
    const Page = tabRouteTable[tab].component;
    return (
      <div className="py-4 px-8">
        <Head>
          <title>{'Design :: ' + tabRouteTable[tab].title}</title>
        </Head>
        <Suspense fallback={<Loading />}>
          <Page />
        </Suspense>
      </div>
    );
  } else {
    return (
      <div className="py-4 px-8">
        <Head>
          <title>Design</title>
        </Head>
        <Home />
      </div>
    );
  }
};

const Design: Page = () => {
  const tab = useDesignRoute();
  const [settingDialog, setSettingDialog] = useState(false);
  const sidebarItems = Object.entries(tabRouteTable).map(([path, item]) => {
    return (
      <li key={path}>
        <Link href={`/design/${path}`}>
          <a className={clsx('link block py-1 px-0 hover:underline', path === tab && 'underline')}>{item.title}</a>
        </Link>
      </li>
    );
  });
  const { permission, request } = useRequestNotification();
  return (
    <div className="flex">
      <div className="h-screen bg-gray-100 py-4 px-9 dark:bg-gray-900">
        <div>
          <Button onClick={() => setSettingDialog(true)}>
            <Icon icon="settings" />
          </Button>
          <Dialog dismiss={() => setSettingDialog(false)} show={settingDialog}>
            <div>
              <SchemeSwitch />
            </div>
            <div className="mt-2">
              <LocaleSwitch />
            </div>
            <div className="mt-2">
              <Button disabled={permission !== 'default'} onClick={request}>
                {permission === 'denied' && 'Denied'}
                {permission === 'default' && 'Turn On Notification'}
                {permission === 'granted' && 'Notification ON'}
              </Button>
            </div>
          </Dialog>
        </div>
        <ul className="list-none p-0">{sidebarItems}</ul>
      </div>
      <Suspense fallback={<Loading />}>
        <DesignRoute tab={tab} />
      </Suspense>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};
export default Design;
