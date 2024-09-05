import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import FormContainer from "../../components/shared/FormContainer";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import AuthButton from "../../components/buttons/AuthButton";

const LoginForm = () => {
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
    <FormContainer>
      <h1 className="text-[2rem] font-medium">Welcome Back!</h1>
      <p className="mt-0.5 font-medium text-custom-gray-1">
        Enter your Credentials to access your account
      </p>

      <form className="mt-11" onSubmit={handleSubmit(onSubmit)}>
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
        <div className="mt-3.5 flex w-full items-center justify-between gap-3 rounded-md border border-custom-gray-2 bg-white p-3">
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

        <p className="mt-2 text-right">
          <Link className="text-sm font-medium text-custom-sky-1" to="/login">
            Forgot Password
          </Link>
        </p>

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

        <AuthButton buttonText="sign in" />
      </form>

      {/* Social Login Buttons */}
      <SocialLogin authLink="/signup" authText="Sign Up" />
    </FormContainer>
  );
};

export default LoginForm;
