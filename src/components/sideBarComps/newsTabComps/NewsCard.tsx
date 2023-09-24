import React from "react";
import { ArticleType, ImageType } from "@/lib/types/newsDataType";
import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

type Props = {
  articles: ArticleType[];
};

const NewsCard = (props: Props) => {
  const { articles } = props;
  return (
    <div className="">
      <Card>
        <CardHeader>
          <CardTitle>Latest Crypto News</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 lg:max-h-[26rem] overflow-scroll md:grid md:grid-cols-2 lg:flex">
          {articles.map((article: ArticleType, index: number) => {
            const { image } = article;
            return (
              <Link href={article.url} target="_blank" key={index}>
                <Card className="flex flex-col gap-4 md:h-[20rem] lg:h-full overflow-scroll lg:overflow-auto">
                  <CardHeader>
                    <CardTitle>{article.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2">
                    {!image?.contentUrl ? (
                      <div className="h-[10rem] w-full max-w-full animate-pulse bg-slate-400 rounded-md flex justify-center items-center text-center">
                        No Image Provided
                      </div>
                    ) : (
                      <img
                        alt={article.name}
                        src={image?.contentUrl}
                        className="rounded-md"
                      />
                    )}
                    <CardDescription>{article.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </CardContent>
      </Card>
      <div></div>
    </div>
  );
};

export default NewsCard;
