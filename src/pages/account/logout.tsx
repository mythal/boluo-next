import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useLogout } from '../../hooks/useLogout';

const Logout = () => {
  const logout = useLogout();
  useEffect(() => logout);
  return (
    <>
      <Head>
        <title>Logout - Boluo</title>
      </Head>
      <div className="flex h-screen items-start justify-center pt-[20vh]">
        <div className="min-w-[20rem] max-w-[90vw] rounded border bg-neutral-50 p-6 shadow-1 shadow-gray-300/75">
          <div className="w-full text-2xl">
            <FormattedMessage defaultMessage="You are logged out" />
          </div>
          <div className="mt-4 w-full">
            <Link href="/">
              <a className="link">
                <FormattedMessage defaultMessage="Back to home" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logout;
