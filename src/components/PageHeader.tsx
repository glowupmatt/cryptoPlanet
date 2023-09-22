import React from "react";
import MarketInfoCards from "./hompageComps/MarketInfoCards";

type Props = {
  marketInfo: {
    title: string;
    value: string;
  }[];
};

const PageHeader = (props: Props) => {
  const { marketInfo } = props;
  return (
    <div className="flex flex-col gap-[2rem]">
      <div className="flex flex-col justify-center items-center text-center gap-4">
        <h2 className="text-[1.5rem] font-[700] leading-[1.5rem]">
          Best Coin Price Tracker on the Market
        </h2>
        <p>
          With Crypto Planet, you can track all your crypto assets from one
          interface.
        </p>
      </div>
      <MarketInfoCards marketInfo={marketInfo} />
    </div>
  );
};

export default PageHeader;
