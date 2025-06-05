import React from 'react';
import DayItinerary from './DayItinerary';
import { itinerary as initialData } from '../data/mockData';

const ItineraryPlanner = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-pink-600 mb-2">Y2Z TRAVEL</h1>
      <h2 className="text-xl font-semibold mb-4">Itinerary – Day</h2>
      <DayItinerary title="Day 1" activities={initialData} />
    </div>
  );
};

export default ItineraryPlanner;
