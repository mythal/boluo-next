import { Page } from '../../helper/layout';
import { FC } from 'react';
import Link from 'next/link';
import { tabRouteTable, useDesignRoute } from '../../design/useDesignRoute';
import Home from '../../design/Home.mdx';
import { css, Theme } from '@emotion/react';
import { gray } from '../../styles/utility/color';
import { SchemeSwitch } from '../../components/SchemeSwitch';

const DesignRoute: FC<{ tab: keyof typeof tabRouteTable }> = ({ tab }) => {
  if (tabRouteTable.hasOwnProperty(tab)) {
    return tabRouteTable[tab].component;
  } else {
    return <Home />;
  }
};

const styles = {
  container: css`
    display: flex;
  `,
  sidebar: (theme: Theme) => css`
    background: ${theme.mode === 'light' ? gray['100'] : gray['900']};
    padding: 1em 2.5em;
    height: 100vh;
    ul {
      padding: 0;
      list-style: none;
      a {
        display: block;
        padding: 0.25rem 0;

        &[data-active='true'] {
          text-decoration: underline;
        }

        &:hover {
          text-decoration: underline;
        }
      }
    }
  `,
  content: css`
    padding: 1em 2em;
  `,
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
    <div css={styles.container}>
      <div css={styles.sidebar}>
        <ul>{sidebarItems}</ul>

        <div>
          <SchemeSwitch />
        </div>
      </div>
      <div css={styles.content}>
        <DesignRoute tab={tab} />
      </div>
    </div>
  );
};

export default Design;
