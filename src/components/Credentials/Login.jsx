import React, { useState } from 'react';
import useLogin from '../../Hooks/useLogin.jsx';
import useRegister from '../../Hooks/useRegister.jsx';
import { useForm } from 'react-hook-form';
import { baseURL } from '../../utils/Connection.js';
const Input = React.lazy(() => import('./CredentialComponents/Input'));
const Modal = React.lazy(() => import('./Modal'));
import { useDispatch } from 'react-redux';
import { LOGIN } from '../../Token/userSlice.jsx';
const Login = () => {
  let {
    handleSubmit,
    formState: { errors, defaultValues },
    register,
    reset,
    control,
  } = useForm();
  let Body = (
    <div className="flex items-center justify-center w-full flex-wrap gap-3">
      <Input
        register={register}
        errors={errors}
        label={'Email-address or username'}
        type={'text'}
        id={'user'}
        required
        control={control}
      />
      <Input
        register={register}
        errors={errors}
        label={'Password'}
        type={'password'}
        id={'password'}
        required
        control={control}
      />
    </div>
  );
  let loginModal = useLogin();
  let registerModal = useRegister();
  let handleAuth = () => {
    setTimeout(() => {
      loginModal.setClose();
    }, 200);
    registerModal.setOpen();
  };
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState('');
  let dispatch = useDispatch();
  let onSubmit = async (data) => {
    let { user, password } = data;
    setLoading(true);
    baseURL
      .post(`/auth/login`, {
        user,
        password,
      })
      .then((response) => {
        return response?.data;
      })
      .then((res) => {
        if (res) {
          reset({
            user: '',
            password: '',
          });
          dispatch(
            LOGIN({
              id: res?._id,
              username: res?.username,
              profile: res?.profile,
              email: res?.email,
            })
          );
          loginModal.setClose();
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
      <label htmlFor="footer">Don't have an account?</label>
      <button
        onClick={handleAuth}
        className="hover:scale-[1.02] hover:underline"
      >
        Register
      </button>
    </div>
  );
  let handleLogin = async (data) => {
    console.log(data);
  };
  return (
    <Modal
      open={loginModal.open}
      onClose={loginModal.setClose}
      title={'Login Now'}
      body={Body}
      headerTitle={<img src="/logo.png" alt="" />}
      footer={Footer}
      onSubmit={handleSubmit(onSubmit)}
      label={'Login'}
      error={error}
      disable={loading}
    />
  );
};

export default Login;
