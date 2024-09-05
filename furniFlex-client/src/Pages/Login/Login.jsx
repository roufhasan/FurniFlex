import LoginForm from "./LoginForm";
import BrandShowcase from "../../components/BrandShowcase/BrandShowcase";

const Login = () => {
  return (
    <section className="mx-auto flex h-screen min-h-[700px] w-full max-w-[1440px] font-barlow">
      <LoginForm />
      <BrandShowcase />
    </section>
  );
};

export default Login;
