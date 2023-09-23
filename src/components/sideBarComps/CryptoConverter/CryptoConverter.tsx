"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CryptoSelector from "./CryptoSelector";
import { conversionFunction } from "@/lib/helperFunctions/cryptoHelperFunctions";

type Props = {};

const CryptoConverter = (props: Props) => {
  const [selectedCoinPriceOne, setSelectedCoinPriceOne] = useState("");
  const [selectedCoinPriceTwo, setSelectedCoinPriceTwo] = useState("");
  const [inputAmount, setInputAmount] = useState("");
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
          <CardContent className="flex flex-col gap-4">
            <div className="border border-black rounded-md p-4 flex gap-4 w-full">
              <input
                type="text"
                placeholder="Input Amount"
                onChange={(e) => setInputAmount(e.target.value)}
                className="py-1 w-full dark:bg-gray-800 dark:text-gray-100 border border-gray-300 rounded-md px-2"
              />
              <CryptoSelector
                setSelectedCoinPrice={setSelectedCoinPriceOne}
                selectedCoinPrice={selectedCoinPriceOne}
              />
            </div>
            <div className="border border-black rounded-md p-4 flex gap-4 w-full">
              <p className="py-1 w-full dark:bg-gray-800 dark:text-gray-100 border border-gray-300 rounded-md px-2 overflow-scroll">
                {conversionFunction(
                  +inputAmount,
                  +selectedCoinPriceOne,
                  +selectedCoinPriceTwo
                )}
              </p>
              <CryptoSelector
                setSelectedCoinPrice={setSelectedCoinPriceTwo}
                selectedCoinPrice={selectedCoinPriceTwo}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CryptoConverter;
