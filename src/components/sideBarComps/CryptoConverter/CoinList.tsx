import React from "react";
import Image from "next/image";
import { MarketDataType } from "@/lib/types/marketDataTypes";

type Props = {
  coinData: MarketDataType[];
};

const CoinList = (props: Props) => {
  const { coinData } = props;
  return (
    <div className="h-[50vh] overflow-scroll flex flex-col gap-3">
      {coinData.map((coin: any) => {
        return (
          <div
            key={coin.uuid}
            className="flex gap-3 items-center p-4 bg-slate-300 rounded-md dark:bg-slate-800"
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
        );
      })}
    </div>
  );
};

export default CoinList;
