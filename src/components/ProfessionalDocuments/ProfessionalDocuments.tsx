import React from 'react';
import Link from 'next/link';
import * as Tooltip from '@radix-ui/react-tooltip';
import {
  CardStackIcon,
  ClipboardIcon,
  FileTextIcon,
} from '@radix-ui/react-icons';
import { motion } from 'framer-motion';

const documents = [
  {
    id: 1,
    icon: <FileTextIcon />,
    label: 'Resume',
    href: '/assets/resume.pdf',
  },
  {
    id: 2,
    icon: <CardStackIcon />,
    label: 'Transcripts',
    href: '/assets/resume.pdf',
  },
  {
    id: 3,
    icon: <ClipboardIcon />,
    label: 'Courses',
    href: '/assets/resume.pdf',
  },
];

export default function ProfessionalDocuments() {
  return (
    <div className="mx-auto mb-48 max-w-md">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-neutral-900">
          Professional Documents for your leisure
        </h2>
        <h3 className="text-xl">
          Please feel free to view, download, and share these documents with
          your colleagues.
        </h3>
      </div>
      <div className="mt-8 flex justify-center">
        {documents.map((doc, idx) => (
          <motion.div
            key={doc.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <RadixTooltip icon={doc.icon} label={doc.label} href={doc.href} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

type RadixToolTipProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
};

function RadixTooltip({ icon, label, href }: RadixToolTipProps) {
  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Link href={href} passHref>
          <a href={href} download>
            <Tooltip.Trigger
              className="mx-1 rounded-lg border-2 border-gray-200 p-4"
              aria-label={label}
            >
              {icon}
            </Tooltip.Trigger>
          </a>
        </Link>
        <Tooltip.Content
          data-testid={`tooltip-${label}`}
          className="mt-2 rounded-full bg-neutral-700 px-2.5 py-0.5 text-white transition delay-300 duration-300 ease-in-out"
        >
          {label}
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
