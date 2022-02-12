import React from 'react';
import Link from 'next/link';

import Container from 'src/components/Container';

export default function Contact() {
  return (
    <Container>
      <>
        <p className="text-neutral-900">Get in touch.</p>
        <div className="border-l-2 border-neutral-600 mt-8 hover:text-neutral-900 hover:border-neutral-900">
          <p className="ml-4">
            <Link href="mailto:jspick13@gmail.com?subject=Hello" passHref>
              <a>jspick13@gmail.com</a>
            </Link>
          </p>
        </div>
      </>
    </Container>
  );
}
