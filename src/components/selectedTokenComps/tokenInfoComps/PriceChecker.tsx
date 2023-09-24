import classNames from "classnames";
import React from "react";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { green, red } from "@mui/material/colors";

type Props = {
  price: string | any;
  change: string | any;
};

const PriceChecker = (props: Props) => {
  const { price, change } = props;
  const trending: string | any = change;
  const negativeTrend: boolean | any = trending.includes("-");
  return (
    <div className="flex gap-4">
      {price ? <p>${(+price).toLocaleString("en-US")}</p> : null}
      <div className="flex w-[5rem] justify-start items-center">
        <p
          className={classNames(
            "text-[10px]",
            {
              "text-red-600": negativeTrend === true,
            },
            {
              "text-green-600": negativeTrend === false,
            }
          )}
        >
          {change}%
        </p>
        {negativeTrend ? (
          <TrendingDownIcon sx={{ color: red[600], width: 20, height: 20 }} />
        ) : (
          <TrendingUpIcon sx={{ color: green[600], width: 20, height: 20 }} />
        )}
      </div>
    </div>
  );
};

export default PriceChecker;
