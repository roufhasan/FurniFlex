import BrandShowcase from "../../components/BrandShowcase/BrandShowcase";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <section className="mx-auto flex h-screen min-h-[700px] w-full max-w-[1440px] font-barlow">
      <SignUpForm />
      <BrandShowcase />
    </section>
  );
};

export default SignUp;
