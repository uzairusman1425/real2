import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x:{
        display: false,
    },
    y:{
        display: false,
    },
  },
  plugins: {
    legend: {
      position: 'top',
      display: false,

    },
    title: {
      display: false,
      text: '',
    },
  },
};

const labels = [1,2,3,4,5,6,7,8,9,10,11,12];
const dataset1 = [25,50,-4,6,8,34,-50,3,34,32,-10,-24]

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: dataset1,
      backgroundColor: dataset1?.map((_, index) => (dataset1[index] >= 0 ? 'green' : 'red')),
  },
    
  ],
};

function Recharts() {
    
  return (
  <div className='m-0 p-0 w-28'>
    <Bar options={options} data={data} />
  </div>
    );
}
export default Recharts
