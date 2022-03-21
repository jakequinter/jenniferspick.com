import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@radix-ui/react-icons';

import Container from 'src/components/layout/Container/Container';

const Home: NextPage = () => {
  return (
    <Container showFooter={false}>
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
        <div>
          <p className="mb-4">
            Hi, I’m{' '}
            <span className="montserrat text-3xl text-neutral-900">
              Jennifer
            </span>
            ! I’m an operating room coordinator at Massachusettes General
            Hospital in Boston, MA. I am also a graduate student at the{' '}
            <Link href="https://www.uwlax.edu/grad/health-care-administration/">
              <a className="text-blue-500">University of Wisconsin La Crosse</a>
            </Link>{' '}
            where I am finishing my final semester in the healthcare
            administration program.{' '}
          </p>
          <p className="mb-8">
            Aside from my professional and educational career, I enjoy the
            outdoors, exercise, friends and family, and exploring my new home.
          </p>
          <Link href="/portfolio" passHref>
            <a className="inline-flex items-center rounded-lg border border-neutral-200 px-4 py-3 hover:ring-2 hover:ring-neutral-200">
              <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-pink-400  bg-clip-text font-medium text-transparent">
                View portfolio
              </span>
              <ArrowRightIcon className="ml-2 text-pink-400" />
            </a>
          </Link>
        </div>

        <div className="order-first mx-auto mb-24 md:order-last md:mx-0 md:ml-auto md:mb-0">
          <Image
            className="rounded-lg"
            src="/images/jenHomepage.jpg"
            alt="Jennifer"
            height="400"
            width="300"
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
