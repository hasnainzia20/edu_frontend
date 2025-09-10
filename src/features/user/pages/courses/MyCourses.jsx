import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../../../context/AuthContext";
import SideNav from "../../components/SideNav";

function MyCourses() {
  const { auth } = useContext(AuthContext);
  const { token } = auth;
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/users/mycourses`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setCourses(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCourses();
  }, [token]);

  return (
    <div className="flex bg-gray-200">
      <div className="lg:w-[20%]">
        <SideNav />
      </div>
      <div className="lg:w-[80%]">
        <div className="p-10">
          <h1 className="font-bold text-4xl text-linkColor1">My Courses</h1>
          <p className="text-gray-600">
            Courses you are currently enrolled in.
          </p>
        </div>

        <div className="rounded-lg m-2 bg-white border border-gray-400 shadow-md">
          <h1 className="p-3 text-linkColor1 font-bold text-2xl mb-3">
            Enrolled Courses
          </h1>
          <table className="table-auto md:w-full p-4">
            <thead>
              <tr className="bg-linkColor1 text-white text-left">
                <th className="p-4">Course Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">Duration</th>
                <th className="p-4">Level</th>
                <th className="p-4">Price</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course._id}>
                  <td className="p-4">{course.name}</td>
                  <td className="p-4">{course.category}</td>
                  <td className="p-4">{course.duration}</td>
                  <td className="p-4">{course.level}</td>
                  <td className="p-4">{course.price}</td>
                </tr>
              ))}
              {courses.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-500">
                    You are not enrolled in any courses yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyCourses;
