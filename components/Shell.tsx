import React, { ReactNode } from 'react';

import NavButton from '../components/NavButton';

interface ShellProps {
  children: ReactNode;
}

const Shell: React.FC<ShellProps> = ({ children }) => {
  return (
    <>
      <div className="bg-gray-50 py-2">
        <div className="flex justify-between m-auto max-w-screen-md">
          <NavButton url="/" text="Home" />
          <NavButton url="/about" text="About" />
          <NavButton url="/resume" text="Resume" />
          <NavButton url="/contact" text="Contact" />
        </div>
      </div>
      <div className="flex flex-col max-w-screen-sm mx-auto justify-content pt-16">
        {children}
      </div>
    </>
  );
};

export default Shell;
