import React from 'react';
import TopBar from './TopBar';
import Body from './Body';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <TopBar />
      <Body>
        {children}
      </Body>
      <Footer />
    </div>
  );
};

export default Layout;
