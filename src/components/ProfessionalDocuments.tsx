import React from 'react';
import Link from 'next/link';
import * as Tooltip from '@radix-ui/react-tooltip';
import {
  CardStackIcon,
  ClipboardIcon,
  FileTextIcon,
} from '@radix-ui/react-icons';

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
        <RadixTooltip
          icon={<FileTextIcon className="h-5 w-5" />}
          label="Resume"
        />
        <RadixTooltip
          icon={<CardStackIcon className="h-5 w-5" />}
          label="Transcripts"
        />
        <RadixTooltip
          icon={<ClipboardIcon className="h-5 w-5" />}
          label="Courses"
        />
      </div>
    </div>
  );
}

type RadixToolTipProps = {
  icon: React.ReactNode;
  label: string;
};

function RadixTooltip({ icon, label }: RadixToolTipProps) {
  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger className="mx-1 rounded-lg border-2 border-gray-200 p-4">
          <Link href="/assets/resume.pdf" passHref>
            <a download>{icon}</a>
          </Link>
        </Tooltip.Trigger>
        <Tooltip.Content className="mt-2 rounded-full bg-neutral-700 px-2.5 py-0.5 text-white">
          {label}
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
