import Image from 'next/image';
import { motion } from 'framer-motion';

import Container from 'src/components/layout/container/Container';
import ProfessionalDocuments from 'src/components/ProfessionalDocuments';
import ProgramOutcomesCards from 'src/components/ProgramOutcomesCards';

export default function Portfolio() {
  return (
    <Container>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { delay: 0.4 } },
        }}
      >
        <div className="mb-48 text-center">
          <h1 className="montserrat text-4xl text-neutral-900">
            Jennifer Spick, MS, BS
          </h1>
          <h2 className="text-xl">
            Master of Science, Healthcare Administration
          </h2>
        </div>

        <div className="mb-48 grid grid-cols-1 items-center gap-4 md:grid-cols-2">
          <div>
            <p className="mb-4">
              I’m Jennifer, a final semester graduate student in the Master of
              Science - Healthcare Administration Program through the University
              of Wisconsin Madison, in partnership with the University of
              Wisconsin La Crosse. I’m focused on surgery and perioperative
              services, leadership and management, public health and healthcare
              policy and safety.
            </p>
            <p className="mb-8">
              Welcome to my slice of the internet! As you navigate through my
              website, you will find out more about me and my accomplishments
              throughout my career and my MS HCA program. My education, work,
              and experience has molded me into a strong, qualified leader and
              I’m excited to leave a positive impact on healthcare.
            </p>
          </div>
          <div className="mx-auto md:mx-0 md:ml-auto">
            <Image
              className="rounded-lg"
              src="/images/me.jpg"
              alt="Jennifer"
              height="400"
              width="300"
            />
          </div>
        </div>
        <ProfessionalDocuments />
      </motion.div>
      <ProgramOutcomesCards />
    </Container>
  );
}
