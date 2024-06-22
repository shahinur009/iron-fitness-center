import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect } from 'react';

// Register necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({
  paiData
}) => {
  const data = {
    labels: ['Subscribers', 'Paid Members'],
    datasets: [
      {
        data: [paiData?.total_subscriber, paiData?.paid_members],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB']
      }
    ]

  };
  console.log("paiData:", paiData);

  console.log(data)
  useEffect(() => {
    // Cleanup the chart instance on component unmount
    return () => {
      if (ChartJS.instances.length > 0) {
        ChartJS.instances.forEach(chart => chart.destroy());
      }
    };
  }, []);

  return <Pie data={data} />;
};

export default PieChart;
