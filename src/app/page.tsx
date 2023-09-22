import Image from "next/image";
import { getCoinData } from "@/lib/helperFunctions/coinRainkingApi";
import { MarketDataType } from "@/lib/types/marketDataTypes";
import { convertPriceToString } from "@/lib/helperFunctions/cryptoHelperFunctions";
import MarketInfoCards from "@/components/hompageComps/MarketInfoCards";
import { DataTable } from "@/components/hompageComps/DataTable";
import { columns } from "@/components/hompageComps/columns";

export default async function Home() {
  // const coinData: MarketDataType | any = await getCoinData(
  //   "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=10&offset=0"
  // );
  // const {
  //   data: {
  //     stats: { total24hVolume, totalMarketCap },
  //   },
  // } = coinData;
  // const total24hVolumeString = convertPriceToString(+total24hVolume);
  // const totalMarketCapString = convertPriceToString(+totalMarketCap);
  const total24hVolumeString = "39,440,958,867";
  const totalMarketCapString = "1,065,581,391,475";
  const marketInfo = [
    { title: "24h Volume", value: total24hVolumeString },
    { title: "Market Cap", value: totalMarketCapString },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col justify-center items-center text-center gap-4">
        <h2 className="text-[1.5rem] font-[700] leading-[1.5rem]">
          Best Coin Price Tracker on the Market
        </h2>
        <p>
          With Crypto Planet, you can track all your crypto assets from one
          interface.
        </p>
      </div>
      <MarketInfoCards marketInfo={marketInfo} />
      <DataTable columns={columns} />
    </div>
  );
}
