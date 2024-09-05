import { motion } from "framer-motion";

const AuthButton = ({ buttonText }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      type="submit"
      className="mt-5 block w-full rounded-md bg-black py-5 text-lg font-semibold capitalize text-white"
    >
      {buttonText}
    </motion.button>
  );
};

export default AuthButton;
