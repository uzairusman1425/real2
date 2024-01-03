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
    tooltip: {
      // Disable the on-canvas tooltip
      enabled: false,

      external: function(context) {
          // Tooltip Element
          let tooltipEl = document.getElementById('chartjs-tooltip');

          // Create element on first render
          if (!tooltipEl) {
              tooltipEl = document.createElement('div');
              tooltipEl.id = 'chartjs-tooltip';
              tooltipEl.innerHTML = '<table></table>';
              document.body.appendChild(tooltipEl);
          }

          // Hide if no tooltip
          const tooltipModel = context.tooltip;
          if (tooltipModel.opacity === 0) {
              tooltipEl.style.opacity = 0;
              return;
          }

          // Set caret Position
          tooltipEl.classList.remove('above', 'below', 'no-transform');
          if (tooltipModel.yAlign) {
              tooltipEl.classList.add(tooltipModel.yAlign);
          } else {
              tooltipEl.classList.add('no-transform');
          }

          function getBody(bodyItem) {
              return bodyItem.lines;
          }

          // Set Text
          if (tooltipModel.body) {
              const bodyLines = tooltipModel.body.map(getBody);

              let innerHtml = '<thead>';

              innerHtml += '</thead><tbody>';

              bodyLines.forEach(function(body, i) {
                  const colors = tooltipModel.labelColors[i];
                  let style = 'background:' + colors.backgroundColor;
                  style += '; border-color:' + colors.borderColor;
                  style += '; border-width: 2px';
                  const span = '<span style="' + style + '">' + body + '</span>';
                  innerHtml += '<tr><td>' + span + '</td></tr>';
              });
              innerHtml += '</tbody>';

              let tableRoot = tooltipEl.querySelector('table');
              tableRoot.innerHTML = innerHtml;
          }

          const position = context.chart.canvas.getBoundingClientRect();
          // const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

          // Display, position, and set styles for font
          tooltipEl.style.opacity = 1;
          tooltipEl.style.position = 'absolute';
          tooltipEl.style.left = position.left + 10 + tooltipModel.caretX + 'px';
          tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
          // tooltipEl.style.font = bodyFont.string;
          tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
          tooltipEl.style.pointerEvents = 'none';
          
      }
  }
  },
};


function Recharts({values}) {
  const labels = [1,2,3,4,5,6,7,8,9,10,11,12];
  const dataset1 = values
  
  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: dataset1,
        backgroundColor: dataset1?.map((_, index) => (dataset1[index] >= 0 ? '#008001' : '#ff0100')),
    },
      
    ],
  };
  return (
  <div className='w-[133px]'>
    <Bar options={options} data={data} width={26.5} height={7}  className="z-[999] pl-10" />
  </div>
    );
}
export default Recharts
