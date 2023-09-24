export const getNewsData = async () => {
  const url =
    "https://bing-news-search1.p.rapidapi.com/news/search?q=crypto&count=5&freshness=Day&originalImg=true&textFormat=Raw&safeSearch=Strict";
  const options = {
    method: "GET",
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI as string,
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
