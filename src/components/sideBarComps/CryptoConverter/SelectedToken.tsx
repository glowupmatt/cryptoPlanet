import { MarketDataType } from "@/lib/types/marketDataTypes";
import React from "react";

type Props = {
  selectedCoin: MarketDataType;
};

const SelectedToken = (props: Props) => {
  const {
    selectedCoin: {
      data: { coins },
    },
  } = props;
  console.log(coins);
  return <div>SearchFeature</div>;
};

export default SelectedToken;
