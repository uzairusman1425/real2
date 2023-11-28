import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'A', value: 10 },
  { name: 'B', value: -5 },
  { name: 'C', value: 15 },
  // Add more data points as needed
];

const MyBarChart = () => {
  return (
    <BarChart width={600} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" barCategoryGap="10%" />
    </BarChart>
  );
};

export default MyBarChart;
