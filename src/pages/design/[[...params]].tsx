import { Page } from '../../helper/layout';
import { FC } from 'react';
import Link from 'next/link';
import { tabRouteTable, useDesignRoute } from '../../design/useDesignRoute';
import Home from '../../design/Home.mdx';

const DesignRoute: FC<{ tab: keyof typeof tabRouteTable }> = ({ tab }) => {
  if (tabRouteTable.hasOwnProperty(tab)) {
    return tabRouteTable[tab].component;
  } else {
    return <Home />;
  }
};

const Design: Page = () => {
  const tab = useDesignRoute();
  const sidebarItems = Object.entries(tabRouteTable).map(([path, item]) => {
    return (
      <li key={path}>
        <Link href={`/design/${path}`}>
          <a data-active={path === tab}>{item.title}</a>
        </Link>
      </li>
    );
  });
  return (
    <div>
      <div>
        <ul>{sidebarItems}</ul>
      </div>
      <div>
        <DesignRoute tab={tab} />
      </div>
    </div>
  );
};

export default Design;
