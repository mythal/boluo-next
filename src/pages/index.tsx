import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Logo from '../../public/logo.svg';
import { FormattedMessage } from 'react-intl';
import { Suspense, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { LocaleSwitch } from '../components/LocaleSwitch';
import { ClientBox } from '../components/ClientBox';
import Link from 'next/link';

const container = css`
  width: 20em;
  margin: 10vh auto;
`;

const title = css`
  text-decoration: none;
`;

const Home: NextPage = () => {
  const [color, setColor] = useState('#000000');
  return (
    <div>
      <Head>
        <title>Playground</title>
      </Head>
      <main css={container}>
        <Logo
          css={css`
            float: right;
          `}
        />
        <h1 css={title} style={{ color }}>
          <FormattedMessage defaultMessage="Boluo" id="boluo" description="Project name" />
        </h1>
        <div>
          <HexColorPicker color={color} onChange={setColor} />
        </div>
        <div>
          <ClientBox>
            <Suspense fallback="...">
              <LocaleSwitch />
            </Suspense>
          </ClientBox>
        </div>
        <div>
          <Link href="/messenger">Messenger</Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
