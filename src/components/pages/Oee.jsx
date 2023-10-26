import React from "react";
import TimeModifier from "./TimeModifier";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.scales.linear.max = 100;

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      //   text: "OEE",
    },
  },
};

const labels = ["Equipment1", "Equipment2"];

const data = {
  labels,
  datasets: [
    {
      label: "UPP",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "TMP",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "LOP",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "rgba(53, 2, 205, 0.5)",
    },
    {
      label: "AVG",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "rgba(13, 102, 135, 0.5)",
    },
  ],
};

const OeeChart = () => {
  return (
    <>
      <div className="m-4">
        <h1 className="m-4 font-bold">OEE</h1>
        <div className=" flex flex-col justify-center items-center">
          <TimeModifier />
          <Bar options={options} data={data} />
        </div>
      </div>
    </>
  );
};

export default OeeChart;
