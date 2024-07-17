import React, { useEffect, useLayoutEffect, useState } from 'react';
const Header = React.lazy(() => import('./Header'));
import { Outlet } from 'react-router-dom';
const Medias = React.lazy(() => import('./Medias.jsx'));
const NavBar = React.lazy(() => import('./NavBar.jsx'));
const Footer = React.lazy(() => import('./Footer.jsx'));

const Layout = () => {
  let [open, setOpen] = useState(true);
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <Medias />
      <div
        className={`sticky top-0 z-[99999] h-auto`}
      >
        <NavBar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
