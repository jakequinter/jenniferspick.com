import React from 'react';
import useSWR from 'swr';

import Shell from '../components/Shell';
import Heading from '../components/Heading';
import TravelList from '../components/TravelList';

const about = () => {
  return (
    <Shell>
      <Heading
        title="About Me"
        subtitle="Welcome to my little slice of the internet."
      />
      <div>
        <img
          className="rounded mx-auto mb-16"
          style={{ maxHeight: '500px' }}
          src="/me.jpg"
          alt="self image"
        />
      </div>
      {/* </div> */}
      <p className="pb-2">
        Hello 👋🏻 &nbsp;I'm Jennifer Spick. I am currently involved in a variety
        of things that intrigue me.
      </p>
      <p className="pb-2">
        Right now I am the Medical Billing Specialist and Receptionist at{' '}
        <a
          className="text-blue-500 hover:underline"
          href="https://www.motionworkspt.com/"
          target="_blank"
        >
          MotionWorks Physical Therapy
        </a>
        , where I get to manage medical billing and coding, create schedules for
        the Doctor's of Physical Therapy and also serve as the first point of
        contact for patients.
      </p>
      <p className="pb-2">
        I have been the Lead Pharmacy Technician at{' '}
        <a
          className="text-blue-500 hover:underline"
          href="https://www.cvs.com/"
          target="_blank"
        >
          CVS Pharmacy
        </a>{' '}
        sincw 2018 , where I get to assist in the training and development of
        new hires. I spent the majority of my undergraduate degree working here.
      </p>
      <p>
        Recently (last one I promise), I started as the Communications
        Specialist for{' '}
        <a
          className="text-blue-500 hover:underline"
          href="https://kinleykay.com/"
          target="_blank"
        >
          Kinley Kay Beauty Studio
        </a>
        , where I get to spend my time working on a hobby of mine. I get to work
        on marketing, design, and the social media accounts, which is amazing.
      </p>
      <hr className="border-t-2 border-gray-200 my-16" />
      <div>
        <h5 className="text-2xl font-bold pb-2" style={{ color: '#333333' }}>
          Interests
        </h5>
        <p>
          Each year I gain more interest and find topics and areas of study
          intriguing. My main hobbies include reading, health and fitness,
          hiking, traveling, learning, music, and design.
        </p>
      </div>
      <hr className="border-t-2 border-gray-200 my-16" />
      <TravelList />
    </Shell>
  );
};

export default about;
