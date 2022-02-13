import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Container from 'src/components/layout/container/Container';

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState<string | null>(null);
  console.log(isOpen);

  const items = [
    {
      id: '1',
      title: 'Leadership',
      description:
        'Address political, legal, regulatory, governmental, and ethical issues',
    },
    {
      id: '2',
      title: 'Performance',
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
    <Container>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 grid grid-cols-2 gap-4">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              // initial={{ borderRadius: 20 }}
              className={`${
                isOpen === item.id ? 'h-50' : 'flex h-10 items-center'
              } rounded-xl border-2 border-neutral-200`}
              onClick={() => handleCardClick(item.id)}
            >
              <div className="p-4">
                <h2 className="text-lg text-neutral-900">{item.title}</h2>
                {isOpen === item.id && (
                  <p className="mt-2">{item.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <div>test</div>
      </div>
    </Container>
  );
}
