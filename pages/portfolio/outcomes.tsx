import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Container from 'src/components/layout/Container/Container';
import OutcomeSection from 'src/components/Outcomes/OutcomeSection';
import { outcomes, documents, images } from 'src/components/Outcomes/data';

export default function Outcomes() {
  return (
    <Container>
      <div className="mx-auto mb-48 max-w-md text-center">
        <h1 className="montserrat text-5xl text-neutral-900">
          Course Outcomes and Relevant Coursework
        </h1>
        <h2 className="text-xl">
          Take a look at some projects and assignments completed throughout my
          program
        </h2>
      </div>

      <OutcomeSection
        sectionId="1"
        courseName="U.S. Healthcare Systems"
        courseNumber="HCA 700"
        outcomes={outcomes.hca700}
        documents={documents.hca700}
        image={images.hca700}
      />
      <OutcomeSection
        align="right"
        sectionId="2"
        courseName="Population Health and Epidemiology"
        courseNumber="HCA 705"
        outcomes={outcomes.hca705}
        documents={documents.hca705}
        image={images.hca705}
      />
      <OutcomeSection
        sectionId="3"
        courseName="Communications and Marketing in Healthcare"
        courseNumber="HCA 710"
        outcomes={outcomes.hca710}
        documents={documents.hca710}
        image={images.hca710}
      />
    </Container>
  );
}
