import React from 'react';
import { BiChevronsRight } from 'react-icons/bi';

import Shell from '../components/Shell';
import Heading from '../components/Heading';

interface CertItemProps {
  text: string;
  isRight?: boolean;
}

const CertItem = ({ text, isRight }: CertItemProps) => (
  <div className="flex items-center">
    <BiChevronsRight className="mr-8" />
    <p>{text}</p>
  </div>
);

const resume = () => {
  return (
    <Shell>
      <Heading
        title="Resume & Qualifications"
        subtitle="Exploring potention new job opportunities and location."
      />
      <div className="flex flex-col justify-center">
        <p className="pb-4">
          I have posted the PDF version of my resume here for your needs. Please
          feel free to view or download to your computer. Feel free to share
          with friends, businesses, colleagues or your workplace.
        </p>
        <a
          className="bg-green-600 text-white text-center text-lg py-2 px-4 rounded hover:bg-green-700"
          href="/resume.pdf"
          target="_blank"
        >
          View pdf
        </a>
      </div>
      <hr className="border-t-2 border-gray-200 my-16" />
      <div>
        <h5 className="text-2xl font-bold pb-2" style={{ color: '#333333' }}>
          Education
        </h5>
        <p className="py-2">
          I obtained my undergraduate degree from the{' '}
          <a
            className="text-blue-500 hover:underline"
            href="https://uwosh.edu/"
            target="_blank"
          >
            University of Wisconsin - Oshkosh
          </a>{' '}
          in 2018. I received my Bachelors of Science in Biology, along with a
          Business Administration minor with a Healthcare Business emphasis.
        </p>
        <p>
          I am currently pursuing my graduate degree from the{' '}
          <a
            className="text-blue-500 hover:underline"
            href="https://www.uwlax.edu/"
            target="_blank"
          >
            University of Wisconsin - La Crosse
          </a>
          . I will be graduating with my Masters of Healthcare Administration
          (MHA) in Spring 2022.
        </p>
      </div>
      <hr className="border-t-2 border-gray-200 my-16" />
      <div>
        <h5 className="text-2xl font-bold pb-4" style={{ color: '#333333' }}>
          Certificates and skills
        </h5>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 sm: gap-0 md:gap-2 sm:justify-items-start md:justify-items-center">
          <div>
            <CertItem text="Certified pharmacy technician" />
            <CertItem text="Microsoft Office 365" />
            <CertItem text="Canva" />
          </div>
          <div>
            <CertItem isRight text="BLS - CPR certified" />
            <CertItem isRight text="Adobe Creative Suite" />
            <CertItem isRight text="Asana" />
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default resume;
