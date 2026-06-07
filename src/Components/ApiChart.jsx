import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

export const ApiFetch = () => {
  const [chartData, setChartData] = useState(null);

  const getAllCountry = async () => {
    try {
      const res = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name,population"
      );

      const data = res.data;

      const filtered = data.filter(
        (v) =>
          v.name.common === "Pakistan" ||
          v.name.common === "India" ||
          v.name.common === "China" ||
          v.name.common === "United States" ||
          v.name.common === "United Kingdom" ||
          v.name.common === "Turkey" ||
          v.name.common === "Afghanistan" ||
          v.name.common === "Iran" ||
          v.name.common === "Saudi Arabia" ||
          v.name.common === "Spain"
      );

      setChartData({
        labels: filtered.map((v) => v.name.common),
        datasets: [
          {
            label: "Population",
            data: filtered.map((v) => v.population),
            backgroundColor: [
              "red",
              "blue",
              "green",
              "orange",
              "purple",
              "yellow",
              "pink",
              "cyan",
              "gray",
              "brown",
            ],
          },
        ],
      });
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAllCountry();
  }, []);

  return (
    <>
      <h1>Country Population Chart</h1>

      <div style={{ width: "500px", height: "500px" }}>
        {chartData ? <Pie data={chartData} /> : <p>Loading...</p>}
      </div>
    </>
  );
};