import React from 'react';
import Link from 'next/link';

type Props = {
  children?: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div>
      <nav className="px-8 py-2.5 flex justify-between items-center border-b border-neurtal-200">
        <Link href="/" passHref>
          <a className="logo text-3xl text-transparent bg-clip-text pb-1 bg-gradient-to-r from-pink-400 via-fuchsia-400 to-pink-400">
            Jennifer
          </a>
        </Link>
        <div>
          <Link href="/contact" passHref>
            <a className="inline-flex items-center mr-2 px-3 py-2.5 rounded-md hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-neutral-300">
              Contact
            </a>
          </Link>
          <Link href="/resume">
            <a className="inline-flex items-center mr-2 px-3 py-2.5 rounded-md hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-neutral-300">
              Resume
            </a>
          </Link>
        </div>
      </nav>
      <main
        className="max-w-screen-lg mx-auto mt-24"
        style={{ minHeight: 'calc(100vh - 218px)' }}
      >
        {children}
      </main>
      <footer className="px-8 py-2.5 flex justify-between items-center border-t border-neurtal-200">
        <p className="logo text-3xl text-transparent bg-clip-text pb-1 bg-gradient-to-r from-pink-400 via-fuchsia-400 to-pink-400">
          Jennifer
        </p>
        <div>
          <Link href="/contact" passHref>
            <a className="inline-flex items-center mr-2 px-3 py-2.5 text-sm text-neutral-500 hover:text-neutral-400">
              Contact
            </a>
          </Link>
          <span className="text-xl">👩‍⚕️</span>
        </div>
      </footer>
    </div>
  );
}
