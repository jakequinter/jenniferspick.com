import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { FiInfo } from 'react-icons/fi';

import Container from 'src/components/layout/Container/Container';

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

      <section className="mb-48">
        <div
          id="1"
          className="grid grid-cols-1 items-center gap-4 md:grid-cols-2"
        >
          <div>
            <div className="mb-4">
              <h2 className="text-5xl font-semibold text-neutral-900">
                U.S. Healthcare Systems
              </h2>
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-200 via-fuchsia-300 to-pink-200 px-3 py-0.5 text-sm font-medium text-neutral-900">
                HCA 700
              </span>
            </div>
            <h3 className="mb-2 mt-4 text-xl font-medium">Outcomes</h3>
            <ul className="ml-8 list-disc space-y-2">
              <li>
                Explain how the evolution of healthcare has resulted in
                disparate services that lack the components and operations of a
                system
              </li>
              <li>
                Examine the various healthcare payment systems and how each
                contribute to the functioning of healthcare today
              </li>
              <li>
                Analyze how the financial and cultural incentrives in the
                healthcare system today diverges from and is consistenet with
                supporting population health outcomes
              </li>
              <li>
                Utilize knowledge gained from the course to describe likely
                changes to the healthcare system
              </li>
            </ul>

            <div className="mt-4">
              <h3 className="mb-2 mt-4 text-xl font-medium">Documents</h3>
              <ul className="ml-8 list-disc space-y-2">
                <li>
                  <span className="flex items-center">
                    <Link href="/" passHref>
                      <a className="mr-2 text-blue-500 hover:underline">
                        Value-Based Healthcare
                      </a>
                    </Link>
                    <Tooltip
                      icon={
                        <FiInfo
                          size="18"
                          className="fill-blue-500 text-white"
                        />
                      }
                      label="The attached document displays my thoughts on a number of questions regarding the film “Escape Fire.” This film recognized the impact that rising healthcare costs has on employers and employees."
                    />
                  </span>
                </li>
                <li>
                  <span className="flex items-center">
                    <Link href="/" passHref>
                      <a className="mr-2 text-blue-500 hover:underline">
                        Payment Systems
                      </a>
                    </Link>
                    <Tooltip
                      icon={
                        <FiInfo
                          size="18"
                          className="fill-blue-500 text-white"
                        />
                      }
                      label="This paper provides descriptive overviews of fee-for-service and capitation payment systems, as well as value-based care, and the relationship between the two.  "
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="ml-auto">
            <img
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
              height="225"
              width="388"
              alt="person sitting"
            />
          </div>
        </div>
      </section>

      <section className="mb-48">
        <div
          id="2"
          className="grid grid-cols-1 items-center gap-10 md:grid-cols-2"
        >
          <div>
            <img
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5"
              height="225"
              width="388"
              alt="person sitting"
            />
          </div>

          <div>
            <div className="mb-4">
              <h2 className="text-5xl font-semibold text-neutral-900">
                Population Health and Epidemiology
              </h2>
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-200 via-fuchsia-300 to-pink-200 px-3 py-0.5 text-sm font-medium text-neutral-900">
                HCA 705
              </span>
            </div>
            <h3 className="mb-2 mt-4 text-xl font-medium">Outcomes</h3>
            <ul className="ml-8 list-disc space-y-2">
              <li>
                Interpret the broad definition of health and health determinants
                at the individual, patient, and polulation level
              </li>
              <li>
                Recognize the principles of epidemiology as a basic science for
                medical research, evidence-based clinical practive, and public
                health practice
              </li>
              <li>
                Identify the main study designs, methods, statistical
                inferences, and basic methodology terminology in clinical and
                epidemiology research
              </li>
              <li>
                Interpret the different and complementary nature of individual-
                and population-based strategies for prevention
              </li>
              <li>
                Design basic strategies to identify and address health needs and
                health disparities of a patient population
              </li>
              <li>
                Apply epidemiology/biostatistics to the evaluation of healthcare
                quality
              </li>
              <li>
                Analyze the basic features of U.S. healthcare and public health
                systems
              </li>
            </ul>

            <div className="mt-4">
              <h3 className="mb-2 mt-4 text-xl font-medium">Documents</h3>
              <ul className="ml-8 list-disc space-y-2">
                <li>
                  <span className="flex items-center">
                    <Link href="/" passHref>
                      <a className="mr-2 text-blue-500 hover:underline">
                        Literature Review: Non-Communicable Diseases
                      </a>
                    </Link>
                    <Tooltip
                      icon={
                        <FiInfo
                          size="18"
                          className="fill-blue-500 text-white"
                        />
                      }
                      label="Non-communicable diseases are a leading cause of death worldwide. My objective with this assignment was addressing what non-communicable diseases are and how we can help prevent them. Improving health status nationally and globally is something that all healthcare officials should aim to achieve. "
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

type Props = {
  icon: React.ReactNode;
  label: string;
};

function Tooltip({ icon, label }: Props) {
  return (
    <RadixTooltip.Provider delayDuration={100}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger>{icon}</RadixTooltip.Trigger>
        <RadixTooltip.Content className="max-w-sm rounded-lg bg-neutral-900 p-3 pt-2 text-white transition delay-300 duration-300 ease-in-out">
          <RadixTooltip.Arrow
            className="fill-neutral-900"
            width="15"
            height="7.5"
          />
          {label}
        </RadixTooltip.Content>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
