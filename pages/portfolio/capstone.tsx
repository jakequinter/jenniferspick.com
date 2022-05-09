import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';

import Container from 'src/components/layout/Container/Container';

export default function Capstone() {
  return (
    <Container>
      <Head>
        <title>Capstone | Jennifer Spick</title>
        <meta
          content="Jennifer Spick is a healthcare administrative professional who focuses on simultaneously evolving with healthcare advancements"
          name="description"
        />
        <meta property="og:url" content="https://jenniferspick.com/capstone" />
        <link rel="canonical" href="https://jenniferspick.com/capstone" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jennifer Spick" />
        <meta
          property="og:description"
          content="Jennifer Spick is a healthcare administrative professional who focuses on simultaneously evolving with healthcare advancements"
        />
        <meta property="og:title" content="Capstone | Jennifer Spick" />
      </Head>

      <div className="mx-auto mb-24 max-w-2xl text-center md:mb-48">
        <h1 className="montserrat text-5xl text-neutral-900">
          Forecasting Inventory for Future Ambulatory Care Centers (ASC)
        </h1>
      </div>

      <div className="mb-24 grid grid-cols-1 items-center gap-4 md:mb-48 md:grid-cols-2">
        <div>
          <p className="mb-4">
            The purpose to pursue this project was determining useful and missed
            data as part of Waltham&apos;s leadership strategy for predicting
            supplies and instrumentation for future outpatient surgical centers.
            Operating rooms are a significant revenue source, and domain for
            waste and cost. Managing supplies and instrumentation is not easy
            when considering numerous variables such as cost, space, and
            surgeons preferences.{' '}
          </p>

          <Link
            href="https://docs.google.com/document/d/1YhpusWv3wMgjSGHSTjDr3ZcIzMPxGnWU"
            passHref
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center rounded-lg border border-neutral-200 px-4 py-3 hover:ring-2 hover:ring-neutral-200"
            >
              <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-pink-400  bg-clip-text font-medium text-transparent">
                View capstone
              </span>
              <ArrowRightIcon className="ml-2 text-pink-400" />
            </a>
          </Link>
        </div>
        <div className="mx-auto mt-8 md:mx-0 md:ml-auto md:mt-0">
          <Image
            className="rounded-lg"
            src="/images/mgh.jpg"
            alt="Jennifer"
            height="400"
            width="300"
          />
        </div>
      </div>
    </Container>
  );
}
