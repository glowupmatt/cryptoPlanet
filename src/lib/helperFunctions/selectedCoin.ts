export const getToken = async (uuid: string, timePeriod: string) => {
  const url = `https://coinranking1.p.rapidapi.com/coin/${uuid}?timePeriod=${timePeriod}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f5901c7610msheff1191a766569dp168a97jsn74b29aa5c569",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.data.coin;
  } catch (error) {
    console.error(error);
  }
};

export const getCoinHistory = async (uuid: string, timePeriod: string) => {
  const url = `https://coinranking1.p.rapidapi.com/coin/${uuid}/history?&timePeriod=${timePeriod}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f5901c7610msheff1191a766569dp168a97jsn74b29aa5c569",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.data.history;
  } catch (error) {
    console.error(error);
  }
};
