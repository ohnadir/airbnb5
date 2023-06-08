import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(6, 148, 162, 0.2)',
        'rgba(255, 138, 76, 0.2)',
        'rgba(63, 131, 248, 0.2)',
        'rgba(14, 159, 110, 0.2)',
      ],
      borderColor: [
        'rgba(6, 148, 162, 1)',
        'rgba(255, 138, 76, 1)',
        'rgba(63, 131, 248, 1)',
        'rgba(14, 159, 110, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
const PieChart = () => {
    return <Pie data={data} />
}

export default PieChart