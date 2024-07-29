"use client";

import { PolarArea } from "react-chartjs-2";

interface PolarChartProps {
  chartData: {
    labels: string[];
    values: number[];
  };
}

const PolarChart = ({ chartData }: PolarChartProps) => {
  return (
    <PolarArea
      data={{
        labels: chartData.labels,
        datasets: [
          {
            data: chartData.values,
            backgroundColor: [
              "#0AC1C7d9",
              "#009AA0d9",
              "#00757Bd9",
              "#005158d9",
            ],
          },
        ],
      }}
    />
  );
};

export default PolarChart;
