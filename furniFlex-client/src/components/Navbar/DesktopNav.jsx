import { NavLink } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { navLinks } from "../../data/navLinks";
import userImg from "../../assets/user.png";

const DesktopNav = () => {
  return (
    <>
      <ul className="hidden items-center gap-2 md:flex">
        {navLinks.map(({ title, url }, index) => (
          <li key={index}>
            <NavLink
              to={url}
              className={({ isActive }) =>
                `rounded-md px-5 py-2 text-lg font-medium capitalize ${isActive && "bg-custom-gray-6"}`
              }
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="hidden items-center gap-6 md:flex">
        <div className="relative inline-block cursor-pointer">
          <BsBag className="text-2xl" />
          <span className="absolute -bottom-1.5 -right-1 size-4 rounded-full bg-black text-center text-xs text-white">
            2
          </span>
        </div>
        <img
          className="size-10 cursor-pointer rounded-full"
          src={userImg}
          alt="user img"
        />
      </div>
    </>
  );
};

export default DesktopNav;
