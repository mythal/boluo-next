import React, { Fragment, ReactElement } from 'react';
import { Head } from '../helper/head';
import { Link } from '../helper/link';
import { SchemeSwitch } from './SchemeSwitch';
import { css } from '@emotion/react';

const styles = {
  container: css`
    display: flex;
    gap: 1rem;
  `,
  sidebar: css`
    padding: 2rem 1rem;
  `,
  main: css`
    width: 100%;
    padding: 2rem;
  `,
};

export const DesignLayout: React.FC<{ title?: string }> = ({ children, title }) => {
  return (
    <Fragment>
      <Head>
        <title>{title ? `Design - ${title}` : 'Design'}</title>
      </Head>
      <div css={styles.container}>
        <nav css={styles.sidebar}>
          <ul>
            <li>
              <Link href="/design/">Design</Link>
            </li>
            <li>
              <Link href="/design/error">Error Handling</Link>
            </li>
            <li>
              <Link href="/design/buttons">Button</Link>
            </li>
            <li>
              <Link href="/design/pop">Tooltip & Menu</Link>
            </li>
            <li>
              <Link href="/design/virtual-list">Virtual List</Link>
            </li>
            <li>
              <Link href="/design/sortable">Sortable</Link>
            </li>
            <li>
              <Link href="/design/form">Form</Link>
            </li>
          </ul>
          <SchemeSwitch />
        </nav>
        <main css={styles.main}>{children}</main>
      </div>
    </Fragment>
  );
};

export function getLayout(page: ReactElement, title?: string) {
  return <DesignLayout title={title}>{page}</DesignLayout>;
}
