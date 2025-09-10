import { NavLink } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/img/edu-logo.png";
import { LuSquareMenu } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const menuContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const menuItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function Navbar() {
  const navigate = useNavigate();
  const { auth, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-3 lg:w-[90%] mx-auto relative">
      <div className="fixed bg-white w-full z-10 top-0 left-0 md:px-14 px-8 py-4 flex justify-between items-center gap-2">
        <NavLink to="/">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-14 w-14 mr-2 lg:mr-4" />
            <p>
              <span className="text-logoColor1 font-semibold text-3xl">
                Edu.
              </span>
              <span className="text-logoColor2 font-semibold text-3xl">
                Champs
              </span>
            </p>
          </div>
        </NavLink>
        {/* Menu Button */}
        <button
          className="lg:hidden block transition-all duration-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <LuSquareMenu className="stroke-logoColor2 text-4xl" />
        </button>

        <div className="hidden lg:flex items-center gap-5">
          <ul className="flex gap-5 items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-semibold text-lg"
                    : "text-linkColor1 hover:text-linkColor2 font-normal text-lg"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-semibold text-lg"
                    : "text-linkColor1 hover:text-linkColor2 font-normal text-lg"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-semibold text-lg"
                    : "text-linkColor1 hover:text-linkColor2 font-normal text-lg"
                }
              >
                Courses
              </NavLink>
            </li>
            <li
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuContainer}
                className="relative"
              >
                <button className=" flex items-center text-linkColor1 transition-all duration-500 hover:text-linkColor2 font-normal text-lg">
                  Pages
                  <IoIosArrowDown />
                </button>
                {open && (
                  <motion.ul
                    variants={menuItem}
                    className="absolute bg-white p-3 top-7 left-0 transition-all duration-500"
                  >
                    {/* <li
                      className=" border-b border-b-logoColor1 pb-1 mb-1"
                      onClick={() => setOpen(!open)}
                    >
                      <NavLink
                        to="/ourteam"
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-500 font-semibold text-lg"
                            : "text-linkColor1 hover:text-linkColor2 font-normal text-lg"
                        }
                      >
                        Our Team
                      </NavLink>
                    </li> */}
                    <li onClick={() => setOpen(!open)}>
                      <NavLink
                        to="/testimonials"
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-500 font-semibold text-lg"
                            : "text-linkColor1 hover:text-linkColor2 font-normal text-lg"
                        }
                      >
                        Testimonials
                      </NavLink>
                    </li>
                  </motion.ul>
                )}
              </motion.div>
            </li>
            {/* <li>
              <Link
                to="/blogs"
                className="text-linkColor1 hover:text-linkColor2 font-normal text-lg"
              >
                Blogs
              </Link>
            </li> */}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-semibold text-lg"
                    : "text-linkColor1 hover:text-linkColor2 font-normal text-lg"
                }
              >
                Contact
              </NavLink>
            </li>
            {auth?.token ? (
              <>
                <li>
                  <NavLink
                    to={`/${auth.role}/dashboard`}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-500 font-semibold text-lg"
                        : "text-linkColor1 hover:text-linkColor2 font-normal text-lg"
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={() => {
                      logout();
                      navigate("/login");
                    }}
                    className="text-linkColor1 hover:text-linkColor2 font-normal text-lg"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 font-semibold text-lg"
                      : "text-linkColor1 hover:text-linkColor2 font-normal text-lg"
                  }
                >
                  <IoPersonSharp className="text-lg align-middle" />
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
      {/* mobile menu */}
      {menuOpen && (
        <div className="lg:hidden fixed top-[72px] w-full bg-white z-10  p-10 left-0">
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuContainer}
            className="lg:hidden flex flex-col gap-5 text-logoColor1"
          >
            <motion.li
              variants={menuItem}
              className="border-b border-logoColor1 pb-1 uppercase"
            >
              <NavLink
                to="/"
                className="uppercase"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </motion.li>
            <motion.li
              variants={menuItem}
              className="border-b border-logoColor1 pb-1 uppercase"
            >
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
            </motion.li>
            <motion.li
              variants={menuItem}
              className="border-b border-logoColor1 pb-1 "
            >
              <NavLink
                to="/courses"
                className="uppercase"
                onClick={() => setMenuOpen(false)}
              >
                Courses
              </NavLink>
            </motion.li>
            <motion.li
              variants={menuItem}
              className="border-b border-logoColor1 pb-1 uppercase"
            >
              <button
                className="flex align-center justify-between w-full text-left uppercase"
                onClick={() => setOpen(!open)}
              >
                Pages
                <IoIosArrowDown />
              </button>
              {open && (
                <div>
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={menuContainer}
                    className="p-3"
                  >
                    {/* <motion.li
                      variants={menuItem}
                      className="border-b border-logoColor1  uppercase"
                    >
                      <NavLink to="/ourteam" onClick={() => setMenuOpen(false)}>
                        Our Team
                      </NavLink>
                    </motion.li> */}
                    <motion.li variants={menuItem} className="pt-1 uppercase">
                      <NavLink
                        to="/testimonials"
                        onClick={() => setMenuOpen(false)}
                      >
                        Testimonials
                      </NavLink>
                    </motion.li>
                  </motion.ul>
                </div>
              )}
            </motion.li>

            <motion.li
              variants={menuItem}
              className="border-b border-logoColor1 pb-1 uppercase"
            >
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
            </motion.li>
            {auth?.token ? (
              <>
                <motion.li
                  variants={menuItem}
                  className="border-b border-logoColor1 pb-1 uppercase"
                >
                  <NavLink
                    to={`/${auth.role}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    DashBoard
                  </NavLink>
                </motion.li>
                <motion.li
                  variants={menuItem}
                  className="border-b border-logoColor1 pb-1 uppercase"
                >
                  <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                    Logout
                  </NavLink>
                </motion.li>
              </>
            ) : (
              <motion.li
                variants={menuItem}
                className="border-b border-logoColor1 pb-1 uppercase"
              >
                <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                  Login
                </NavLink>
              </motion.li>
            )}
          </motion.ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
