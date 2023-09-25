"use client";

import React, { useEffect } from "react";
import TableChart from "./DesktopComps/TableChart";
import useEmblaCarousel from "embla-carousel-react";
import "@/components/hompageComps/CardCarousel.css";
import Autoplay from "embla-carousel-autoplay";
import { usePathname, useRouter } from "next/navigation";
import { CoinsType } from "@/lib/types/marketDataTypes";
import { convertPriceToString } from "@/lib/helperFunctions/cryptoHelperFunctions";
import classNames from "classnames";
import Link from "next/link";

type Props = {
  topThreeCoins: CoinsType[];
};

const EmblaCarousel = (props: Props) => {
  const { topThreeCoins } = props;

  //Embla Crypto Carousel Data
  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: true,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  const filteredGraphPriceData = topThreeCoins.sort(
    (highest, lowest) => +highest.price + +lowest.price
  );

  const pathName = usePathname();
  const router = useRouter();
  useEffect(() => {
    const url = `${pathName}`;
    console.log(url);
  }, [pathName]);

  return (
    <div
      className="embla p-[1rem] w-full max-w-[17rem] md:max-w-full"
      ref={emblaRef}
    >
      <div className="embla__container lg:pr-[7rem] lg:pl-[27rem]">
        {filteredGraphPriceData.map((data, index) => {
          const { sparkline, name, iconUrl, change, price } = data;
          const onClickHandler = () => {
            router.push(`/market/${data.uuid}`);
          };
          return (
            <Link
              href={`/coin/${data.uuid}`}
              onClick={onClickHandler}
              key={index}
              className="embla__slide bg-white border-slate-200 dark:bg-slate-800 dark:border-slate-900 border-2 rounded-lg p-4 shadow-lg flex flex-col justify-center items-center gap-4 overflow-hidden"
            >
              <div className="flex flex-col justify-center items-center">
                <img
                  src={iconUrl}
                  alt={name}
                  className="w-[2rem] h-[2rem] rounded-full"
                />
                <p>{name}</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="">${convertPriceToString(+price)}</p>
                <p
                  className={classNames(
                    "",
                    {
                      "text-red-400": change.includes("-"),
                    },
                    {
                      "text-green-400": !change.includes("-"),
                    }
                  )}
                >
                  {change}
                </p>
                <TableChart sparkline={sparkline} />
              </div>

              <img
                src={iconUrl}
                alt="coin"
                className="w-[13rem] h-[13rem] absolute opacity-10 object-fill"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default EmblaCarousel;
