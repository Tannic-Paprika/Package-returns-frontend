// components/ReturnReasonsChart.js
import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

function ReturnReasonsChart({ data }) {
  const reasonsCount = data.reduce((acc, curr) => {
    acc[curr.returnReason] = (acc[curr.returnReason] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(reasonsCount).map(reason => ({
    name: reason,
    value: reasonsCount[reason],
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">Return Reasons Breakdown</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          label
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default ReturnReasonsChart;
