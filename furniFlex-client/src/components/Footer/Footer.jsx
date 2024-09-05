import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { footerLinks } from "../../data/footerLinks";
import facebookIcon from "../../assets/icons/facebook-logo.svg";
import instagramIcon from "../../assets/icons/instagram-logo.svg";
import twitterIcon from "../../assets/icons/twitter-logo.svg";
import linkedinIcon from "../../assets/icons/linkedin-logo.svg";
import usaFlagIcon from "../../assets/icons/usa-flag.png";

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-[1440px] bg-black px-4 pt-20 xl:px-[7.5rem]">
      <div className="grid w-full grid-cols-1 gap-x-1 pb-20 md:grid-cols-12">
        {/* logo */}
        <div className="md:col-span-5">
          <Logo textColor="text-white" />
        </div>

        {/* links */}
        {footerLinks.map((nav, index) => (
          <div key={index} className="md:col-span-2">
            <h6 className="text-lg font-semibold text-white">{nav.category}</h6>
            <ul className="mt-3.5 space-y-2 md:mt-7">
              {nav.links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-lg font-semibold capitalize text-custom-gray-5"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mb-10 h-0.5 w-full bg-custom-gray-5"></div>
      <div className="flex flex-col items-center justify-between gap-x-4 gap-y-7 md:flex-row">
        {/* socials */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img className="size-5" src={facebookIcon} alt="facebook icon" />
          </Link>
          <Link to="/">
            <img className="size-5" src={instagramIcon} alt="facebook icon" />
          </Link>
          <Link to="/">
            <img className="size-5" src={twitterIcon} alt="facebook icon" />
          </Link>
          <Link to="/">
            <img className="size-5" src={linkedinIcon} alt="facebook icon" />
          </Link>
        </div>

        {/* links */}
        <div className="flex flex-col items-center justify-between gap-x-4 gap-y-6 md:flex-row lg:gap-x-6">
          <Link className="text-lg font-semibold text-custom-gray-5" to="/">
            March22 Recap
          </Link>
          <Link className="text-lg font-semibold text-custom-gray-5" to="/">
            Privacy Policy
          </Link>
          <Link className="text-lg font-semibold text-custom-gray-5" to="/">
            General Terms
          </Link>
          <Link className="text-lg font-semibold text-custom-gray-5" to="/">
            Contact
          </Link>
        </div>

        <p className="flex items-center gap-0.5">
          <img className="size-5" src={usaFlagIcon} alt="usa flag" />
          <span className="text-lg font-semibold text-custom-gray-5">
            United States (English)
          </span>
        </p>
      </div>
      <p className="mt-11 pb-4 text-center text-lg font-semibold text-[#323544]">
        EEVE © 2024. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
