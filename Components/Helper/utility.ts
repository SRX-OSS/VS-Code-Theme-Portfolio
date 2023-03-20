export const numberTOWords = (num: any) => {
  if (num >= 100000000) {
    return (num / 1000000).toFixed(2) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(2) + "K";
  }
  return num + "";
};
