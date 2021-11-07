import Navbar from './navbar';
import Footer from './footer';
import { useState } from 'react';

const Layout = ({children}) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
