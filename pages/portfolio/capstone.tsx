import React from 'react';

import Container from 'src/components/layout/Container/Container';

export default function Capstone() {
  return (
    <Container>
      <div
        className="flex items-center justify-center"
        style={{ height: 'calc(100vh - 350px)' }}
      >
        <h1 className="montserrat max-w-sm text-center text-5xl text-neutral-900">
          Capstone Project Coming Soon
        </h1>
      </div>
    </Container>
  );
}
