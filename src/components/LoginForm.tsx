import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { useSWRConfig } from 'swr';
import { post } from '../api';
import { LoginResult } from '../api/types/users';
import { StyleProps } from '../helper/props';
import { Button } from './fundamental/Button';
import { TextInput } from './fundamental/TextInput';
import Oops from './Oops';

interface Props extends StyleProps {}

interface Inputs {
  username: string;
  password: string;
}

export const LoginForm = ({ className }: StyleProps) => {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [error, setError] = useState<unknown>(null);
  const intl = useIntl();
  const required = intl.formatMessage({ defaultMessage: "Can't be empty." });
  const onSubmit: SubmitHandler<Inputs> = async ({ password, username }) => {
    let result: LoginResult;
    try {
      result = await post('/users/login', { username, password });
    } catch (e) {
      setError(e);
      return;
    }
    mutate('/users/get_me', result.me);
    router.push('/');
  };
  if (error) {
    return <Oops error={error} className={className} />;
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={clsx('flex flex-col gap-2', className)}>
      <div className="text-2xl">
        <FormattedMessage defaultMessage="Login" />
      </div>
      <div className="w-full">
        <label className="w-full">
          <FormattedMessage defaultMessage="Username or Email" />
          <TextInput
            className="w-full"
            autoComplete="username"
            data-state={errors.username ? 'error' : 'default'}
            {...register('username', { required })}
          />
        </label>
        {errors.username?.message && <div className="mt-1 text-sm">{errors.username.message}</div>}
      </div>
      <div className="w-full">
        <label>
          <FormattedMessage defaultMessage="Password" />
          <TextInput
            type="password"
            autoComplete="current-password"
            className="w-full"
            data-state={errors.password ? 'error' : 'default'}
            {...register('password', { required })}
          />
          {errors.password?.message && <div className="mt-1 text-sm">{errors.password.message}</div>}
        </label>
      </div>
      <div className="mt-2 flex justify-end">
        <Button data-type="primary" type="submit">
          <FormattedMessage defaultMessage="Login" />
        </Button>
      </div>
    </form>
  );
};
