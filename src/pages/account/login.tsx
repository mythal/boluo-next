import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { Providers } from '../../components/global/Providers';
import { LoginForm } from '../../components/LoginForm';
import type { SwrFallbackProps } from '../../helper/SwrProps';
import { loadSwrProps } from '../../helper/SwrProps';

interface Props extends SwrFallbackProps {}
const Login = ({}: Props) => {
  return (
    <Providers>
      <Head>
        <title>Login - Boluo</title>
      </Head>
      <div className="flex h-screen items-start justify-center pt-[20vh]">
        <LoginForm className="min-w-[20rem] max-w-[90vw] rounded border bg-neutral-50 p-6 shadow-1 shadow-gray-300/75" />
      </div>
    </Providers>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await loadSwrProps(context.locale)),
    },
  };
};

export default Login;
