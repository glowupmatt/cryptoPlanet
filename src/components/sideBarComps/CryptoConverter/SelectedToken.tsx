import { CoinsType } from "@/lib/types/marketDataTypes";
import React from "react";
import Image from "next/image";
import { SearchCoinType } from "@/lib/types/searchCoin";

type Props = {
  selectedCoin: SearchCoinType;
};

const SelectedToken = (props: Props) => {
  const {
    selectedCoin: { iconUrl, name, symbol },
  } = props;

  return (
    <div className="w-full flex items-center justify-center gap-2">
      <p className="text-center">{symbol}</p>
      <Image
        src={iconUrl}
        width={20}
        height={20}
        alt={name}
        className="w-[20px] h-[20px] object-cover"
      />
    </div>
  );
};

export default SelectedToken;
