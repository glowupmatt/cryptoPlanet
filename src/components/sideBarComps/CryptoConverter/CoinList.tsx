import React from "react";
import Image from "next/image";
import { CoinsType, MarketDataType } from "@/lib/types/marketDataTypes";
import { DialogClose } from "@/components/ui/dialog";
import { SearchCoinType } from "@/lib/types/searchCoin";

type Props = {
  coinData: MarketDataType[];
  setSelectedCoin: React.Dispatch<React.SetStateAction<SearchCoinType>>;
};

const CoinList = (props: Props) => {
  const { coinData, setSelectedCoin } = props;

  const onClickHandler = (coin: SearchCoinType) => {
    setSelectedCoin(coin);
  };
  return (
    <div className="h-[50vh] overflow-scroll flex flex-col gap-3">
      {coinData.map((coin: any) => {
        const { uuid, iconUrl, name, symbol, price } = coin;
        return (
          <DialogClose key={uuid}>
            <div
              className="flex gap-3 items-center p-4 bg-slate-300 rounded-md dark:bg-slate-800"
              onClick={() => onClickHandler(coin)}
            >
              <Image
                src={iconUrl}
                width={20}
                height={20}
                alt={name}
                className="w-[20px] h-[20px] object-cover"
              />
              <p>{name}</p>
            </div>
          </DialogClose>
        );
      })}
    </div>
  );
};

export default CoinList;
