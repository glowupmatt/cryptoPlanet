import React from "react";
import Image from "next/image";
import { selectedTokenType } from "@/lib/types/selectedTokenType";
import PriceChecker from "./tokenInfoComps/PriceChecker";

type Props = {
  token: selectedTokenType | any;
};

const TokenInfo = (props: Props) => {
  const { token } = props;

  if (!token?.iconUrl) {
    return <div>Loading...</div>;
  } else {
    const { iconUrl, name, symbol, rank, price, change, description } = token;
    return (
      <div className="grid grid-cols-2 items-center gap-4 md:flex md:flex-col">
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:w-full">
          <h2 className="text-[1rem] font-bold">Market Stats</h2>
          <div className="flex gap-4">
            {!iconUrl ? (
              "Loading..."
            ) : (
              <Image src={iconUrl} alt={name} width={50} height={50} />
            )}
            <div className="flex flex-col">
              <p>{name}</p>
              <p className="text-blue-700">{symbol}</p>
            </div>
          </div>
          <div className="flex gap-4 text-[.8rem] justify-start items-center">
            <p className="p-2 bg-slate-200 text-black rounded-md">
              Rank #{rank}
            </p>
          </div>
          {/* check if change is negative or not to change color from green to red*/}
          <PriceChecker price={price} change={change} />
        </div>
        <div className="w-full">
          <p className="text-[.6rem] md:text-[1rem] md:w-1/2">{description}</p>
        </div>
      </div>
    );
  }
};

export default TokenInfo;
