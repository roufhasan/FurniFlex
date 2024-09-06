import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsBag } from "react-icons/bs";
import { discountedPrice } from "../../utils/discountedPrice";
import chairImg from "../../assets/chair.png";

const Card = ({ product }) => {
  const { title, price, discount, description } = product;

  return (
    <div className="col-span-12 mx-auto max-w-96 rounded-2xl border border-[#f1f1f1] p-4 sm:col-span-6 md:col-span-4">
      <Link
        to="/"
        className="group inline-block rounded-lg bg-[#f2f2f2] px-5 py-3.5"
      >
        <motion.img
          whileTap={{ scale: 1 }}
          className="transition-all duration-200 group-hover:scale-105"
          src={chairImg}
          alt="wooden chair"
        />
      </Link>
      <Link
        to="/"
        className="text-lg font-semibold text-[#343434] transition-all hover:text-black"
      >
        {title}
      </Link>
      <div className="my-4 flex items-center gap-3">
        <p className="text-lg font-bold text-[#343434]">
          €{discountedPrice(price, discount)}
        </p>
        <p className="text-lg font-medium text-[#ABABAB] line-through">
          €{price.toFixed(2)}
        </p>
        <p className="text-lg font-semibold text-[#B92E2E]">{discount}% OFF</p>
      </div>
      <p className="text-sm text-[#838383]">{description}</p>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="mt-8 flex w-full items-center justify-center gap-3 rounded-md bg-black py-2 font-semibold text-white"
      >
        <BsBag className="text-lg" /> Add to cart
      </motion.button>
    </div>
  );
};

export default Card;
