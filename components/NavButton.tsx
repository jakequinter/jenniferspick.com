import React from 'react';

interface NavButtonProps {
  url: string;
  text: string;
}

const NavButton = ({ url, text }: NavButtonProps) => (
  <a
    className="hover:bg-indigo-50 text-indigo-500 font-bold py-2 px-4 rounded"
    href={url}
  >
    {text}
  </a>
);

export default NavButton;
