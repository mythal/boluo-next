import React, { Fragment, ReactElement } from 'react';
import { Head } from '../helper/head';
import { Link } from '../helper/link';
import { css } from '@emotion/react';
import { unit } from '../styles/utility/sizing';
import { SchemeSwitch } from './SchemeSwitch';
import { flex } from '../styles/utility/flex';
import { m } from '../styles/utility/spacing';

const container = css`
  display: flex;
  width: 100%;
  gap: ${unit(4)};
`;

const navList = css`
  padding: 0 ${unit(4)};
  list-style-type: none;
  & > li {
    padding: ${unit(1)} 0;
  }
`;

export const DesignLayout: React.FC<{ title?: string }> = ({ children, title }) => {
  return (
    <Fragment>
      <Head>
        <title>{title ? `Design - ${title}` : 'Design'}</title>
      </Head>
      <div css={container}>
        <nav>
          <SchemeSwitch css={m(1)} />
          <ul css={navList}>
            <li>
              <Link href="/design/">Design</Link>
            </li>
            <li>
              <Link href="/design/error">Error Handling</Link>
            </li>
          </ul>
        </nav>
        <main css={[flex.grow['1']]}>{children}</main>
      </div>
    </Fragment>
  );
};

export function getLayout(page: ReactElement, title?: string) {
  return <DesignLayout title={title}>{page}</DesignLayout>;
}
