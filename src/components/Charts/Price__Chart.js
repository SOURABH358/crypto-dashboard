import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
//   import faker from 'faker';
const image = new Image();
image.src = 'https://www.chartjs.org/img/chartjs-logo.svg';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
  export const options = {
    responsive: true,
    maintainAspectRatio:false,
    smooth:true,
    lineTension: 0.3,
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
        beginAtZero: true,
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

function Price__chart() {
    const labels = ['', '', '', '', '', '', '','', '', '', '', '', '', '','', '', '', '', '', '', ''];
    const data = {
        labels: labels,
        datasets: [{
            label: 'My second Dataset',
            data: [65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              'rgba(75, 192, 192, 0.4)',
              'rgba(54, 162, 235, 0.4)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
              borderColor: [
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
              borderWidth: 2,
              fill:true
        }]
    };
    return (
        <div className="">
            <Line 
            data={{...data}}
            height={250}
            width={400}
            options={options}/>
        </div>
    )
}

export default Price__chart;