import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProgramOutcomesCards() {
  const [isOpen, setIsOpen] = useState<string | null>(null);

  const items = [
    {
      id: '1',
      title: 'Leadership',
      description:
        'Address political, legal, regulatory, governmental, and ethical issues associated with diverse healthcare settings.',
    },
    {
      id: '2',
      title: 'Performance',
      description:
        'Performance, yadayadaydads, regulatory, governmental, and ethical issues',
    },
    {
      id: '3',
      title: 'Recruitment',
      description:
        'Performance, yadayadaydads, regulatory, governmental, and ethical issues',
    },
    {
      id: '4',
      title: 'Effectivness',
      description:
        'Performance, yadayadaydads, regulatory, governmental, and ethical issues',
    },
    {
      id: '5',
      title: 'Financial strategies',
      description:
        'Performance, yadayadaydads, regulatory, governmental, and ethical issues',
    },
    {
      id: '6',
      title: 'Communication',
      description:
        'Performance, yadayadaydads, regulatory, governmental, and ethical issues',
    },
  ];

  const handleCardClick = (id: string) => {
    if (id === isOpen) {
      setIsOpen(null);
    } else {
      setIsOpen(id);
    }
  };

  return (
    <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2">
      <div className="order-last grid grid-cols-1 gap-4 sm:grid-cols-2 lg:order-first">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            className={`${
              isOpen === item.id
                ? 'ring-2 ring-neutral-200'
                : 'flex h-20 items-center justify-center'
            } cursor-pointer rounded-xl border-2 border-neutral-200 hover:ring-2 hover:ring-neutral-200`}
            onClick={() => handleCardClick(item.id)}
          >
            <div className="order-first p-4 lg:order-last">
              <h2 className="text-center text-lg font-medium text-neutral-900">
                {item.title}
              </h2>
              {isOpen === item.id && <p className="mt-2">{item.description}</p>}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mb-8 ml-0 lg:mt-0 lg:ml-20">
        <h2 className="text-5xl font-bold text-neutral-900 lg:text-left">
          Progam Outcomes
        </h2>
        <p className="mt-2">
          Both the University of Wisconsin Madison and the University of
          Wisconsin La Crosse have fine-tuned their healthcare administration
          programs to be some of the best educational programs in the world.
          Through their continuous refinement, both the University of Wisconsin
          Madison and the University of Wisconsin La Crosse aim to graduate
          their students with the abilities to improve healthcare, access to
          healthcare, quality of healthcare, and reduction of cost.{' '}
        </p>
      </div>
    </div>
  );
}
