import type { NextPage } from 'next';
import Head from 'next/head';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import Logo from '../../public/logo.svg';
import { Me } from '../components/Me';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Playground</title>
      </Head>
      <main className="p-4">
        <Logo />
        <h1 className=" text-3xl">
          <FormattedMessage defaultMessage="Boluo" description="Project name" />
        </h1>
        <div>
          <Me />
        </div>
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
          <div className="flex gap-2">
            <Link className="link" href="/account/login">
              <a className="link">Login</a>
            </Link>
            <Link className="link" href="/account/logout">
              <a className="link">Logout</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
