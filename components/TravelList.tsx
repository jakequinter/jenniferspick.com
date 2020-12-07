import React from 'react';
import useSWR from 'swr';

import TravelCard from '../components/TravelCard';
import fetcher from '../utils/fetcher';

const TravelList = () => {
  const { data } = useSWR('/api/items', fetcher);

  if (!data) {
    return null;
  }

  return (
    <div>
      <h5 className="text-2xl font-bold pb-2" style={{ color: '#333333' }}>
        Travel
      </h5>
      {data.items &&
        data.items.map(travelItem => (
          <TravelCard
            key={travelItem.id}
            text={travelItem.text}
            location={travelItem.location}
            date={travelItem.date}
            imageUrl={travelItem.imageUrl}
          />
        ))}
    </div>
  );
};

export default TravelList;
