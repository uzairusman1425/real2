import * as React from 'react';
import { BarChart, XAxis, YAxis } from '@mui/x-charts/BarChart';
import { Hidden } from '@mui/material';

const pData = [2400, 1398, -9800, 3908, 4800, -3800, 4300];
// const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];


export default function PositiveAndNegativeBarChart() {
  return (
    <div className=''>
        <BarChart
        width={100}
        height={20}
        series={[
            {
            data: pData,
            color: '#000000'
            },
        ]}
        leftAxis={null}
        bottomAxis={null}
        margin={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        }}
        />
        </div>
  );
}