import React from 'react';
import { BsPhone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { RiLinkedinFill } from 'react-icons/ri';

import Shell from '../components/Shell';
import Heading from '../components/Heading';
import Divider from '../components/Divider';

const contact = () => {
  return (
    <Shell>
      <Heading title="What's Next?" subtitle="Let's get in touch!" />
      <div>
        <p className="pb-2">
          Please feel free to reach out to me directly, via email, or send me a
          message on LinkedIn. I will do my best to get back to you as quickly
          as possible.
        </p>
        <p className="pb-2">
          I am currently open to new opportunities that may arise. I am in the
          process of moving to the Boston Metropolitan Area. Jobs that I'm
          interested in are healthcare administration, heathcare coordination,
          healthcare business, and marketing roles.
        </p>
        <p>I look forward to hearing from you!</p>
      </div>
      <Divider />
      <div>
        <h5 className="text-2xl font-bold pb-4" style={{ color: '#333333' }}>
          Contact Information
        </h5>
        <div className="flex items-center pb-2">
          <FiMail className="mr-8" />
          <a
            className="text-blue-500 hover:underline"
            href="mailto:jspick13@gmail.com"
          >
            jspick13@gmail.com
          </a>
        </div>
        <div className="flex items-center pb-2">
          <RiLinkedinFill className="mr-8" />
          <a
            className="text-blue-500 hover:underline"
            href="https://www.linkedin.com/in/jennifer-spick/"
            target="_blank"
          >
            www.linkedin.com/in/jennifer-spick/
          </a>
        </div>
        <div className="flex items-center pb-2">
          <BsPhone className="mr-8" />
          <a
            className="text-blue-500 hover:underline"
            href="tel:1-920-574-0620"
          >
            (920) 574-0620
          </a>
        </div>
      </div>
    </Shell>
  );
};

export default contact;
