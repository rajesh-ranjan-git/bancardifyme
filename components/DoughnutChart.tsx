"use client";

import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React from "react";

Chart.register(ArcElement);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [65741, 54535, 26821],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: [
      "Kotak Mahindra Bank",
      "Central Bank of India",
      "State Bank of India",
    ],
  };
  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
