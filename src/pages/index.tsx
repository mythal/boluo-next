import type { NextPage } from 'next';
import Head from 'next/head';
import Logo from '../../public/logo.svg';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Playground</title>
      </Head>
      <main className="p-4">
        <Logo />
        <h1 className=" text-3xl">
          <FormattedMessage defaultMessage="Boluo" id="boluo" description="Project name" />
        </h1>
        <div>
          <div>
            <Link href="/messenger">
              <a className="link">Messenger</a>
            </Link>
          </div>
          <div>
            <Link className="link" href="/design">
              <a className="link">Design</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
