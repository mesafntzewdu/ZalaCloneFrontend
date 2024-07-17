import React, { Suspense } from 'react';
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
import { Provider } from 'react-redux';
import { persistor, Store } from './Token/userStore.jsx';
import { PersistGate } from 'redux-persist/integration/react';
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
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor} loading={null}>
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
            <Register />
            <Login />
            <RouterProvider router={router} />
          </Suspense>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
