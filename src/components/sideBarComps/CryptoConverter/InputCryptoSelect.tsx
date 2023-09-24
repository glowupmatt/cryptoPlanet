"use client";
import React, { useState } from "react";
import CryptoSelector from "./CryptoSelector";
import { conversionFunction } from "@/lib/helperFunctions/cryptoHelperFunctions";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import { CoinsType } from "@/lib/types/marketDataTypes";

type Props = {
  coinData: CoinsType[];
};

const InputCryptoSelect = (props: Props) => {
  const { coinData } = props;
  const [selectedCoinPriceOne, setSelectedCoinPriceOne] = useState("");
  const [selectedCoinPriceTwo, setSelectedCoinPriceTwo] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  return (
    <div className="flex flex-col gap-3">
      <div
        className="border border-black rounded-md p-4 flex gap-4 w-full"
        id="1"
      >
        <input
          type="text"
          placeholder="Input Amount"
          onChange={(e) => setInputAmount(e.target.value)}
          className="py-1 w-full dark:bg-gray-800 dark:text-gray-100 border border-gray-300 rounded-md px-2"
        />
        <CryptoSelector
          setSelectedCoinPrice={setSelectedCoinPriceOne}
          selectedCoinPrice={selectedCoinPriceOne}
          coinData={coinData}
        />
      </div>
      <div className="w-full flex justify-center items-center rotate-90">
        <MultipleStopIcon
          sx={{
            width: 40,
            height: 40,
          }}
        />
      </div>
      <div
        className="border border-black rounded-md p-4 flex gap-4 w-full"
        id="2"
      >
        <p className="py-1 w-full dark:bg-gray-800 dark:text-gray-100 border border-gray-300 rounded-md px-2 overflow-scroll text-[.9rem]">
          {inputAmount === null || inputAmount === ""
            ? "Select Token"
            : conversionFunction(
                +inputAmount,
                +selectedCoinPriceOne,
                +selectedCoinPriceTwo
              )}
        </p>
        <CryptoSelector
          setSelectedCoinPrice={setSelectedCoinPriceTwo}
          selectedCoinPrice={selectedCoinPriceTwo}
          coinData={coinData}
        />
      </div>
    </div>
  );
};

export default InputCryptoSelect;
