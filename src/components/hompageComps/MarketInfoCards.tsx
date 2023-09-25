import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CoinsType } from "@/lib/types/marketDataTypes";
import EmblaCarousel from "./EmblaCarousel";

type Props = {
  marketInfo: { title: string; value: string }[];
  topThreeCoins: CoinsType[];
};

const MarketInfoCards = (props: Props) => {
  const { marketInfo, topThreeCoins } = props;
  return (
    <div className="flex flex-col gap-4 md:flex-row md:justify-center md:items-center mb-[2rem] md:grid md:grid-cols-2">
      {marketInfo.map((info, index) => {
        return (
          <Card
            key={index}
            className="flex flex-col gap-[1rem] py-[.5rem] px-[1rem] w-full bg-slate-800/60 dark:bg-slate-800/90 lg:h-[10rem] lg:justify-center lg:items-center"
          >
            <CardContent className="p-0 text-[0.84211rem] font-[500] opacity-[.8]">
              {info.title}
            </CardContent>
            <CardHeader className="p-0 text-[1.21053rem] font-[700]">
              {info.value}
            </CardHeader>
          </Card>
        );
      })}
      <div className="col-span-2 flex justify-center items-center">
        <EmblaCarousel topThreeCoins={topThreeCoins} />
      </div>
    </div>
  );
};

export default MarketInfoCards;
