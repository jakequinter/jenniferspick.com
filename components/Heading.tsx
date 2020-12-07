import React from 'react';

interface HeadingProps {
  title: string;
  subtitle: string;
}

const Heading = ({ title, subtitle }: HeadingProps) => {
  return (
    <div className="mx-auto w-4/5 pb-16">
      <h1
        className="text-4xl text-center font-bold pb-2"
        style={{ color: '#333333' }}
      >
        {title}
      </h1>
      <h5 className="text-2xl text-center" style={{ color: '#333333' }}>
        {subtitle}
      </h5>
    </div>
  );
};

export default Heading;
