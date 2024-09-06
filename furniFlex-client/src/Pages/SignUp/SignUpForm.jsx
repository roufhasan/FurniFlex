import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { AuthContext } from "../../Providers/AuthProvider";
import FormContainer from "../../components/shared/FormContainer";
import AuthButton from "../../components/buttons/AuthButton";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUpForm = () => {
  const { createUser, updateUserProfile, setLoading } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // create new user with email and password
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser); // TODO: remove this console.log of logged user

        // update user name
        if (data.firstName && data.lastName) {
          const name = `${data.firstName} ${data.lastName}`;
          updateUserProfile(name)
            .then(() => {
              setLoading(false);
              navigate("/");
            })
            .catch((error) => {
              setLoading(false);
              console.log("error profile name update:", error);
            });
        } else {
          setLoading(false);
          navigate("/");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log("signup error:", error.message);
      });

    // reset form data
    reset();
  };

  // show & hide password
  const togglePassword = () => {
    setShowPassword((prevPass) => !prevPass);
  };

  return (
    <FormContainer>
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
              {errors.password
                ? "Password must be min 6 characters"
                : "Password"}
            </label>
            <input
              className="mt-0.5 block w-full border-none text-sm outline-none"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="*********"
              {...register("password", {
                required: true,
                pattern: /^.{6,}$/,
              })}
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
          <label
            htmlFor="terms"
            className={`${errors.terms && "text-red-600"}`}
          >
            I agree to the{" "}
            <Link to="/" className="underline">
              Terms & Policy
            </Link>
          </label>
        </div>

        <AuthButton buttonText="signup" />
      </form>

      {/* Social Login Buttons */}
      <SocialLogin authLink="/login" authText="Sign In" />
    </FormContainer>
  );
};

export default SignUpForm;
