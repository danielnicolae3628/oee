import React from "react";

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

const options = {
  indexAxis: "y",
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 100,
        },
      },
    ],
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      //   text: "OEE",
    },
  },
};

const labels = ["Equipment1"];

const data = {
  labels,
  datasets: [
    {
      label: "Equipment1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const CycleCountEq1 = () => {
  return (
    <>
      <div className="m-4 w-90 h-80">
        <Bar options={options} data={data} />
      </div>
    </>
  );
};

export default CycleCountEq1;
