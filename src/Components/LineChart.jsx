import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
} from 'chart.js';
import { Line} from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);


export const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
      
        data: [12, 40, 30, 90, 80],
        backgroundColor: "yellow",
        borderColor:"red",
        label: "Comp 1",
      },
        {
        label: "Comp2",
        data: [3000, 450, 900, 190, 880],
        backgroundColor: "Green",
        borderColor:"brown"

      },
      {
        label: "Comp 3",
        data: [10, 40, 9000, 1900, 200],
        backgroundColor: "orange",
        borderColor:"blue"

      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <>
      <h1>Bar Chart</h1>
      <div style={{ width: "1000px", height: "500px", margin: "auto" }}>
        <Line data={data} options={options} />
      </div>
    </>
  );
};