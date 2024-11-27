// components/ReturnTrendsChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function ReturnTrendsChart({ data }) {
  const dateCounts = data.reduce((acc, curr) => {
    acc[curr.returnDate] = (acc[curr.returnDate] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(dateCounts)
    .sort()
    .map(date => ({
      date,
      returns: dateCounts[date],
    }));

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">Trends Over Time</h2>
      <LineChart width={400} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Line type="monotone" dataKey="returns" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default ReturnTrendsChart;
