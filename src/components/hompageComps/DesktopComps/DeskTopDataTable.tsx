"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import {
  getCoinData,
  getSearchCoinData,
} from "@/lib/helperFunctions/coinRainkingApi";
import { convertPriceToString } from "@/lib/helperFunctions/cryptoHelperFunctions";
import { CoinsType } from "@/lib/types/marketDataTypes";
import Image from "next/image";
import DesktopTableComp from "./DesktopTableComp";
import DropDownChartFilters from "../DropDownChartFilters";
import SearchResultCard from "../SearchResultCard";
import { Input } from "@/components/ui/input";
import classNames from "classnames";

interface DataTableProps<TData, TValue> {
  DesktopColumns: ColumnDef<TData, TValue>[];
}

function DeskTopDataTable<TData, TValue>({
  DesktopColumns,
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
          const {
            rank,
            name,
            change,
            price,
            iconUrl,
            uuid,
            sparkline,
            marketCap,
            ["24hVolume"]: string,
          } = coin;
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
            sparkline,
            marketCap,
            ["24hVolume"]: string,
          };
        })
      );
    });
  }, [offset, marketInfo, timePeriod]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedCoinData, setSearchedCoinData] = useState<CoinsType[]>([]);
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const coinData = await getSearchCoinData(searchTerm);
    setSearchedCoinData(coinData.data.coins);
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="rounded-md border max-w-full w-screen p-8">
      <div className="w-full flex justify-center items-center gap-[1rem] p-2">
        <div className="w-full flex justify-center items-center gap-[1rem] p-2">
          <form onSubmit={onSubmitHandler} className="w-full">
            <Input placeholder="Search" onChange={onChangeHandler} />
          </form>
          <DropDownChartFilters
            setMarketInfo={setMarketInfo}
            setTimePeriod={setTimePeriod}
          />
        </div>
      </div>
      {searchedCoinData.length > 0 ? (
        <SearchResultCard
          searchedCoinData={searchedCoinData}
          setSearchedCoinData={setSearchedCoinData}
        />
      ) : (
        ""
      )}
      <div
        className={classNames("", { "blur-md": searchedCoinData.length > 0 })}
      >
        <DesktopTableComp DesktopColumns={DesktopColumns} data={data} />

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
    </div>
  );
}

export default DeskTopDataTable;
