import React, { Dispatch, SetStateAction } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { CoinsType } from "@/lib/types/marketDataTypes";
import Link from "next/link";

type Props = {
  searchedCoinData: CoinsType[];
  setSearchedCoinData: Dispatch<SetStateAction<CoinsType[]>>;
};

const SearchResultCard = (props: Props) => {
  const { searchedCoinData, setSearchedCoinData } = props;

  const clearSearchHandler = () => {
    setSearchedCoinData([]);
  };
  return (
    <div className="p-4">
      <Card>
        <CardHeader className="flex w-full justify-between items-center">
          <h3>Search Results</h3>
          <p
            onClick={clearSearchHandler}
            className="mt-0 text-[.8rem] text-end h-full w-full cursor-pointer hover:underline"
          >
            Clear Search
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {searchedCoinData?.map((coin: CoinsType) => {
            return (
              <Link
                href={`/coin/${coin.uuid}`}
                key={coin.uuid}
                onClick={clearSearchHandler}
              >
                <div className="flex gap-3 items-center p-4 bg-slate-300 rounded-md dark:bg-slate-800">
                  <img
                    src={coin.iconUrl}
                    alt={coin.name}
                    className="w-[20px] h-[20px] object-cover"
                  />
                  <p>{coin.name}</p>
                </div>
              </Link>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchResultCard;
