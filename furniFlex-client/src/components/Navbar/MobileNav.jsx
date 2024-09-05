import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { BsList } from "react-icons/bs";
import { navLinks } from "../../data/navLinks";

const MobileNav = () => {
  const sideBarRef = useRef();
  const menuRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  // Toggle mobile menu Visibility
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    const handleClickOutside = (e) => {
      if (e.target === sideBarRef.current || e.target === menuRef.current) {
        setShowMenu(!showMenu);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <>
      {/* menu toggle button */}
      <BsList
        onClick={() => setShowMenu(true)}
        className="cursor-pointer text-2xl md:hidden"
      />

      {showMenu && (
        <div
          ref={sideBarRef}
          className="fixed left-0 top-0 z-50 h-full min-h-screen w-full overflow-y-auto bg-black/50 text-right md:hidden"
        >
          <div
            ref={menuRef}
            className="ml-auto h-full min-h-screen w-3/4 overflow-y-auto bg-white px-4 py-4"
          >
            <div className="flex h-full flex-col overflow-y-auto text-left">
              <Link
                to="/"
                onClick={() => setShowMenu(false)}
                className="text-2xl font-semibold"
              >
                Explore
              </Link>

              {/* navlinks */}
              <ul className="my-6 flex flex-1 flex-col gap-2 md:hidden">
                {navLinks.map(({ title, url }, index) => (
                  <li key={index}>
                    <NavLink
                      to={url}
                      onClick={() => setShowMenu(false)}
                      className="rounded-md py-2 text-lg font-medium capitalize"
                    >
                      {title}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <motion.button whileTap={{ scale: 0.95 }}>
                <Link
                  to="/login"
                  onClick={() => setShowMenu(false)}
                  className="block w-full rounded-md bg-black py-2 text-center font-medium text-white"
                >
                  Sign In
                </Link>
              </motion.button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
