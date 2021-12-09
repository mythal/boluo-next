import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Logo from '../../public/logo.svg';
import { FormattedMessage } from 'react-intl';
import { Suspense, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { LocaleSwitch } from '../components/LocaleSwitch';
import { ClientBox } from '../components/fundamental/ClientBox';
import Link from 'next/link';

const container = css`
  width: 20em;
  margin: 10vh auto;
`;

const Home: NextPage = () => {
  const [color, setColor] = useState('#000000');
  return (
    <div>
      <Head>
        <title>Playground</title>
      </Head>
      <main>
        <Logo />
        <h1 style={{ color }}>
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
          <div>
            <Link href="/messenger">Messenger</Link>
          </div>
          <div>
            <Link href="/design">Design</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
