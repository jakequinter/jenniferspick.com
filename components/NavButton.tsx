import React, { useState, useEffect } from 'react';

interface NavButtonProps {
  url: string;
  text: string;
}

const NavButton = ({ url, text }: NavButtonProps) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (window.location.pathname === url) setIsActive(true);
  }, []);

  return (
    <a
      onClick={() => setIsActive(!isActive)}
      className={
        isActive
          ? 'bg-indigo-50 text-indigo-500 font-bold py-2 px-4 rounded'
          : 'hover:bg-indigo-50 text-indigo-500 font-bold py-2 px-4 rounded'
      }
      href={url}
    >
      {text}
    </a>
  );
};

export default NavButton;
