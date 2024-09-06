export const calculateTotalPrice = (carts) => {
  const totalPrice = carts.reduce((acc, curr) => {
    const price = parseFloat(curr.price).toFixed(2);
    const quantity = parseInt(curr.quantity);

    return acc + quantity * parseFloat(price);
  }, 0);

  return totalPrice.toFixed(2);
};
