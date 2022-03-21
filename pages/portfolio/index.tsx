import Image from 'next/image';
import { motion } from 'framer-motion';

import Container from 'src/components/layout/Container/Container';
import ProfessionalDocuments from 'src/components/ProfessionalDocuments/ProfessionalDocuments';
import ProgramOutcomesCards from 'src/components/ProgramOutcomesCards/ProgramOutcomesCards';
import Curriculum from 'src/components/Curriculum/Curriculum';

export default function Portfolio() {
  return (
    <Container>
      <div className="mb-24 text-center md:mb-48">
        <h1 className="montserrat text-5xl text-neutral-900">
          Jennifer Spick, M.S., B.S.
        </h1>
        <h2 className="text-xl">
          Master of Science, Healthcare Administration
        </h2>
      </div>

      <div className="mb-24 grid grid-cols-1 items-center gap-4 md:mb-48 md:grid-cols-2">
        <div>
          <p className="mb-4">
            I’m Jennifer, a final semester graduate student in the Master of
            Science - Healthcare Administration Program through the University
            of Wisconsin, in partnership with the University of Wisconsin La
            Crosse. I’m focused on surgery and perioperative services,
            leadership and management, public health and healthcare policy and
            safety.
          </p>
          <p className="mb-8">
            Welcome to my slice of the internet! As you navigate through my
            website, you will find out more about me and my accomplishments
            throughout my career and my MS HCA program. My education, work, and
            experience has molded me into a strong, qualified leader and I’m
            excited to leave a positive impact on healthcare.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          animate={{ opacity: 1 }}
          className="mx-auto md:mx-0 md:ml-auto"
        >
          <Image
            className="rounded-lg"
            src="/images/jenPortfolio.jpg"
            alt="Jennifer"
            height="400"
            width="300"
          />
        </motion.div>
      </div>

      <Curriculum />
      <ProfessionalDocuments />
      <ProgramOutcomesCards />
    </Container>
  );
}
