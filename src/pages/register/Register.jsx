import { useState } from "react";
import Header from "../../components/header/Header";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/api.js";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    userRole: "student",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [roleChecked, setRoleChecked] = useState(false);

  const handleChange = (e) => {
    console.log(e.target, "formdata");
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(formData, "formdata");
      const data = await registerUser(formData);
      setSuccess(data.message);
      setError(null);
      navigate("/login");
    } catch (err) {
      console.log(err); // logs full object
      setError(err.message || JSON.stringify(err));
    } finally {
      setLoading(false);
    }
  };

  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Register",
      href: "/register",
    },
  ];
  return (
    <div>
      <Header title={"Register"} breadCrumbs={breadcrumbs} />
      <div className="flex justify-center md:p-10 py-10">
        <div className="md:w-1/3 w-full mx-5 bg-white rounded-md py-10 px-5 border shadow-lg border-gray-200">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-10">Register</h2>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-8 justify-center">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="border border-gray-400 p-2 rounded-md w-full"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    required
                  />
                </div>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="Email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Email"
                    className="border border-gray-400 p-2 rounded-md w-full"
                    required
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
                    required
                  />
                </div>
                {/* <div className="text-center">
                  <p className="text-sm text-blue-500 cursor-pointer">
                    <Link to="/login/forgotpassword">Forgot Password?</Link>
                  </p>
                </div> */}
                <div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        className="mr-2"
                        name="userRole"
                        id="userRole"
                        checked={formData.userRole === "instructor"}
                        value={roleChecked}
                        onChange={(e) =>
                          setFormData((prevData) => ({
                            ...prevData,
                            userRole: e.target.checked
                              ? "instructor"
                              : "student",
                          }))
                        }
                      />
                      Become an Instructor
                    </label>
                  </div>
                </div>
                <div>
                  {loading ? (
                    <button
                      type="button"
                      className="bg-[#0298D8] text-white font-semibold p-2 rounded-md w-full h-10 flex items-center justify-center"
                      disabled
                    >
                      <svg
                        className="mr-3 size-5 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing…
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-[#0298D8] text-white font-semibold p-2 rounded-md w-full "
                    >
                      Signup
                    </button>
                  )}
                </div>
                <div>
                  <p className="text-sm text-center">
                    Already have an account?
                    <Link to="/login" className="text-blue-500 px-1">
                      Login
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

export default Register;
