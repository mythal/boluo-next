import type { NextPage } from 'next';
import Head from 'next/head';
import Logo from '../../public/logo.svg';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import { p } from '../styles/utility/spacing';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Playground</title>
      </Head>
      <main css={p(4)}>
        <Logo />
        <h1>
          <FormattedMessage defaultMessage="Boluo" id="boluo" description="Project name" />
        </h1>
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
