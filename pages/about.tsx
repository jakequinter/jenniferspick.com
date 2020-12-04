import React from 'react';

import Shell from '../components/Shell';
import Heading from '../components/Heading';
import TravelCard from '../components/TravelCard';

const about = () => {
  return (
    <Shell>
      <Heading
        title="About Me"
        subtitle="Welcome to my little slice of the internet."
      />
      {/* <div className="flex justify-between items-center pb-16"> */}
      {/* <div className="flex flex-col text-center">
          <h3 className="text-2xl">Hello 👋🏻</h3>
          <h3 className="text-xl">I'm Jennifer Spick.</h3>
        </div> */}
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
        >
          MotionWorks Physical Therapy
        </a>
        , where I get to help doctor's with their schedules and also maintain
        patient care.
      </p>
      <p className="pb-2">
        I am also the Lead Pharmacy Technician at{' '}
        <a
          className="text-blue-500 hover:underline"
          href="https://www.cvs.com/"
        >
          CVS Pharmacy
        </a>
        , where I get to assist in the training and development of new hires.
        This company holds a special place in my heart, as it is where I spent
        the majority of my undergraduate degree working.
      </p>
      <p>
        Recently (last one I promise), I started as the Communications
        Specialist for{' '}
        <a
          className="text-blue-500 hover:underline"
          href="https://kinleykay.com/"
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
      <div>
        <h5 className="text-2xl font-bold pb-2" style={{ color: '#333333' }}>
          Travel
        </h5>
        <TravelCard
          text="Spent Thanksgiving with my mom"
          location="Knoxville, TN"
          date="November 2020"
        />
      </div>
    </Shell>
  );
};

export default about;
