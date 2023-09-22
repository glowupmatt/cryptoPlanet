import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Props = {
  marketInfo: { title: string; value: string }[];
};

const MarketInfoCards = (props: Props) => {
  const { marketInfo } = props;
  return (
    <div className="flex flex-col gap-4">
      {marketInfo.map((info, index) => {
        return (
          <Card
            key={index}
            className="flex flex-col gap-[1rem] py-[.5rem] px-[1rem] w-full bg-slate-800/60 dark:bg-slate-800/90"
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
    </div>
  );
};

export default MarketInfoCards;
