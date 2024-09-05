import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import appleIcon from "../../assets/icons/apple-logo.svg";
import googleIcon from "../../assets/icons/google-logo.svg";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const togglePassword = () => {
    setShowPassword((prevPass) => !prevPass);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="w-full max-w-lg rounded-lg bg-zinc-50 p-6">
        {/* welcome heading */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold">Welcome To</h3>
          <h1 className="mb-0.5 mt-1.5 text-[2.5rem] font-bold leading-none">
            Furni<span className="text-custom-sky-1">Flex</span>
          </h1>
          <p className="font-medium text-custom-gray-1">
            Signup for purchase your desire products
          </p>
        </div>

        {/* ==> form div <== */}

        <form
          className="mt-4 flex flex-col gap-3.5"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* first and last name field */}
          <div className="flex items-center justify-center gap-3.5">
            <div className="w-full rounded-md border border-custom-gray-2 bg-white p-3">
              <label
                className="block text-xs text-custom-gray-1"
                htmlFor="firstName"
              >
                First Name(optional)
              </label>
              <input
                className="mt-0.5 block w-full border-none text-sm outline-none"
                type="text"
                id="firstName"
                placeholder="John"
                {...register("firstName")}
              />
            </div>

            <div className="w-full rounded-md border border-custom-gray-2 bg-white p-3">
              <label
                className="block text-xs text-custom-gray-1"
                htmlFor="lastName"
              >
                Last Name(optional)
              </label>
              <input
                className="mt-0.5 block w-full border-none text-sm outline-none"
                type="text"
                id="lastName"
                placeholder="Doe"
                {...register("lastName")}
              />
            </div>
          </div>
          {/* email field */}
          <div className="w-full rounded-md border border-custom-gray-2 bg-white p-3">
            <label
              className={`block text-xs ${errors.email ? "text-red-600" : "text-custom-gray-1"}`}
              htmlFor="email"
            >
              Email address
            </label>
            <input
              className="mt-0.5 block w-full border-none text-sm outline-none"
              type="email"
              id="email"
              placeholder="john@email.com"
              {...register("email", { required: true })}
            />
          </div>
          {/* password field */}
          <div className="flex w-full items-center justify-between gap-3 rounded-md border border-custom-gray-2 bg-white p-3">
            <div className="w-full">
              <label
                className={`block text-xs ${errors.password ? "text-red-600" : "text-custom-gray-1"}`}
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="mt-0.5 block w-full border-none text-sm outline-none"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="*********"
                {...register("password", { required: true })}
              />
            </div>
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="inline-block cursor-pointer"
              onClick={togglePassword}
            >
              {showPassword ? (
                <BsEyeFill className="text-2xl text-custom-gray-1" />
              ) : (
                <BsEyeSlashFill className="text-2xl text-custom-gray-1" />
              )}
            </motion.div>
          </div>
          {/* terms & policy checkbox */}
          <div className="flex items-center gap-1 text-sm font-medium">
            <input
              type="checkbox"
              id="terms"
              {...register("terms", { required: true })}
            />
            <span className={`${errors.terms && "text-red-600"}`}>
              I agree to the{" "}
              <Link to="/" className="underline">
                Terms & Policy
              </Link>
            </span>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-5 block w-full rounded-md bg-black py-5 text-lg font-semibold text-white"
          >
            Signup
          </motion.button>
        </form>

        <div className="mx-auto mt-3.5 flex w-11/12 items-center gap-1">
          <div className="h-0.5 w-full bg-custom-gray-3"></div>
          <p className="text-xs font-medium">or</p>
          <div className="h-0.5 w-full bg-custom-gray-3"></div>
        </div>

        {/* social login buttons */}
        <div className="my-5 flex items-center justify-between gap-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex h-16 w-full items-center justify-center gap-2.5 rounded-md border border-custom-gray-2 bg-white"
          >
            <img className="size-6" src={googleIcon} alt="google icon" />
            <small className="text-xs font-medium">Sign in with Google</small>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex h-16 w-full items-center justify-center gap-2.5 rounded-md border border-custom-gray-2 bg-white"
          >
            <img className="size-6" src={appleIcon} alt="google icon" />
            <small className="text-xs font-medium">Sign in with Apple</small>
          </motion.button>
        </div>

        <p className="text-center text-sm font-medium">
          Have an account?{" "}
          <Link to="/login" className="text-custom-blue-1">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
