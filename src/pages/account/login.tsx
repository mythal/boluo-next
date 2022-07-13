import Head from 'next/head';
import { LoginForm } from '../../components/LoginForm';
import type { SwrFallbackProps } from '../../helper/SwrProps';

interface Props extends SwrFallbackProps {}
const Login = ({}: Props) => {
  return (
    <>
      <Head>
        <title>Login - Boluo</title>
      </Head>
      <div className="flex h-screen items-start justify-center pt-[20vh]">
        <LoginForm className="min-w-[20rem] max-w-[90vw] rounded border bg-neutral-50 p-6 shadow-1 shadow-gray-300/75" />
      </div>
    </>
  );
};

export default Login;
