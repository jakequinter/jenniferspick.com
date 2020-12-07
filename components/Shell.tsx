import React, { useState, ReactNode } from 'react';

import Banner from '../components/Banner';
import NavButton from '../components/NavButton';
import Heading from './Heading';
import Footer from './Footer';

interface ShellProps {
  children: ReactNode;
}

const Shell: React.FC<ShellProps> = ({ children }) => {
  return (
    <>
      <div className="bg-white p-2">
        <div className="flex justify-between m-auto max-w-screen-md">
          <NavButton url="/" text="Home" />
          <NavButton url="/about" text="About" />
          <NavButton url="/resume" text="Resume" />
          <NavButton url="/contact" text="Contact" />
        </div>
      </div>
      <Banner />
      <div
        className="flex flex-col max-w-screen-sm mx-auto justify-content py-16 px-2 h-full"
        style={{ minHeight: 'Calc(100vh - 87px)' }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Shell;
