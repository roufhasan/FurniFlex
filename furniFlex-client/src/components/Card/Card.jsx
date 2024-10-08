import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsBag } from "react-icons/bs";
import { AuthContext } from "../../Providers/AuthProvider";
import { CartContext } from "../../Providers/CartProvider";
import { discountedPrice } from "../../utils/discountedPrice";

const Card = ({ product }) => {
  const { user } = useContext(AuthContext);
  const { saveCartItem } = useContext(CartContext);
  const { _id, title, price, discount, description, image } = product;
  const discountPrice = discountedPrice(price, discount);

  const item = {
    email: user?.email,
    productId: _id,
    image,
    title,
    price: parseFloat(discountPrice).toFixed(2),
    quantity: 1,
  };

  return (
    <div className="col-span-12 mx-auto max-w-96 rounded-2xl border border-[#f1f1f1] p-4 sm:col-span-6 md:col-span-4">
      <Link
        to={`/products/details/${_id}`}
        className="group block rounded-lg bg-[#f2f2f2] px-5 py-3.5 text-center"
      >
        <motion.img
          whileTap={{ scale: 1 }}
          className="mx-auto size-[12.8rem] transition-all duration-200 group-hover:scale-105"
          src={image}
          alt="wooden chair"
        />
      </Link>
      <Link
        to={`/products/details/${_id}`}
        className="mt-8 inline-block text-lg font-semibold text-[#343434] transition-all hover:text-black"
      >
        {title}
      </Link>
      <div className="my-4 flex items-center gap-3">
        <p className="text-lg font-bold text-[#343434]">€{discountPrice}</p>
        <p className="text-lg font-medium text-[#ABABAB] line-through">
          €{price.toFixed(2)}
        </p>
        <p className="text-lg font-semibold text-[#B92E2E]">{discount}% OFF</p>
      </div>
      <p className="text-sm text-[#838383]">{description}</p>
      {user ? (
        <motion.button
          onClick={() => saveCartItem(item)}
          whileTap={{ scale: 0.95 }}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-md bg-black py-2 font-semibold text-white"
        >
          <BsBag className="text-lg" /> Add to cart
        </motion.button>
      ) : (
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="inline-block w-full"
        >
          <Link
            to="/login"
            className="mt-8 flex w-full items-center justify-center gap-3 rounded-md bg-black py-2 font-semibold text-white"
          >
            <BsBag className="text-lg" /> Add to cart
          </Link>
        </motion.button>
      )}
    </div>
  );
};

export default Card;
