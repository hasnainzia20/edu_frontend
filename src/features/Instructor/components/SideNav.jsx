import { NavLink } from "react-router-dom";
import logo from "../../../assets/img/edu-logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

function SideNav() {
  const { auth, logout } = useContext(AuthContext);
  return (
    <div className="min-h-screen w-1/5 bg-linkColor1 fixed">
      <aside>
        <div className="py-5 ">
          <div className=" w-full z-10 p-3">
            <NavLink to="/">
              <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-10 w-10 mr-2 lg:mr-4" />
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
          </div>

          <ul className="flex flex-col justify-between text-2xl items-center gap-4 mt-10 w-full">
            <li>
              <NavLink
                to="/instructor/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-light border-b-2 border-logoColor1  bg-logoColor1 py-1 px-10 rounded-xl"
                    : "text-logoColor1 font-light hover:text-white"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-normal border-b-2 border-logoColor1 py-1 px-10 bg-logoColor1 rounded-xl"
                    : "text-logoColor1 font-light hover:text-white "
                }
                to="/instructor/courses"
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-light border-b-2 border-logoColor1 py-1 px-10 bg-logoColor1 rounded-xl"
                    : "text-logoColor1 font-light hover:text-white "
                }
                to="/instructor/profile"
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-logoColor1 font-light hover:text-white"
                onClick={logout}
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default SideNav;
