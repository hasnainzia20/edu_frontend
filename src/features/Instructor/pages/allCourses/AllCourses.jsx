import { useGetAllCourses } from "../../../../context/getAllCourseContext";
import SideNav from "../../components/SideNav";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AllCourses = () => {
  const navigate = useNavigate();
  const { courses, loading, error } = useGetAllCourses();

  useEffect(() => {
    navigate("/instructor/courses");
  }, []);

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="flex bg-gray-200 min-h-screen">
      {/* left */}
      <div className="lg:w-[20%]">
        <SideNav />
      </div>
      {/* right */}
      <div className="lg:w-[80%]">
        {!courses.length ? (
          <div>No courses found</div>
        ) : (
          <div>
            <div className=" rounded-lg m-2 bg-white border border-gray-400 shadow-md">
              <div className="flex justify-between align-middle px-2">
                <div>
                  <h1 className="p-3 text-linkColor1 font-bold text-2xl mb-3">
                    All Courses
                  </h1>
                </div>
                <div className="self-center">
                  <button
                    className="p-2 bg-linkColor1 rounded-md text-white  font-semi-bold text-lg mb-1"
                    onClick={() => {
                      navigate("/instructor/courses/addnewcourse");
                    }}
                  >
                    ADD NEW COURSE
                  </button>
                </div>
              </div>

              <table className="table-auto md:w-full p-4">
                <thead>
                  <tr className="bg-linkColor1 text-white text-left">
                    <th className="p-4">Course Title</th>
                    <th className="p-4">Students Enrolled</th>
                    <th className="p-4">Catrgory</th>
                    <th className="p-4">Duration</th>
                    <th className="p-4">Level</th>
                    <th className="p-4">Lectures</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr key={course._id} className="border-b">
                      <td className="p-4">{course.name}</td>
                      <td className="p-4">{course.students_enrolled}</td>
                      <td className="p-4">{course.category}</td>
                      <td className="p-4">{course.duration}</td>
                      <td className="p-4">{course.level}</td>
                      <td className="p-4">{course.lectures}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button
                            className="bg-blue-700 p-2 rounded-md text-white"
                            onClick={() => {
                              navigate(
                                `/instructor/courses/edit/${course._id}`
                              );
                            }}
                          >
                            Edit
                          </button>
                          <button className="bg-red-700 p-2 rounded-md text-white">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCourses;
