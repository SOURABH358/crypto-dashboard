import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {labels, Chartdata} from "./../Utils/ChartData"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
const options = {
    responsive: true,
    maintainAspectRatio:false,
    smooth:true,
    lineTension: 0.4,
    interaction: {
      mode:'index'
    },
    radius:2,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        },
        
      }
    },
    plugins: {
      legend: {
        display: false
      },
      
    },
};
function Investment__Chart() {

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data:Chartdata,
                backgroundColor: [
                    'rgba(65, 105, 255, 0.3)',
                  ],
                    borderColor: [
                      'rgba(65, 105, 255, 1)',
                    ],
                    borderWidth: 2,
                    fill:true
            },
            
        ],
    };
    return <Bar
        options={options}
        data={{...data}}
        width={400}
        height={200}
    />
}

export default Investment__Chart;
