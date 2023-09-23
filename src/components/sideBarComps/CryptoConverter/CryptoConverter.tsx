import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CryptoSelector from "./CryptoSelector";
import { getCoinData } from "@/lib/helperFunctions/coinRainkingApi";
import { MarketDataType } from "@/lib/types/marketDataTypes";

type Props = {};

const CryptoConverter = async (props: Props) => {
  // const coinData: MarketDataType[] | any = getCoinData(
  //   "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=3h&tiers%5B0%5D=1&orderDirection=desc&limit=50&offset=0"
  // )
  // const {data:{coins}} = coinData
  // .then((res) => {
  //   setCoinData(res.data.coins);
  // });
  return (
    <div>
      <div>
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Crypto Converter</CardTitle>
            <CardDescription>
              Easily convert between various cryptocurrencies and fiat
              currencies with our intuitive and accurate crypto converter tool.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border border-black rounded-md p-4 flex gap-4 w-full">
              <input
                type="text"
                placeholder="Input Amount"
                className="py-1 w-full dark:bg-gray-800 dark:text-gray-100 border border-gray-300 rounded-md px-2"
              />
              <CryptoSelector />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CryptoConverter;
