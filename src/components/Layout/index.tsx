import React from 'react';
import tw from 'twin.macro';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Header />
      <div css={tw`w-full h-full overflow-hidden`}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
