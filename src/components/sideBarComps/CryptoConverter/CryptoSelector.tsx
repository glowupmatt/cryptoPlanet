"use client";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SearchFeature from "./SelectedToken";
import { MarketDataType } from "@/lib/types/marketDataTypes";
import { getCoinData } from "@/lib/helperFunctions/coinRainkingApi";
import Image from "next/image";
import CoinList from "./CoinList";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CryptoSearchBar from "./CryptoSearchBar";

type Props = {};

const CryptoSelector = (props: Props) => {
  const [coinData, setCoinData] = useState<MarketDataType[]>([]);
  const [submittedTerm, setSubmittedTerm] = useState("");
  const [selectedCoin, setSelectedCoin] = useState({} as MarketDataType);

  useEffect(() => {
    getCoinData(
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=3h&tiers%5B0%5D=1&orderDirection=desc&limit=50&offset=0"
    ).then((res) => {
      setCoinData(res.data.coins);
    });
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/search-suggestions",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        query: submittedTerm,
      },
      headers: {
        "X-RapidAPI-Key": "f5901c7610msheff1191a766569dp168a97jsn74b29aa5c569",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    const getSearchCoinData = async (url: string) => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
      } catch (error) {
        console.error(error);
      }
    };
    getSearchCoinData(options.url).then((res) => {
      console.log(res);
    });
  }, [submittedTerm]);

  return (
    <Dialog>
      <DialogTrigger>
        {Object.keys(selectedCoin).length === 0 ? (
          <p>Open</p>
        ) : (
          <SearchFeature selectedCoin={selectedCoin} />
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-3">
          <DialogTitle>Select Desired Token</DialogTitle>
          <CryptoSearchBar setSubmittedTerm={setSubmittedTerm} />
        </DialogHeader>
        <CoinList coinData={coinData} />
      </DialogContent>
    </Dialog>
  );
};

export default CryptoSelector;
