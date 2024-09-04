"use client";
import { Line } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
function LineChart({ chartData }) {
  const { t } = useTranslation("common");

  return (
    <div className="chart-container h-[200px] p-4">
      <h2 style={{ textAlign: "center" }}>{t("monitoringNotes")}</h2>
      <Line
        data={chartData}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                font: {
                  size: 16,
                  weight: "normal",
                },
                color: "#0ac1c7",
              },
            },
            x: {
              ticks: {
                font: {
                  size: 16,
                  weight: "normal",
                },
                color: "#0ac1c7",
              },
            },
          },
          maintainAspectRatio: false,
          responsive: true,

          plugins: {
            title: {
              display: true,
              // text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
export default LineChart;
