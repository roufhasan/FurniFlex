import { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../Providers/AuthProvider";

const AuthButton = ({ buttonText }) => {
  const { loading } = useContext(AuthContext);

  return (
    <motion.button
      disabled={loading}
      whileTap={{ scale: 0.95 }}
      type="submit"
      className={`mt-5 block w-full rounded-md py-5 text-lg font-semibold capitalize ${loading ? "bg-black/80 text-white/70" : "bg-black text-white"}`}
    >
      {buttonText}
    </motion.button>
  );
};

export default AuthButton;
