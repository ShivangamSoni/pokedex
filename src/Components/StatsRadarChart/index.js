import styles from "./styles.module.css";

import { Radar } from "react-chartjs-2";
// Import Needed for Default Styles & Functionality
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";

const defaultData = {
  labels: [
    "HP",
    "Attack",
    "Defense",
    "Special Attack",
    "Special Defense",
    "Speed",
  ],
  datasets: [
    {
      label: "Stats",
      data: [],
      borderWidth: 2,
      backgroundColor: "rgb(0, 229, 255, .3)",
      borderColor: "rgb(0, 229, 255)",
      pointBackgroundColor: "rgb(0, 229, 255)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(0, 229, 255)",
    },
  ],
};

const generateData = (stats) => {
  return stats.reduce((res, { base_stat }) => {
    res.datasets[0].data.push(base_stat);
    return res;
  }, structuredClone(defaultData));
};

const StatsRadarChart = ({ stats }) => {
  const data = generateData(stats);
  return (
    <div className={styles.container}>
      <Radar data={data} />
    </div>
  );
};

export default StatsRadarChart;
