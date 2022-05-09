import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Container from 'src/components/layout/Container/Container';
import ProfessionalDocuments from 'src/components/ProfessionalDocuments/ProfessionalDocuments';
import ProgramOutcomesCards from 'src/components/ProgramOutcomesCards/ProgramOutcomesCards';
import Curriculum from 'src/components/Curriculum/Curriculum';

export default function Portfolio() {
  return (
    <Container>
      <Head>
        <title>Potfolio | Jennifer Spick</title>
        <meta
          content="Jennifer Spick is a healthcare administrative professional who focuses on simultaneously evolving with healthcare advancements"
          name="description"
        />
        <meta property="og:url" content="https://jenniferspick.com/portfolio" />
        <link rel="canonical" href="https://jenniferspick.com/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jennifer Spick" />
        <meta
          property="og:description"
          content="Jennifer Spick is a healthcare administrative professional who focuses on simultaneously evolving with healthcare advancements"
        />
        <meta property="og:title" content="Portfolio | Jennifer Spick" />
      </Head>

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
            I&apos;m Jennifer, a graduate of the Master of Science - Healthcare
            Administration Program through the University of Wisconsin, in
            partnership with the University of Wisconsin La Crosse. My focuses
            include surgical and perioperative services, leadership and
            management, public health and healthcare quality and safety.
          </p>
          <p className="mb-8">
            Welcome to my slice of the internet! As you navigate through my
            website, you will find out more about me and my accomplishments
            throughout my career and my MS HCA program. My education, work, and
            experience has molded me into a strong, qualified leader and
            I&apos;m excited to leave a positive impact in healthcare.
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

      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
        <div>
          <h2 className="text-5xl font-bold text-neutral-900 lg:text-left">
            Future Career Plans
          </h2>
          <p className="mb-8 ml-0 lg:mt-0 lg:mr-20">
            The future of my career is still unknown. I am optimistic that my
            education and experience will lead me to a management position where
            I will be able to showcase my motivation, determination, skillset
            and work ethic. I am passionate about continuing to evolve as a
            healthcare leader much like how healthcare continues to evolve
            today. As I enter into the professional world, I plan to use what
            I&apos;ve learned while also continuing to advance and grow. This
            program has granted me the ability to apply all the beneficial
            knowledge I&apos;ve learned while also continuing to improve
            wherever my path leads.
          </p>
        </div>
        <Image
          className="rounded-lg"
          height="400"
          width="300"
          src="/images/career.jpg"
          alt="Desk with Mac computer that says 'Do More.'"
        />
      </div>
    </Container>
  );
}
