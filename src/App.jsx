import React, { Suspense, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home'));
import { ScaleLoader } from 'react-spinners';
const Register = React.lazy(() =>
  import('./components/Credentials/Register.jsx')
);
const Login = React.lazy(() => import('./components/Credentials/Login.jsx'));
const Modal = React.lazy(() => import('./components/Credentials/Modal.jsx'));
const Medias = React.lazy(() => import('./components/Medias.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const Layout = React.lazy(() => import('./components/Layout.jsx'));
const Header = React.lazy(() => import('./components/Header.jsx'));
import { useDispatch } from 'react-redux';
import { LOGOUT } from './Token/userSlice.jsx';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

function App() {
  let [cookie, _] = useCookies(['token']);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!cookie.length) {
      dispatch(LOGOUT({}));
      toast.success('Your session has expired!', {
        style: { fontWeight: 'light' },
      });
    }
  }, []);
  return (
    <div className="font-Manrope">
      <Suspense
        fallback={
          <div className="h-screen w-screen flex items-center justify-center">
            <ScaleLoader
              color={'#1f529e'}
              loading={true}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        }
      >
        <ToastContainer
          position="top-center"
          containerStyle={{ marginTop: 10 }}
        />
        <Register />
        <Login />
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
