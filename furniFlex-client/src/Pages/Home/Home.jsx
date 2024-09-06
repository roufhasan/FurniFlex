import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="mx-auto flex h-[calc(100vh-127px)] max-h-[740px] w-full max-w-[1440px] flex-col items-center justify-center bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2c5364] text-white">
      <h3 className="text-3xl font-semibold">Welcome To</h3>
      <h className="text-8xl font-bold">
        Furni<span className="text-custom-sky-1">Flex</span>
      </h>
      <p className="mb-10 mt-8 text-lg font-medium italic">
        Discover Modern, Traditional & Beautiful Furniture For Your Home or Work
        Space
      </p>
      <motion.button whileTap={{ scale: 0.95 }}>
        <Link
          className="rounded-md bg-amber-500 px-10 py-4 text-xl font-semibold"
          to="/products/rocking-chair"
        >
          Explore Shop
        </Link>
      </motion.button>
    </div>
  );
};

export default Home;
