import React from "react";
import MarketInfoCards from "./hompageComps/MarketInfoCards";
import { CoinsType } from "@/lib/types/marketDataTypes";

type Props = {
  marketInfo: {
    title: string;
    value: string;
  }[];
  topThreeCoins: CoinsType[];
};

const PageHeader = (props: Props) => {
  const { marketInfo, topThreeCoins } = props;
  return (
    <div className="flex flex-col gap-[2rem] mt-[1.5rem]">
      <div className="flex flex-col justify-center items-center text-center gap-8">
        <h2 className="text-[1.5rem] font-[700] leading-[1.5rem] md:text-[2rem] lg:text-[3rem] lg:max-w-[50rem] lg:leading-[3rem]">
          Best Coin Price Tracker on the Market
        </h2>
        <p className="leading-[1.5rem] font-[300] md:text-[1.5rem] md:max-w-[40rem] lg:text-[2rem] lg:leading-[2rem]">
          With Crypto Planet, you can track all your crypto assets from one
          interface.
        </p>
      </div>
      <MarketInfoCards marketInfo={marketInfo} topThreeCoins={topThreeCoins} />
    </div>
  );
};

export default PageHeader;
