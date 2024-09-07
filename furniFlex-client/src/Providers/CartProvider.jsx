import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [carts, setCarts] = useState([]);

  // Get cart items
  const getCarts = (user) => {
    axios
      .get(`https://furniflex-server-hridoy.vercel.app/carts/${user.email}`)
      .then((res) => {
        setCarts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Something went wrong!");
        console.log(`error getting carts: ${err}`);
      });
  };

  // Add a item to the cart or update the quantity if exists
  const saveCartItem = (item) => {
    axios
      .put("https://furniflex-server-hridoy.vercel.app/carts", item)
      .then((res) => {
        if (res.data.acknowledged) {
          setLoading(false);
          toast.success("Added to Cart");
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
        toast.error("Something went wrong!");
        console.log(`error adding to cart: ${err}`);
      });
  };

  // Update a item quantity from carts
  const updateQuantity = (_id, productId, quantity) => {
    if (_id && productId && quantity) {
      setLoading(true);

      axios
        .patch(`https://furniflex-server-hridoy.vercel.app/carts/${_id}`, {
          quantity,
        })
        .then((res) => {
          if (res.data.acknowledged && res.data.matchedCount > 0) {
            setLoading(false);
            const oldItem = carts.find((item) => item.productId === productId);
            oldItem.quantity = quantity;
          }
        })
        .catch((err) => {
          setLoading(false);
          toast.error("Something went wrong!");
          console.log(`error updating cart quantity: ${err}`);
        });
    }
  };

  // Delete a item from carts
  const deleteCartItem = (_id, productId) => {
    if (_id && productId) {
      setLoading(true);
      axios
        .delete(`https://furniflex-server-hridoy.vercel.app/carts/${_id}`)
        .then((res) => {
          if (res.data.acknowledged && res.data.deletedCount > 0) {
            setLoading(false);
            toast.success("Item Deleted");
            setCarts(carts.filter((item) => item.productId !== productId));
          }
        })
        .catch((err) => {
          setLoading(false);
          toast.error("Something went wrong!");
          console.error(`error deleting cart item: ${err}`);
        });
    }
  };

  useEffect(() => {
    if (user && user.email) {
      getCarts(user);
    }
  }, [user]);

  const cartInfo = {
    carts,
    setCarts,
    loading,
    saveCartItem,
    updateQuantity,
    deleteCartItem,
  };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
