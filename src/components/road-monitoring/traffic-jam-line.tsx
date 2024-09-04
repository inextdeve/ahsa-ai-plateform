"use client";
import { Line } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
const labels = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];
const entries = [
  "20",
  "20",
  "20",
  "20",
  "30",
  "35",
  "40",
  "80",
  "80",
  "70",
  "70",
  "40",
  "35",
  "30",
  "30",
  "40",
  "50",
  "60",
  "50",
  "50",
  "30",
  "20",
  "20",
  "20",
];

const TrafficJamLine = () => {
  const { t } = useTranslation("road");
  const data = {
    labels: labels,
    datasets: [
      {
        label: t("peakRate"),
        data: entries,
        borderColor: "#0ac1c7",
        fill: false,
        stepped: true,
      },
    ],
  };
  return (
    <Line
      data={data}
      options={{
        responsive: true,
        interaction: {
          intersect: false,
          axis: "x",
        },
        plugins: {},
      }}
    />
  );
};

export default TrafficJamLine;
