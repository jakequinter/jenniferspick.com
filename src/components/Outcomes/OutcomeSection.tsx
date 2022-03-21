import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { FiArrowUp, FiInfo } from 'react-icons/fi';

type Outcome = {
  id: number;
  text: string;
};

type Document = {
  id: number;
  text: string;
  href: string;
  tooltipText: string;
};

type Image = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
};

type Props = {
  align?: string;
  backToTop?: boolean;
  courseName: string;
  courseNumber: string;
  image: Image;
  sectionId: string;
  outcomes: Outcome[];
  documents?: Document[];
};

export default function OutcomeSection({
  align = 'left',
  backToTop = true,
  courseName,
  courseNumber,
  image,
  sectionId,
  outcomes,
  documents,
}: Props) {
  return (
    <section className="mb-24 md:mb-48">
      <div
        id={sectionId}
        className="grid grid-cols-1 items-center gap-4 md:grid-cols-2"
      >
        <div
          className={`${
            align === 'left' ? '' : 'order-first ml-auto md:order-last'
          }`}
        >
          <div className="mb-4">
            <h2 className="text-5xl font-semibold text-neutral-900">
              {courseName}
            </h2>
            <div className="flex items-center">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-200 via-fuchsia-300 to-pink-200 px-3 py-0.5 text-sm font-medium text-neutral-900">
                {courseNumber}
              </span>
              {backToTop ? (
                <button
                  onClick={() => window.scrollTo(0, 0)}
                  className="ml-4 inline-flex items-center text-sm text-blue-500 hover:underline"
                >
                  <FiArrowUp size="14" className="mr-2" /> Back to top
                </button>
              ) : null}
            </div>
          </div>
          <h3 className="mb-2 mt-4 text-xl font-medium">Outcomes</h3>
          <ul className="ml-8 list-disc space-y-2">
            {outcomes.map(outcome => (
              <li key={outcome.id}>{outcome.text}</li>
            ))}
          </ul>

          {documents ? (
            <div className="mt-4">
              <h3 className="mb-2 mt-4 text-xl font-medium">Documents</h3>
              <ul className="ml-8 list-disc space-y-2">
                {documents?.map(document => (
                  <li key={document.id}>
                    <span className="flex items-center">
                      <Link href={document.href} passHref>
                        <a
                          className="mr-2 text-blue-500 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {document.text}
                        </a>
                      </Link>
                      <Tooltip label={document.tooltipText} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
        <div
          className={`${
            align === 'left' ? 'md:ml-auto' : 'order-last md:order-first'
          } mx-auto mt-4 md:mx-0 md:mt-0`}
        >
          <Image
            className="rounded-xl"
            src={image.src}
            height={image.height || 300}
            width={image.width || 450}
            alt={image.alt}
          />
        </div>
      </div>
    </section>
  );
}

type TooltipProps = {
  label: string;
};

function Tooltip({ label }: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={100}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger>
          <FiInfo
            size="18"
            className="cursor-default fill-blue-500 text-white"
          />
        </RadixTooltip.Trigger>
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
