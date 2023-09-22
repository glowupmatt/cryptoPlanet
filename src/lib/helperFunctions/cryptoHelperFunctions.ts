export const convertPriceToString = (number: number) => {
  return number.toLocaleString("en-US", { maximumFractionDigits: 2 });
};

export const conversionFunction = (
  userAmount: number,
  selectedCrypto: number,
  wantedCrypto: number
) => {
  return convertPriceToString((userAmount * selectedCrypto) / wantedCrypto);
};
