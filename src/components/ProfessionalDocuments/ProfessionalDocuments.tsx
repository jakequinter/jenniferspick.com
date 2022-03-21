import React from 'react';
import {
  CardStackIcon,
  ClipboardIcon,
  FileTextIcon,
} from '@radix-ui/react-icons';
import { motion } from 'framer-motion';

import Tooltip from 'src/components/elements/Tooltip';

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
    href: '/assets/transcript.pdf',
  },
  {
    id: 3,
    icon: <ClipboardIcon />,
    label: 'Courses',
    href: 'https://uwex.wisconsin.edu/healthcare-administration/#curriculum',
  },
];

export default function ProfessionalDocuments() {
  return (
    <div className="mx-auto mb-24 max-w-md md:mb-48">
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
            <Tooltip icon={doc.icon} label={doc.label} href={doc.href} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
