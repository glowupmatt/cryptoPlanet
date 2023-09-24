"use client";
import React, { useState, useEffect } from "react";
import { getToken } from "@/lib/helperFunctions/selectedCoin";
import { selectedTokenType } from "@/lib/types/selectedTokenType";
import TokenInfo from "@/components/selectedTokenComps/TokenInfo";
import CoinInfoData from "@/components/selectedTokenComps/tokenInfoComps/CoinInfoData";
import TimeFilters from "@/components/selectedTokenComps/TimeFilters";
import SelectedTokenChart from "@/components/selectedTokenComps/SelectedTokenChart";

type Props = {
  params: {
    uuid: string;
  };
};

const CoinPage = (props: Props) => {
  const {
    params: { uuid },
  } = props;

  const [token, setToken] = useState<selectedTokenType>();
  const [timePeriod, setTimePeriod] = useState<string>("24h");
  useEffect(() => {
    const getTokenData = async () => {
      const data = await getToken(uuid, timePeriod);
      setToken(data);
    };
    getTokenData();
  }, [uuid, timePeriod]);

  return (
    <div className="h-full min-h-screen">
      <TokenInfo token={token} />
      <CoinInfoData token={token} />
      <div className="rounded-md w-full lg:flex">
        <div className="lg:h-screen w-full">
          <TimeFilters
            token={token}
            timePeriod={timePeriod}
            setTimePeriod={setTimePeriod}
          />
          <SelectedTokenChart token={token} timePeriod={timePeriod} />
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
