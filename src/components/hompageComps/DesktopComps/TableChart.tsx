import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { CellContext } from "@tanstack/react-table";
import { Coin } from "./DesktopColumns";

type Props = {
  sparkline: any;
};

const TableChart = (props: Props) => {
  const { sparkline } = props;
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const chartData = {
    labels: sparkline,
    datasets: [
      {
        data: sparkline,
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent",
        borderColor: "blue",
        pointHoverBackgroundColor: "white",
        pointHoverBorderColor: "white",
        pointBorderWidth: 10,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        display: false,
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        display: false,
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-[6rem] h-[4rem]">
      <Line options={options} data={chartData} height={62.5} width={100} />
    </div>
  );
};

export default TableChart;
