import * as RadixTooltip from '@radix-ui/react-tooltip';
import Link from 'next/link';

type Props = {
  icon: React.ReactNode;
  label: string;
  href: string;
};

export default function Tooltip({ icon, label, href }: Props) {
  return (
    <RadixTooltip.Provider delayDuration={100}>
      <RadixTooltip.Root>
        <Link href={href} passHref>
          <a href={href} download>
            <RadixTooltip.Trigger
              className="mx-1 rounded-lg border-2 border-gray-200 p-4"
              aria-label={label}
            >
              {icon}
            </RadixTooltip.Trigger>
          </a>
        </Link>
        <RadixTooltip.Content
          data-testid={`tooltip-${label}`}
          className="mt-2 rounded-full  bg-neutral-700 px-2.5 py-0.5 text-white transition delay-300 duration-300 ease-in-out"
        >
          {label}
        </RadixTooltip.Content>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
