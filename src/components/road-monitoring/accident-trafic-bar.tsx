"use client";
import { Line } from "react-chartjs-2";
import { useTranslation } from "react-i18next";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const labels = MONTHS;

const AccidentTrafficBar = () => {
  const { t } = useTranslation("road");
  const data = {
    labels: labels,
    datasets: [
      {
        label: t("trafficAccidents"),
        data: [80, 120, 152, 20, 54, 54, 55, 33, 23, 33, 44, 32],
        borderColor: "#fe6d73",
        backgroundColor: "#8c1c13",
        stack: "combined",
        type: "bar",
      },
      {
        label: t("trafficJam"),
        data: [80, 120, 152, 20, 54, 54, 55, 33, 23, 33, 44, 120],
        borderColor: "#0ac1c7",
        backgroundColor: "#0ac1c7aa",
        stack: "combined",
      },
    ],
  };

  return (
    <Line
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            stacked: true,
          },
        },
      }}
    />
  );
};

export default AccidentTrafficBar;
