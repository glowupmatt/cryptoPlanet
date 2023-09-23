"use client";

import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { getCoinData } from "@/lib/helperFunctions/coinRainkingApi";
import { CoinsType } from "@/lib/types/marketDataTypes";
import { convertPriceToString } from "@/lib/helperFunctions/cryptoHelperFunctions";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import MobileTableComp from "./MobileTableComp";
import DropDownChartFilters from "../DropDownChartFilters";

interface DataTableProps<TData, TValue> {
  MobileColumns: ColumnDef<TData, TValue>[];
}

export function MobileDataTable<TData, TValue>({
  MobileColumns,
}: DataTableProps<TData, TValue>) {
  const [data, setData] = useState([]);
  //Pagination Handlers
  const [offset, setOffset] = useState(0);
  const offSetHandler = () => {
    setOffset((prev) => prev + 10);
  };
  const goBackHandler = () => {
    setOffset((prev) => prev - 10);
  };
  //Market Sorting
  const [marketInfo, setMarketInfo] = useState("marketCap");
  //Time Period Sorting
  const [timePeriod, setTimePeriod] = useState("24h");
  useEffect(() => {
    getCoinData(
      `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timePeriod}&tiers%5B0%5D=1&orderBy=${marketInfo}&orderDirection=desc&limit=10&offset=${offset}`
    ).then((res) => {
      setData(
        res.data.coins.map((coin: CoinsType) => {
          const { rank, name, change, price, iconUrl, uuid } = coin;

          const formattedPrice = `${convertPriceToString(+price)}`;
          return {
            ranking: rank,
            name: [
              <Image
                key={rank}
                src={iconUrl}
                width={20}
                height={20}
                alt=""
                className="max-h-[20px] max-w-[20px]"
              />,
              name,
            ],
            change: change,
            price: formattedPrice,
            uuid: uuid,
          };
        })
      );
    });
  }, [offset, marketInfo, timePeriod]);

  return (
    <div className="rounded-md border max-w-full w-screen">
      <DropDownChartFilters
        setMarketInfo={setMarketInfo}
        setTimePeriod={setTimePeriod}
      />
      <MobileTableComp MobileColumns={MobileColumns} data={data} />
      <div className="flex items-center justify-between space-x-2 p-4">
        <Button
          variant="outline"
          size="sm"
          onClick={goBackHandler}
          disabled={offset === 0}
        >
          Previous
        </Button>
        <Button variant="outline" size="sm" onClick={offSetHandler}>
          Next
        </Button>
      </div>
    </div>
  );
}
