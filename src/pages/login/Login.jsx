import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Header from "../../components/header/Header";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/api";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      login(response.token, response.role, response.email);

      if (response.role === "student") {
        navigate("/");
      } else if (response.role === "admin") {
        navigate("/admin/dashboard");
      } else if (response.role === "instructor") {
        navigate("/instructor/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
    setFormData({
      email: "",
      password: "",
    });
  };

  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Login",
      href: "/login",
    },
  ];
  return (
    <div>
      <Header title={"Login"} breadCrumbs={breadcrumbs} />
      <div className="flex justify-center md:p-10 py-10">
        <div className="md:w-1/3 w-full mx-5 bg-white rounded-md py-10 px-5 border shadow-lg border-gray-200">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-10">Login</h2>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-8 justify-center">
                <div>
                  <input
                    id="email"
                    name="email"
                    type="Email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Email"
                    className="border border-gray-400 p-2 rounded-md w-full"
                  />
                </div>
                <div>
                  <input
                    id="password"
                    name="password"
                    type="Password"
                    onChange={handleChange}
                    value={formData.password}
                    placeholder="Password"
                    className="border border-gray-400 p-2 rounded-md w-full"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-blue-500 cursor-pointer">
                    <Link to="/login/forgotpassword">Forgot Password?</Link>
                  </p>
                </div>
                <div>
                  <button
                    type="submit"
                    value="Login"
                    className="bg-[#0298D8] text-white font-semibold p-2 rounded-md w-full cursor-pointer"
                  >
                    Login
                  </button>
                </div>
                <div>
                  <p className="text-sm text-center">
                    Don't have an account?
                    <Link to="/register" className="text-blue-500 px-1">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
