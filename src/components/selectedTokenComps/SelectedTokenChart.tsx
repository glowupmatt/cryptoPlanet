"use client";

import React, { useState, useEffect } from "react";
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
import { getCoinHistory } from "@/lib/helperFunctions/selectedCoin";
import { Line } from "react-chartjs-2";
import { selectedTokenType } from "@/lib/types/selectedTokenType";

type Props = {
  token: selectedTokenType | any;
  timePeriod: string;
};

type graphDataType = {
  price: string | undefined;
  timestamp: number | undefined;
}[];

const SelectedTokenChart = (props: Props) => {
  const { token, timePeriod } = props;

  const [graphData, setGraphData] = useState<graphDataType>();
  useEffect(() => {
    const getCoinHistoryData = async () => {
      if (!token?.uuid) {
        return console.log("no token uuid");
      } else {
        const data = await getCoinHistory(token.uuid, timePeriod);
        setGraphData(data);
      }
    };
    getCoinHistoryData();
  }, [token?.uuid, timePeriod]);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  if (graphData) {
    const priceData = graphData.map((data) => {
      return data.price;
    });

    const timeStampData = graphData.map((data) => {
      return data.timestamp;
    });

    const unixTimestamp = timeStampData.map((data) => {
      return data;
    });

    const date = unixTimestamp.map((data) => {
      if (data) {
        return new Date(data * 1000);
      }
    });

    const todaysDate = new Date().toLocaleDateString("en-US");

    const result = date.filter((data) => {
      data?.toLocaleDateString("en-US") === todaysDate;
      return data?.toLocaleTimeString("en-US");
    });

    let finalResult;
    if (timePeriod === "24h") {
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
      };
      finalResult = result.map((data) =>
        data?.toLocaleTimeString("en-US", options)
      );
    } else if (timePeriod === "7d") {
      const options: Intl.DateTimeFormatOptions = {
        month: "numeric",
        day: "numeric",
      };
      finalResult = date.map((data) =>
        data?.toLocaleDateString("en-US", options)
      );
    } else if (timePeriod === "30d") {
      const options: Intl.DateTimeFormatOptions = {
        month: "numeric",
        day: "numeric",
      };
      finalResult = date.map((data) =>
        data?.toLocaleDateString("en-US", options)
      );
    } else {
      const options: Intl.DateTimeFormatOptions = {
        month: "numeric",
        year: "numeric",
      };
      finalResult = date.map((data) =>
        data?.toLocaleDateString("en-US", options)
      );
    }

    const chartData = {
      labels: finalResult,
      datasets: [
        {
          data: priceData,
          pointBackgroundColor: "transparent",
          pointBorderColor: "transparent",
          borderColor: "blue",
          pointHoverBackgroundColor: "white",
          pointHoverBorderColor: "white",
          pointBorderWidth: 10,
          order: 0,
        },
      ],
    };
    const options = {
      chart: {
        type: "line",
      },
      scales: {
        y: {
          display: true,
          grid: {
            drawBorder: false,
            display: false,
          },
          position: "right" as const,
          reverse: false,
        },
        x: {
          display: true,
          grid: {
            drawBorder: true,
            display: true,
          },
          reverse: true,
        },
      },
      layout: {
        padding: 25,
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
    };

    return (
      <div className="border-solid border-[2px] border-gray w-full h-[20rem] lg:h-[30rem]">
        <Line options={options} data={chartData} />
      </div>
    );
  }
};

export default SelectedTokenChart;
