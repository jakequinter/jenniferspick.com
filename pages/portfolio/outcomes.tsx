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
        backToTop={false}
        courseName="U.S. Healthcare Systems"
        courseNumber="HCA 700"
        outcomes={outcomes.hca700}
        documents={documents.hca700}
        image={images.hca700}
      />
      <OutcomeSection
        sectionId="2"
        align="right"
        backToTop={false}
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
      <OutcomeSection
        align="right"
        sectionId="4"
        courseName="Healthcare Technology, Data, Analytics, and Information Governance"
        courseNumber="HCA 715"
        outcomes={outcomes.hca715}
        image={images.hca715}
      />
      <OutcomeSection
        sectionId="5"
        courseName="Healthcare Financial Management"
        courseNumber="HCA 720"
        outcomes={outcomes.hca720}
        documents={documents.hca720}
        image={images.hca720}
      />
      <OutcomeSection
        align="right"
        sectionId="6"
        courseName="Human Capital Management"
        courseNumber="HCA 730"
        outcomes={outcomes.hca730}
        documents={documents.hca730}
        image={images.hca730}
      />
      <OutcomeSection
        sectionId="7"
        courseName="Healthcare Operations and Project Management"
        courseNumber="HCA 740"
        outcomes={outcomes.hca740}
        documents={documents.hca740}
        image={images.hca740}
      />
      <OutcomeSection
        align="right"
        sectionId="8"
        courseName="Healthcare Quality and Performance Improvement"
        courseNumber="HCA 750"
        outcomes={outcomes.hca750}
        documents={documents.hca750}
        image={images.hca750}
      />
      <OutcomeSection
        sectionId="9"
        courseName="Health Law and Policy"
        courseNumber="HCA 760"
        outcomes={outcomes.hca760}
        image={images.hca760}
      />
      <OutcomeSection
        align="right"
        sectionId="10"
        courseName="Organization Development and Strategic Leadership in Healthcare"
        courseNumber="HCA 770"
        outcomes={outcomes.hca770}
        documents={documents.hca770}
        image={images.hca770}
      />
      <OutcomeSection
        sectionId="11"
        courseName="Current and Emerging Topics in Healthcare"
        courseNumber="HCA 780"
        outcomes={outcomes.hca780}
        documents={documents.hca740}
        image={images.hca780}
      />
    </Container>
  );
}
