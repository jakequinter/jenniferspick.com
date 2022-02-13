import React from 'react';
import Link from 'next/link';

type Props = {
  children?: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div>
      <nav className="border-neurtal-200 flex items-center justify-between border-b px-8 py-2.5">
        <Link href="/" passHref>
          <a className="logo bg-gradient-to-r from-pink-400 via-fuchsia-400 to-pink-400 bg-clip-text pb-1 text-3xl text-transparent">
            Jennifer
          </a>
        </Link>
        <div>
          <Link href="/portfolio" passHref>
            <a className="mr-2 inline-flex items-center rounded-md px-3 py-2.5 hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-300 focus:ring-offset-1">
              Portfolio
            </a>
          </Link>
          <Link href="/contact" passHref>
            <a className="mr-2 inline-flex items-center rounded-md px-3 py-2.5 hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-300 focus:ring-offset-1">
              Contact
            </a>
          </Link>
          <Link href="/assets/resume.pdf" passHref>
            <a
              className="mr-2 inline-flex items-center rounded-md px-3 py-2.5 hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-300 focus:ring-offset-1"
              download="Jennifer Spick Resume"
            >
              Resume
            </a>
          </Link>
        </div>
      </nav>
      <main
        className="mx-auto mt-24 max-w-screen-lg"
        style={{ minHeight: 'calc(100vh - 218px)' }}
      >
        {children}
      </main>
      <footer className="border-neurtal-200 flex items-center justify-between border-t px-8 py-2.5">
        <p className="logo bg-gradient-to-r from-pink-400 via-fuchsia-400 to-pink-400 bg-clip-text pb-1 text-3xl text-transparent">
          Jennifer
        </p>
        <div>
          <Link href="/contact" passHref>
            <a className="mr-2 inline-flex items-center px-3 py-2.5 text-sm text-neutral-500 hover:text-neutral-400">
              Contact
            </a>
          </Link>
          <span className="text-xl">👩‍⚕️</span>
        </div>
      </footer>
    </div>
  );
}
