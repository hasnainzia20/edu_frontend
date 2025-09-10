import { useGetAllCourses } from "../../../../context/getAllCourseContext";
import SideNav from "../../../Instructor/components/SideNav";
import { useNavigate } from "react-router-dom";

function InstructorDashboard() {
  const { courses } = useGetAllCourses();
  const navigate = useNavigate();

  const studentCount = courses.reduce((total, course) => {
    return total + course.students_enrolled;
  }, 0);
  const handleNavigate = () => {
    navigate("/instructor/courses/addnewcourse");
  };
  return (
    <div className="flex bg-gray-200 min-h-screen">
      {/* left */}
      <div className="lg:w-[20%]">
        <SideNav />
      </div>
      {/* right */}
      <div className="lg:w-[80%]">
        <div className="p-10">
          <h1 className="font-bold text-4xl">Instructor Dashboard</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex justify-between p-10">
          <div className="bg-white px-16 py-8 rounded-3xl border border-gray-400">
            <h2 className="font-bold text-2xl text-linkColor1">Your Courses</h2>
            <p className="text-gray-600">
              {courses.length > 1
                ? `${courses.length} Courses`
                : courses.length === 1
                ? "1 Course"
                : "No Courses"}
            </p>
          </div>
          <div className="bg-white px-16 py-8 rounded-3xl border border-gray-400">
            <h2 className="font-bold text-2xl text-linkColor1">
              Your Students
            </h2>
            <p className="text-gray-600">
              {studentCount > 1
                ? `${studentCount} Students`
                : studentCount === 1
                ? "1 Student"
                : "No Students Enrolled"}
            </p>
          </div>
          <div className="bg-white px-16 py-8 rounded-3xl border border-gray-400">
            <button
              onClick={handleNavigate}
              className="font-bold text-xl text-white p-3 bg-linkColor1 rounded-xl"
            >
              Create New Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorDashboard;
