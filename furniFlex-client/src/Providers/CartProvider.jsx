import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import axios from "axios";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [carts, setCarts] = useState([]);

  // Get cart items
  const getCarts = (user) => {
    axios
      .get(`http://localhost:5000/carts/${user.email}`)
      .then((res) => {
        setCarts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(`error getting carts: ${err}`);
      });
  };

  // Add a item to the cart or update the quantity if exists
  const saveCartItem = (item) => {
    axios
      .put("http://localhost:5000/carts", item)
      .then((res) => {
        if (res.data.acknowledged) {
          setLoading(false);
          // Update the cart state
          setCarts((prevCartItems) => {
            // Find existing item
            const existingItem = prevCartItems.find(
              (cartItem) => cartItem.productId === item.productId,
            );

            if (existingItem) {
              // Update the quantity of the existing item
              return prevCartItems.map((cartItem) =>
                cartItem.productId === item.productId
                  ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                  : cartItem,
              );
            } else {
              // Add the new item to the cart
              return [item, ...prevCartItems];
            }
          });
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(`error adding to cart: ${err}`);
      });
  };

  useEffect(() => {
    if (user && user.email) {
      getCarts(user);
    }
  }, [user]);

  const cartInfo = { carts, loading, saveCartItem };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
