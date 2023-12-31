import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import SideBar from "./SideBar";
import { MarketDataType } from "@/lib/types/marketDataTypes";
import { getCoinData } from "@/lib/helperFunctions/coinRainkingApi";
import { convertPriceToString } from "@/lib/helperFunctions/cryptoHelperFunctions";
import PageHeader from "./PageHeader";
import { CoinsType } from "@/lib/types/marketDataTypes";

type Props = {
  children: React.ReactNode;
};

const PageTemplate = async (props: Props) => {
  const coinData: MarketDataType | any = await getCoinData(
    "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=10&offset=0"
  );
  const { data } = coinData;
  const { total24hVolume, totalMarketCap } = data.stats;
  const topThreeCoins: CoinsType[] = data.coins;

  const total24hVolumeString = convertPriceToString(+total24hVolume);
  const totalMarketCapString = convertPriceToString(+totalMarketCap);
  const marketInfo = [
    { title: "24h Volume", value: total24hVolumeString },
    { title: "Market Cap", value: totalMarketCapString },
  ];
  const { children } = props;
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col min-h-screen items-center p-[1.5rem] gap-4 lg:grid grid-cols-4 grid-flow-row w-full md:w-[90%] lg:w-full max-w-screen-xl">
        <section className="h-full lg:col-span-4 lg:row-start-1 w-full">
          <Nav />
        </section>
        <div className="lg:col-start-1 lg:col-end-5 lg:row-span-2">
          <PageHeader marketInfo={marketInfo} topThreeCoins={topThreeCoins} />
        </div>
        <main className="lg:col-span-3 lg:row-span-2 max-w-full">
          {children}
        </main>
        <aside className=" w-full self-start">
          <SideBar />
        </aside>
        <section className="lg:col-start-1 lg:row-span-6 lg:col-span-4">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default PageTemplate;
