// components/Metrics.js
import React from 'react';
import TotalReturns from './TotalReturns';
import ReturnReasonsChart from './ReturnReasonsChart';
import ReturnTrendsChart from './ReturnTrendsChart';

function Metrics({ data }) {
  return (
    <div className="flex flex-col space-y-4">
      <TotalReturns total={data.length} />
      <div className="flex flex-wrap justify-between">
        <div className="w-full lg:w-[48%] mb-4">
          <ReturnReasonsChart data={data} />
        </div>
        <div className="w-full lg:w-[48%] mb-4">
          <ReturnTrendsChart data={data} />
        </div>
      </div>
    </div>
  );
}

export default Metrics;
