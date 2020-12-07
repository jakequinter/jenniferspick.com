import React, { useState } from 'react';
import Head from 'next/head';

import Shell from '../components/Shell';

export default function Home() {
  return (
    <Shell>
      <div
        className="flex items-center"
        style={{ minHeight: 'Calc(100vh - 250px)' }}
      >
        <div className=" w-full p-6 text-center">
          {' '}
          <h1 className="text-4xl font-bold" style={{ color: '#333333' }}>
            Hey, I'm Jen
          </h1>
          <h3 className="text-xl w-4/5 text-center mx-auto pt-4 text-gray-700">
            I’m a healthcare professional and marketing and content creator
            currently living in Appleton, Wisconsin.
          </h3>
          <div className="flex justify-center ">
            <button className="bg-green-600 text-white text-lg mr-8 mt-4 py-2 px-4 rounded hover:bg-green-700">
              <a href="/about">More about me</a>
            </button>
            <button className="bg-green-600 text-white text-lg py-2 mt-4 px-4 rounded hover:bg-green-700">
              <a href="/contact">Get in touch</a>
            </button>
          </div>
        </div>
      </div>
    </Shell>
  );
}
