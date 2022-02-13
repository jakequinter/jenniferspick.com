import Link from 'next/link';
import * as Popover from '@radix-ui/react-popover';
import { ChevronDownIcon } from '@radix-ui/react-icons';

type Props = {
  children?: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div>
      <nav className="border-neurtal-200 flex items-center justify-between border-b px-8 py-2.5">
        <Link href="/" passHref>
          <a className="montserrat bg-gradient-to-r from-pink-400 via-fuchsia-400 to-pink-400 bg-clip-text pb-1 text-3xl text-transparent">
            Jennifer
          </a>
        </Link>
        <div>
          {/* <Link href="/portfolio" passHref>
            <a className="mr-2 inline-flex items-center rounded-md px-3 py-2.5 hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-300 focus:ring-offset-1">
              Portfolio
            </a>
          </Link> */}
          <Select />
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
        className="mx-auto mt-24 max-w-screen-lg px-4 xl:px-0"
        style={{ minHeight: 'calc(100vh - 218px)' }}
      >
        {children}
      </main>
      <footer className="border-neurtal-200 mt-24 flex items-center justify-between border-t px-8 py-2.5">
        <p className="montserrat bg-gradient-to-r from-pink-400 via-fuchsia-400 to-pink-400 bg-clip-text pb-1 text-3xl text-transparent">
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

function Select() {
  return (
    <div className="mr-2 inline-flex items-center rounded-md px-3 py-2.5 hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-300 focus:ring-offset-1">
      <Popover.Root>
        <Popover.Trigger className="flex items-center">
          <span className="mr-2">Portfolio</span> <ChevronDownIcon />
        </Popover.Trigger>
        <Popover.Anchor />
        <Popover.Content
          className="mt-5 flex w-40 flex-col rounded-lg border border-neutral-200 bg-white shadow"
          align="end"
        >
          <Link href="/portfolio" passHref>
            <a className="rounded-t-lg p-2 hover:bg-gray-50 hover:text-neutral-900">
              Overview
            </a>
          </Link>
          <Link href="/portfolio/leadership" passHref>
            <a className="rounded-t-lg p-2 hover:bg-gray-50 hover:text-neutral-900">
              Leadership
            </a>
          </Link>
          <Link href="/portfolio/performance" passHref>
            <a className="p-2 hover:bg-gray-50 hover:text-neutral-900">
              Performance
            </a>
          </Link>
          <Link href="/portfolio/recruitment" passHref>
            <a className="p-2 hover:bg-gray-50 hover:text-neutral-900">
              Recruitment
            </a>
          </Link>
          <Link href="/portfolio/effectiveness" passHref>
            <a className="p-2 hover:bg-gray-50 hover:text-neutral-900">
              Effectiveness
            </a>
          </Link>
          <Link href="/portfolio/financial-strategies" passHref>
            <a className="p-2 hover:bg-gray-50 hover:text-neutral-900">
              Financial strategies
            </a>
          </Link>
          <Link href="/portfolio/communication" passHref>
            <a className="rounded-b-lg p-2 hover:bg-gray-50 hover:text-neutral-900">
              Communication
            </a>
          </Link>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
}
