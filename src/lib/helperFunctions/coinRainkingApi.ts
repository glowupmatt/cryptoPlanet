const apiKey = process.env.NEXT_PUBLIC_RAPIDAPI as string;

const options: RequestInit = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    "X-RapidAPI-Key": apiKey,
  },
};

export const getCoinData = async (url: string) => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getSearchCoinData = async (searchTerm: string) => {
  const url = `https://coinranking1.p.rapidapi.com/search-suggestions?referenceCurrencyUuid=yhjMzLPhuIDl&query=${searchTerm}`;
  const SearchOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, SearchOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
