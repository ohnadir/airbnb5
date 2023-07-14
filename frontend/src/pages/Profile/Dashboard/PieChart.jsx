import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Pending Booking', 'Total Booking', 'Complete Booking', 'Processing Booking'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgb(6, 148, 162)',
        'rgb(255, 138, 76)',
        'rgb(63, 131, 248)',
        'rgb(14, 159, 110)',
      ],
      borderColor: [
        'rgb(255, 255, 255)',
        'rgb(255, 255, 255)',
        'rgb(255, 255, 255)',
        'rgb(255, 255, 255)',
      ],
      borderWidth: 1.5,
    },
  ],
};
const PieChart = () => {
  return <Pie  data={data} />
}

export default PieChart