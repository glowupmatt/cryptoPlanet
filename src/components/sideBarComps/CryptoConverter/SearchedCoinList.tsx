import { CoinsType, MarketDataType } from "@/lib/types/marketDataTypes";
import { SearchCoinType } from "@/lib/types/searchCoin";
import React from "react";
import Image from "next/image";
import { DialogClose } from "@/components/ui/dialog";

type Props = {
  searchedCoinData: SearchCoinType[];
  setSelectedCoin: React.Dispatch<React.SetStateAction<SearchCoinType>>;
};

const SearchedCoinList = (props: Props) => {
  const { searchedCoinData, setSelectedCoin } = props;
  const onClickHandler = (coin: CoinsType) => {
    setSelectedCoin(coin);
  };

  return (
    <div className="h-[50vh] overflow-scroll flex flex-col gap-3">
      {searchedCoinData.map((coin: any) => {
        return (
          <DialogClose key={coin.uuid}>
            <div
              className="flex gap-3 items-center p-4 bg-slate-300 rounded-md dark:bg-slate-800"
              onClick={() => onClickHandler(coin)}
            >
              <Image
                src={coin.iconUrl}
                width={20}
                height={20}
                alt={coin.name}
                className="w-[20px] h-[20px] object-cover"
              />
              <p>{coin.name}</p>
            </div>
          </DialogClose>
        );
      })}
    </div>
  );
};

export default SearchedCoinList;
