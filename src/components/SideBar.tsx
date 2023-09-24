import React from "react";
import CryptoConverter from "./sideBarComps/CryptoConverter/CryptoConverter";
import NewsCard from "./sideBarComps/newsTabComps/NewsCard";
import { getNewsData } from "@/lib/helperFunctions/bingNewsApi";
import { NewsDataType, ArticleType } from "@/lib/types/newsDataType";

type Props = {};

const SideBar = async (props: Props) => {
  const newsData: NewsDataType | any = await getNewsData();
  const articles: ArticleType[] = newsData.value;

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full lg:max-h-screen">
      <CryptoConverter />
      <NewsCard articles={articles} />
    </div>
  );
};

export default SideBar;
