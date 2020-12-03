import React from 'react';

import Shell from '../components/Shell';

const about = () => {
  return (
    <Shell>
      <img
        className=" max-h-96 rounded mx-auto pb-16"
        src="/me.jpg"
        alt="self image"
      />
      <p className="pb-2">
        Hello 👋🏻 , I'm Jennifer Spick. I am currently involved in a variety of
        things that intrigue me.
      </p>
      <p className="pb-2">
        Right now I am the Medical Billing Specialist and Receptionist at{' '}
        <a className="text-blue-500" href="https://www.motionworkspt.com/">
          MotionWorks Physical Therapy
        </a>
        , where I get to help doctor's with their schedules and also maintain
        patient care.
      </p>
      <p className="pb-2">
        I am also the Lead Pharmacy Technician at{' '}
        <a className="text-blue-500" href="https://www.cvs.com/">
          CVS Pharmacy
        </a>
        , where I get to assist in the training and development of new hires.
        This company holds a special place in my heart, as it is where I spent
        the majority of my undergraduate degree working.
      </p>
      <p>
        Recently (last one I promise), I started as the Communications
        Specialist for{' '}
        <a className="text-blue-500" href="https://kinleykay.com/">
          Kinley Kay Beauty Studio
        </a>
        , where I get to spend my time working on a hobby of mine. I get to work
        on marketing, design, and the social media accounts, which is amazing.
      </p>
      <hr className="border-t-2 border-gray-200 my-16" />
      <h5 className="text-2xl font-bold" style={{ color: '#333333' }}>
        Interests
      </h5>
    </Shell>
  );
};

export default about;
