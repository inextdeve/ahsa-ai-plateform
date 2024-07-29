"use client";

import { Pie } from "react-chartjs-2";

interface PieChartProps {
  chartData: {
    labels: string[];
    values: number[];
  };
}

const PieChart = ({ chartData }: PieChartProps) => {
  var barColors = ["#0AC1C7d9", "#009AA0d9", "#00757Bd9", "#005158d9"];
  return (
    <Pie
      data={{
        labels: chartData.labels,
        datasets: [
          {
            backgroundColor: barColors,
            data: chartData.values,
          },
        ],
      }}
    />
  );
};

export default PieChart;
