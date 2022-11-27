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
  import { GlobalContext } from '../../Context';
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

function Price__chart() {
  const {current} = GlobalContext();
  let labelValue;
  let dataValue
  if(current.sparkline){
    dataValue = current.sparkline.map(el=>parseFloat(el).toFixed(2))
    labelValue = current.sparkline.map((el,i)=>`${24-i} hrs`)
  }
  else{
    dataValue = ['','','','','','','','','',''];
    labelValue=[56,89,34,90,45,78,90,67,34,90]
  }
    // const labels = current.sparkline.map(el=>'change');
    const labels = labelValue;
    const data = {
        labels: labels,
        datasets: [{
            label: current.name,
            // label: 'My dataset',
            data: dataValue,
            // data: [56,89,34,90,45,78,90,67,34,90],
            backgroundColor: [
              'rgba(65, 105, 255, 0.3)',
            ],
              borderColor: [
                'rgba(65, 105, 255, 1)',
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