"use client";
import React, { Dispatch, SetStateAction } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import FilterListIcon from "@mui/icons-material/FilterList";

type Props = {
  setMarketInfo: Dispatch<SetStateAction<string>>;
  setTimePeriod: Dispatch<SetStateAction<string>>;
};

const DropDownChartFilters = (props: Props) => {
  const { setMarketInfo, setTimePeriod } = props;

  return (
    <DropdownMenu>
      <div className="w-full flex justify-center items-center">
        <DropdownMenuTrigger className="self-center w-full bg-slate-300 p-2 dark:bg-transparent">
          <FilterListIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex">
          <div>
            <DropdownMenuLabel>Market Info</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setMarketInfo("marketCap")}>
              Market Cap
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setMarketInfo("price")}>
              Price
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setMarketInfo("24hVolume")}>
              24hr Volume
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setMarketInfo("change")}>
              Change
            </DropdownMenuItem>
          </div>
          <div>
            <DropdownMenuLabel>Time Period</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setTimePeriod("3h")}>
              3h
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimePeriod("24h")}>
              24h
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimePeriod("7d")}>
              7d
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimePeriod("30d")}>
              30d
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimePeriod("1y")}>
              1y
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
};

export default DropDownChartFilters;
