import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProgramOutcomesCards() {
  const [isOpen, setIsOpen] = useState<string | null>(null);

  const items = [
    {
      id: '1',
      title: 'Leadership',
    },
    {
      id: '2',
      title: 'Performance',
    },
    {
      id: '3',
      title: 'Recruitment',
    },
    {
      id: '4',
      title: 'Effectiveness',
    },
    {
      id: '5',
      title: 'Financial strategies',
    },
    {
      id: '6',
      title: 'Communication',
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
    <div className="mb-24 grid grid-cols-1 items-center gap-4 md:mb-48 lg:grid-cols-2">
      <div className="order-last grid grid-cols-1 gap-4 sm:grid-cols-2 lg:order-first">
        {items.map((item, idx) => (
          <motion.div
            key={item.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <motion.div
              layout
              className="flex h-20 items-center justify-center rounded-xl bg-neutral-200 p-1 hover:border-0 hover:bg-gradient-to-r hover:from-pink-200 hover:via-fuchsia-300 hover:to-pink-200"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.5 },
              }}
            >
              <div className="order-first flex h-full w-full flex-shrink-0 items-center justify-center rounded-lg bg-white lg:order-last">
                <h2 className="text-lg font-medium text-neutral-900">
                  {item.title}
                </h2>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="mb-8 ml-0 lg:mt-0 lg:ml-20">
        <h2 className="text-5xl font-bold text-neutral-900 lg:text-left">
          Progam Outcomes
        </h2>
        <p className="mt-2">
          Both the University of Wisconsin Extended Campus and the University of
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
