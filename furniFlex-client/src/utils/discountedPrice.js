export const discountedPrice = (price, discount) => {
  const discoutnAmount = (price * discount) / 100;
  const discountedPrice = price - discoutnAmount;

  return discountedPrice.toFixed(2);
};
