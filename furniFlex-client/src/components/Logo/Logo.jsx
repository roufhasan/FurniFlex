import { Link } from "react-router-dom";
import furniFlexLogo from "../../assets/icons/furniFlex-logo.png";

const Logo = ({ textColor }) => {
  return (
    <Link to="/" className="inline-flex items-center gap-1.5">
      <img className="size-10" src={furniFlexLogo} alt="furniflex logo" />
      <p className={`font-inter text-xl font-bold ${textColor}`}>
        Furni<span className="text-custom-sky-1">Flex</span>
      </p>
    </Link>
  );
};

export default Logo;
