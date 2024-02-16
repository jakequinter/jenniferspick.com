import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@radix-ui/react-icons';

import Container from 'src/components/layout/Container/Container';

const Home: NextPage = () => {
  return (
    <Container showFooter={false}>
      <Head>
        <title>Jennifer Spick</title>
        <meta
          content="Jennifer Spick is a healthcare administrative professional who focuses on simultaneously evolving with healthcare advancements"
          name="description"
        />
        <meta property="og:url" content="https://jenniferspick.com" />
        <link rel="canonical" href="https://jenniferspick.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jennifer Spick" />
        <meta
          property="og:description"
          content="Jennifer Spick is a healthcare administrative professional who focuses on simultaneously evolving with healthcare advancements"
        />
        <meta property="og:title" content="Jennifer Spick" />
      </Head>
      <div className="grid grid-cols-1 items-center gap-4 pb-24 md:grid-cols-2">
        <div>
          <p className="mb-4">
            Hi, I&apos;m{' '}
            <span className="montserrat text-3xl text-neutral-900">
              Jennifer
            </span>
            ! I&apos;m a radiation oncology practice manager at Massachusetts
            General Hospital in Boston, MA. I received my Master&apos;s degree
            in healthcare administration from the{' '}
            <Link href="https://www.uwlax.edu/grad/health-care-administration/">
              <a className="text-blue-500">University of Wisconsin La Crosse</a>
            </Link>{' '}
            in 2022.
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
