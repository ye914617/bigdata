import React from "react";
import { useGlobalContext } from "../Global/GlobalContext";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

const BarChart = () => {
  Chart.register(ChartDataLabels);
  const { selectedData, selecting } = useGlobalContext();
  const totalHouseholdOrdinaryM = selectedData
    .map((item) => {
      return Number(item.household_ordinary_m);
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  const totalHouseholdOrdinaryF = selectedData
    .map((item) => {
      return Number(item.household_ordinary_f);
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  const totalHouseholdSingleM = selectedData
    .map((item) => {
      return Number(item.household_single_m);
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  const totalHouseholdSingleF = selectedData
    .map((item) => {
      return Number(item.household_single_f);
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  return (
    <div className="sm:min-h-[75%] sm:max-h-[80%] h-full sm:mt-36 mt-4">
      {!selecting && (
        <Bar
          data={{
            labels: ["共同生活戶", "獨立生活戶"],
            datasets: [
              {
                categoryPercentage: 0.5,
                label: "男",
                data: [totalHouseholdOrdinaryM, totalHouseholdSingleM],
                backgroundColor: ["rgba(67,91,141,1)", "rgba(67,91,141,1)"],
                borderColor: "rgba(13,18,108,1)",
                borderWidth: 2,
                datalabels: {
                  align: "end",
                  anchor: "end",
                },
              },

              {
                categoryPercentage: 0.5,
                label: "女",
                data: [totalHouseholdOrdinaryF, totalHouseholdSingleF],
                backgroundColor: ["rgba(228,72,147,1)", "rgba(228,72,147,1)"],
                borderColor: "rgba(244,4,120,1)",
                borderWidth: 2,
                datalabels: {
                  align: "end",
                  anchor: "end",
                },
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            layout: {
              padding: 30,
            },
            scales: {
              x: {
                // display: false,
                grid: {
                  drawBorder: false,
                  display: false,
                },
                ticks: {
                  font: {
                    size: 21,
                    weight: 700,
                  },
                },
              },
              y: {
                grid: {
                  drawBorder: false,
                },
                ticks: { padding: 20 },
              },
            },
            plugins: {
              datalabels: {
                color: "rgba(217,62,6,1)",
                font: {
                  weight: "bold",
                  size: 20,
                },
              },
              legend: {
                position: "bottom",
                labels: {
                  boxWidth: 10,
                  boxHeight: 10,
                  padding: 40,
                  font: {
                    size: 16,
                  },
                },
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default BarChart;
