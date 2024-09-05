import Logo from "../Logo/Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between border-b border-custom-gray-3 px-4 py-10 font-barlow xl:px-[7.5rem]">
      <Logo />
      <MobileNav />
      <DesktopNav />
    </nav>
  );
};

export default Navbar;
