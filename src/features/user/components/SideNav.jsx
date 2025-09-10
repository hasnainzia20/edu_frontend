import { NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../..//../assets/img/edu-logo.png";

function SideNav() {
  return (
    <div className="min-h-screen bg-linkColor1 fixed top-0 left-0">
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
                to="/student/dashboard"
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
                to="/student/mycourses"
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
                to="/student/myprofile"
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-light border-b-2 border-logoColor1 py-1 px-10 bg-logoColor1 rounded-xl"
                    : "text-logoColor1 font-light hover:text-white "
                }
                to="/student/logout"
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
