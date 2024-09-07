import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { motion } from "framer-motion";
import { BsBag } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { AuthContext } from "../../Providers/AuthProvider";
import { CartContext } from "../../Providers/CartProvider";
import { navLinks } from "../../utils/data/navLinks";
import toast from "react-hot-toast";

const DesktopNav = () => {
  const { user, logOut } = useContext(AuthContext);
  const { carts, setCarts } = useContext(CartContext);

  // Handle user logout
  const handleUserLogOut = () => {
    logOut()
      .then(() => {
        setCarts([]);
        toast.success("Logged out!");
      })
      .catch((err) => {
        toast.error("Something went wrong!");
        console.error(err);
      });
  };

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
        {user ? (
          <>
            <Link to="/carts" className="relative inline-block cursor-pointer">
              <BsBag className="text-2xl" />
              <span className="absolute -bottom-1.5 -right-1 size-4 rounded-full bg-black text-center text-xs text-white">
                {carts?.length}
              </span>
            </Link>

            <div className="relative">
              <Menu>
                <MenuButton>
                  {user?.photoURL ? (
                    <img
                      className="size-10 cursor-pointer rounded-full"
                      src={user.photoURL}
                      alt={`${user.displayName} image`}
                    />
                  ) : (
                    <IoPersonCircle className="text-[2.5rem]" />
                  )}
                </MenuButton>

                {/* dropdown logout button */}
                <MenuItems
                  transition
                  className="right1/2 absolute left-1/2 top-full -translate-x-1/2 rounded-lg border border-custom-gray-3 bg-white transition duration-100 ease-out"
                >
                  <MenuItem onClick={handleUserLogOut} className="rounded-lg">
                    <button className="flex items-center justify-center gap-2 px-4 py-2 transition-all hover:bg-red-100 hover:text-red-600">
                      <FaPowerOff className="text-red-600" />
                      <span className="text-lg font-medium">Logout</span>
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </>
        ) : (
          <motion.button whileTap={{ scale: 0.95 }}>
            <Link
              className="rounded-md bg-black px-4 py-1 text-lg font-medium text-white"
              to="/login"
            >
              Login
            </Link>
          </motion.button>
        )}
      </div>
    </>
  );
};

export default DesktopNav;
