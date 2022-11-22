import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
//   import faker from 'faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  export const options = {
    responsive: true,
    maintainAspectRatio:false,
    smooth:true,
    lineTension: 0.3,
    radius:0,
    scales: {
        xAxes: [{
            gridLines: {
                display:false
            }
        }],
        yAxes: [{
            gridLines: {
                display:false
            }   
        }]
    },
    plugins: {
      legend: {
        display: false
      },
      
    },
  };

function Price__chart() {
    const labels = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(54, 162, 235,0.4)',
              borderColor: [
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
              borderWidth: 2,
              fill: true
        }]
    };
    return (
        <div className="">
            <Line data={{...data}}
            height={200}
            width={400}
            options={options}/>
        </div>
    )
}

export default Price__chart;