import { selectedTokenType } from "@/lib/types/selectedTokenType";
import classNames from "classnames";
import React from "react";

type Props = {
  token: selectedTokenType | any;
  timePeriod: string;
  setTimePeriod: React.Dispatch<React.SetStateAction<string>>;
};

const TimeFilters = (props: Props) => {
  if (!props.token?.symbol) {
    return <div>Loading...</div>;
  } else {
    const { token, timePeriod, setTimePeriod } = props;
    const { symbol } = token;
    const timeFilter = [
      {
        title: "1D",
        input: "24h",
      },
      {
        title: "7D",
        input: "7d",
      },
      {
        title: "1M",
        input: "30d",
      },
      {
        title: "1Y",
        input: "1y",
      },
    ];
    return (
      <div className="flex flex-col items-center p-4 gap-4 cursor-pointer">
        <h2 className="font-bold text-[.8rem] self-start md:hidden">
          {symbol} to USD Chart
        </h2>
        <div className="flex justify-end w-full bg-gray-300 dark:bg-gray-800 rounded-md md:justify-between">
          <h2 className="hidden font-bold text-[.8rem] self-center md:block p-4">
            {symbol} to USD Chart
          </h2>
          <div className="bg-gray  flex justify-between w-full p-4 md:w-1/2">
            {timeFilter.map((data, index) => {
              return (
                <div
                  key={index}
                  className="text-[.7rem]"
                  onClick={() => setTimePeriod(data.input)}
                >
                  <p
                    className={classNames("p-2 rounded-md", {
                      "bg-white dark:bg-gray-900": timePeriod === data.input,
                    })}
                  >
                    {data.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default TimeFilters;
