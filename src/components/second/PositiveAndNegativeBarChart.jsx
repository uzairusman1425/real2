import * as React from 'react';
import { BarChart, XAxis, YAxis } from '@mui/x-charts/BarChart';

const pData =[2400, 1398, -9800, 3908, 4800, -3800, 4300];
// const pData =[
//   {"2400":"green"},{"1398":"green"} ,{ "-9800":"red"}, {"3908":"green"}, {"4800":"green"}, {"-3800":"red"}, {"4300":"green"}
// ];

export default function PositiveAndNegativeBarChart() {
  return (
    <div className=''>
        <BarChart
        width={100}
        height={20}
        series={[
            {
            data: pData,
            color: pData[2] >= 0 ? 'yellow' : 'red',
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