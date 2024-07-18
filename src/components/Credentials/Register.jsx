import React, { useState } from 'react';
import useRegister from '../../Hooks/useRegister';
import useLogin from '../../Hooks/useLogin';
const Modal = React.lazy(() => import('./Modal'));
const Input = React.lazy(() => import('./CredentialComponents/Input'));
const Button = React.lazy(() => import('./CredentialComponents/Button'));
import { useForm } from 'react-hook-form';
import { baseURL } from '../../utils/Connection';
const Register = () => {
  let {
    handleSubmit,
    formState: { errors, defaultValues },
    register,
    reset,
    watch,
    control,
  } = useForm({
    defaultValues: {
      username: '',
      lastName: '',
      password: '',
      email: '',
      confirm: '',
      firstName: '',
    },
  });
  let Body = (
    <div className="flex items-center justify-center w-full flex-wrap sm:flex-row flex-col gap-3">
      <Input
        control={control}
        required
        errors={errors}
        register={register}
        label={'Username'}
        id={'username'}
      />
      <div className="flex items-start justify-start flex-col flex-1 gap-3 w-full max-w-[100%]">
        <Input
          control={control}
          required
          errors={errors}
          register={register}
          label={'First-name'}
          id={'firstName'}
        />
        <Input
          control={control}
          required
          errors={errors}
          register={register}
          label={'Last-name'}
          id={'lastName'}
        />
        <Input
          control={control}
          required
          errors={errors}
          register={register}
          label={'Phone-Number'}
          id={'phoneNumber'}
        />
      </div>
      <div className="flex items-start justify-start flex-col flex-1 gap-3 w-full max-w-[100%]">
        <Input
          control={control}
          errors={errors}
          required
          register={register}
          label={'Email-address'}
          type={'email'}
          id={'email'}
        />
        <Input
          control={control}
          errors={errors}
          required
          register={register}
          label={'Password'}
          type={'password'}
          id={'password'}
        />
        <Input
          control={control}
          errors={errors}
          required
          register={register}
          label={'Confirm-password'}
          type={'password'}
          id={'confirm'}
        />
      </div>
    </div>
  );
  let registerModal = useRegister();
  let loginModal = useLogin();
  let handleAuth = () => {
    setTimeout(() => {
      registerModal.setClose();
    }, 200);
    loginModal.setOpen();
  };
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState('');
  let onSubmit = async (data) => {
    let { username, password, firstName, lastName, phoneNumber, email } = data;
    setLoading(true);
    baseURL
      .post(`/auth/register`, {
        username,
        password,
        email,
        lastName,
        firstName,
        phoneNumber,
      })
      .then((response) => {
        return response.data;
      })
      .then((res) => {
        if (res) {
          reset({
            username: '',
            password: '',
            email: '',
            lastName: '',
            confirm: '',
            phoneNumber: '',
          });
          handleAuth();
        }
      })
      .catch((err) => {
        setError(err.response.data.error);
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => {
          setError('');
        }, 5000);
      });
  };
  let Footer = (
    <div className="flex items-center justify-center gap-2 text-sm font-semibold tracking-wide text-normalBlue">
      <label htmlFor="footer">Already have an account?</label>
      <button
        onClick={handleAuth}
        className="hover:scale-[1.02] hover:underline"
      >
        Login
      </button>
    </div>
  );
  return (
    <Modal
      open={registerModal.open}
      headerTitle={<img src="/logo.png" alt="" />}
      title={'Register Now'}
      disable={loading}
      body={Body}
      footer={Footer}
      onClose={registerModal.setClose}
      onSubmit={handleSubmit(onSubmit)}
      label={'Register'}
      error={error}
    />
  );
};

export default Register;
