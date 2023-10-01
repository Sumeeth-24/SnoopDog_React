export const getRandomPrice = () => {
  const minPrice = 1.0;
  const maxPrice = 10.0;
  const randomPrice = (
    Math.random() * (maxPrice - minPrice) +
    minPrice
  ).toFixed(2);
  return `$${randomPrice}`;
};
