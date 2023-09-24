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
import SelectedToken from "./SelectedToken";
import { MarketDataType, CoinsType } from "@/lib/types/marketDataTypes";
import { SearchCoinType } from "@/lib/types/searchCoin";
import {
  getCoinData,
  getSearchCoinData,
} from "@/lib/helperFunctions/coinRainkingApi";
import CoinList from "./CoinList";
import CryptoSearchBar from "./CryptoSearchBar";
import SearchedCoinList from "./SearchedCoinList";

type Props = {
  setSelectedCoinPrice: React.Dispatch<React.SetStateAction<string>>;
  selectedCoinPrice: string;
  coinData: CoinsType[];
};

const CryptoSelector = (props: Props) => {
  const { setSelectedCoinPrice, selectedCoinPrice, coinData } = props;
  const [searchedCoinData, setSearchedCoinData] = useState<SearchCoinType[]>(
    []
  );
  const [selectedCoin, setSelectedCoin] = useState({} as SearchCoinType);

  useEffect(() => {
    setSelectedCoinPrice(selectedCoin.price);
  }, [selectedCoin, setSelectedCoinPrice]);

  return (
    <Dialog>
      <DialogTrigger className="w-[50%]">
        {Object.keys(selectedCoin).length === 0 ? (
          <p>Open</p>
        ) : (
          <SelectedToken selectedCoin={selectedCoin} />
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-3">
          <DialogTitle>Select Desired Token</DialogTitle>
          <CryptoSearchBar setSearchedCoinData={setSearchedCoinData} />
        </DialogHeader>
        {searchedCoinData.length > 1 ? (
          <SearchedCoinList
            searchedCoinData={searchedCoinData}
            setSelectedCoin={setSelectedCoin}
          />
        ) : (
          <CoinList coinData={coinData} setSelectedCoin={setSelectedCoin} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CryptoSelector;
