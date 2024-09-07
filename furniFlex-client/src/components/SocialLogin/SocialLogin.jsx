import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import appleIcon from "../../assets/icons/apple-logo.svg";
import googleIcon from "../../assets/icons/google-logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const SocialLogin = ({ authLink, authText }) => {
  const { googleSignIn, loading, setLoading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        const loggedUser = res.user;
        if (loggedUser) {
          toast.success("Welcome back!");
          navigate(from, { replace: true });
        }
      })
      .cathc((err) => {
        setLoading(false);
        toast.error("Login failed! Try again later.");
        console.log("google login error:", err.message);
      });
  };

  return (
    <>
      <div className="mx-auto mt-3.5 flex w-11/12 items-center gap-1">
        <div className="h-0.5 w-full bg-custom-gray-3"></div>
        <p className="text-xs font-medium">or</p>
        <div className="h-0.5 w-full bg-custom-gray-3"></div>
      </div>

      {/* social login buttons */}
      <div className="my-5 flex items-center justify-between gap-4">
        <motion.button
          onClick={handleGoogleLogin}
          disabled={loading}
          whileTap={{ scale: 0.95 }}
          className="flex h-16 w-full items-center justify-center gap-2.5 rounded-md border border-custom-gray-2 bg-white"
        >
          <img className="size-6" src={googleIcon} alt="google icon" />
          <small className="text-xs font-medium">Sign in with Google</small>
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          disabled={loading}
          className="flex h-16 w-full items-center justify-center gap-2.5 rounded-md border border-custom-gray-2 bg-white"
        >
          <img className="size-6" src={appleIcon} alt="google icon" />
          <small className="text-xs font-medium">Sign in with Apple</small>
        </motion.button>
      </div>

      <p className="mb-4 text-center text-sm font-medium">
        Have an account?{" "}
        <Link to={authLink} className="text-custom-blue-1">
          {authText}
        </Link>
      </p>
    </>
  );
};

export default SocialLogin;
