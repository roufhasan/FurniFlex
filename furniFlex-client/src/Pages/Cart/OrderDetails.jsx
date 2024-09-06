import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TfiInfoAlt } from "react-icons/tfi";
import { calculateTotalPrice } from "../../utils/calculateTotalPrice";

const OrderDetails = ({ carts }) => {
  return (
    <div className="sm:min-w-full md:min-w-72 lg:min-w-80 xl:min-w-96">
      <h1 className="mb-10 text-[1.75rem] font-semibold text-[#1e1e1e]">
        Order details
      </h1>
      {/* details container */}
      <div className="rounded-xl bg-[#fafafa] p-6">
        <div className="space-y-3 border-b border-[#ECECEC] pb-5">
          <p className="flex items-start justify-between text-xl text-[#656565]">
            <span>Subtotal</span>
            <span>€ {calculateTotalPrice(carts)}</span>
          </p>
          <p className="flex items-start justify-between text-xl text-[#656565]">
            <span>Shipping</span>
            <span>Free</span>
          </p>
          <p className="flex items-start justify-between text-xl text-[#656565]">
            <span className="flex items-center gap-2">
              Estimated Tax <TfiInfoAlt className="cursor-pointer text-sm" />
            </span>
            <span>€-</span>
          </p>
        </div>
        <p className="mt-5 flex items-center justify-between text-2xl font-semibold text-[#656565]">
          <span>Total</span>
          <span className="text-[#0E0E0E]">€ {calculateTotalPrice(carts)}</span>
        </p>
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        className="mt-6 inline-block w-full"
      >
        <Link
          className="inline-block w-full rounded-md bg-black px-5 py-4 text-center text-lg font-medium uppercase text-white"
          to="/checkout"
        >
          Go to Checkout
        </Link>
      </motion.button>
    </div>
  );
};

export default OrderDetails;
