import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import InputCryptoSelect from "./InputCryptoSelect";
import { CoinsType } from "@/lib/types/marketDataTypes";
import { getCoinData } from "@/lib/helperFunctions/coinRainkingApi";

type Props = {};

const CryptoConverter = async (props: Props) => {
  const coins = await getCoinData(
    "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=3h&tiers%5B0%5D=1&orderDirection=desc&limit=50&offset=0"
  );
  const coinData: CoinsType[] = await coins.data.coins;
  return (
    <div>
      <Card className="flex flex-col justify-center items-center">
        <CardHeader className="text-center">
          <CardTitle>Crypto Converter</CardTitle>
          <CardDescription>
            Easily convert between various cryptocurrencies and fiat currencies
            with our intuitive and accurate crypto converter tool.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 max-w-[22rem] lg:max-w-full relative">
          <InputCryptoSelect coinData={coinData} />
        </CardContent>
      </Card>
    </div>
  );
};

export default CryptoConverter;
