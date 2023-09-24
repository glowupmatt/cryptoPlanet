import React from "react";
import TimelineIcon from "@mui/icons-material/Timeline";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import InfoIcon from "@mui/icons-material/Info";
import { selectedTokenType } from "@/lib/types/selectedTokenType";
import classNames from "classnames";

type Props = {
  token: selectedTokenType | any;
};

const CoinInfoData = (props: Props) => {
  if (
    !props.token?.change &&
    !props.token?.marketCap &&
    !props.token?.twentyFourHrVolume &&
    !props.token?.fullyDilutedMarketCap &&
    !props.token?.circulatingSupply
  ) {
    return <div>Loading...</div>;
  } else {
    const {
      token: {
        change,
        marketCap,
        ["24hVolume"]: twentyFourHrVolume,
        fullyDilutedMarketCap,
        supply,
      },
    } = props;

    const circulatingSupply = supply.circulating;
    const trending: string | any = change;
    const negativeTrend: boolean | any = trending.includes("-");
    const coinInfoData = [
      {
        icon: <TimelineIcon sx={{ width: 20, height: 20 }} />,
        title: "Market Cap",
        price: (+marketCap).toLocaleString("en-US"),
      },
      {
        icon: <QueryBuilderIcon sx={{ width: 20, height: 20 }} />,
        title: "24 Volume",
        price: (+twentyFourHrVolume).toLocaleString("en-US"),
      },
      {
        icon: <InfoIcon sx={{ width: 20, height: 20 }} />,
        title: "Full Diluted",
        price: (+fullyDilutedMarketCap).toLocaleString("en-US"),
      },
      {
        icon: <InfoIcon sx={{ width: 20, height: 20 }} />,
        title: "Circulating Supply",
        price: (+circulatingSupply).toLocaleString("en-US"),
      },
    ];
    return (
      <div className="grid grid-cols-2 justify-items-start items-center justify-start py-4 gap-[.5rem] md:flex">
        {coinInfoData.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-between items-start bg-slate-200 dark:bg-gray-800 w-full h-[7rem] p-4 rounded-md"
            >
              <div className="flex justify-between w-full text-[.6rem] gap-[.5rem]">
                {data.icon}
                <p className="flex justify-start items-center w-full">
                  {data.title}
                </p>
              </div>
              <div className="flex w-[5rem] justify-start items-center">
                <p
                  className={classNames("text-[10px] text-green", {
                    "text-red-800 dark:text-red-400": negativeTrend === true,
                  })}
                >
                  ${data.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default CoinInfoData;
