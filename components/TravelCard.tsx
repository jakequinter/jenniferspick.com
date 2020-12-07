import React from 'react';

interface TravelCardProps {
  text: string;
  location: string;
  date: string;
  imageUrl: string;
}

const TravelCard = ({ text, location, date, imageUrl }: TravelCardProps) => {
  return (
    <div className="pb-8">
      <p>{text}</p>
      <div className="flex justify-between py-2">
        <p className="text-sm">{location}</p>
        <p className="text-sm">{date}</p>
      </div>
      <div className="flex justify-between w-full">
        <img
          className="rounded mx-auto"
          style={{ maxHeight: '500px' }}
          src={imageUrl}
          alt={location}
        />
      </div>
    </div>
  );
};

export default TravelCard;
