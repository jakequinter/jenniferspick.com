import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@radix-ui/react-icons';

import Container from '../src/components/Container';

const Home: NextPage = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-4 items-center">
        <div>
          <p className="mb-4">
            Hi, I’m{' '}
            <span className="logo text-3xl text-neutral-900">Jennifer</span>!
            I’m an operating room coordinator at Massachusettes General Hospital
            in Boston, MA. I am also a master’s student at the{' '}
            <Link href="https://www.uwlax.edu/">
              <a className="text-blue-500">University of Wisconsin La Crosse</a>
            </Link>{' '}
            where I am finishing my final semester in the public health program.{' '}
          </p>
          <p className="mb-8">
            Aside from my professional and educational career, I enjoy nature,
            exercise, friends and family, and exploring my new home.
          </p>
          <button className="inline-flex font-medium items-center text-transparent px-4 py-3 bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-pink-400 border border-neutral-200 hover:ring-neutral-200 hover:ring-2 rounded-lg">
            <span>View portfolio</span>
            <ArrowRightIcon className="ml-2 text-pink-400" />
          </button>
        </div>
        <div className="ml-auto">
          <Image
            className="rounded-lg"
            src="/images/me.jpg"
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
