// components/TotalReturns.js
import React from 'react';

function TotalReturns({ total }) {
  return (
    <div className="card text-center">
      <h2 className="text-xl font-semibold">Total Returns</h2>
      <p className="text-4xl font-bold">{total}</p>
    </div>
  );
}

export default TotalReturns;
