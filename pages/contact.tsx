import Head from 'next/head';
import Link from 'next/link';

import Container from 'src/components/layout/Container/Container';

export default function Contact() {
  return (
    <Container>
      <Head>
        <title>Contact | Jennifer Spick</title>
        <meta
          content="Jennifer Spick is a healthcare administrative professional who focuses on simultaneously evolving with healthcare advancements"
          name="description"
        />
        <meta property="og:url" content="https://jenniferspick.com/contact" />
        <link rel="canonical" href="https://jenniferspick.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jennifer Spick" />
        <meta
          property="og:description"
          content="Jennifer Spick is a healthcare administrative professional who focuses on simultaneously evolving with healthcare advancements"
        />
        <meta property="og:title" content="Contact | Jennifer Spick" />
      </Head>
      <p className="text-neutral-900">Get in touch.</p>
      <div className="mt-8 border-l-2 border-neutral-600 hover:border-neutral-900 hover:text-neutral-900">
        <p className="ml-4">
          <Link href="mailto:jspick13@gmail.com?subject=Hello" passHref>
            <a>jspick13@gmail.com</a>
          </Link>
        </p>
      </div>
    </Container>
  );
}
