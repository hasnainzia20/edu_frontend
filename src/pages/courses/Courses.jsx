import Header from "../../components/header/Header";
import { courses } from "../../data/coursesData";
import CourseCard from "../../components/courseCard/CourseCard";
import moonImg from "../../assets/img/moon.png";
import globalImg from "../../assets/img/global.png";
import computerImg from "../../assets/img/computer.png";
import bioImg from "../../assets/img/bio.png";

function Courses() {
  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Courses",
      href: "/course",
    },
  ];
  return (
    <div>
      <Header title={"Courses"} breadCrumbs={breadcrumbs} />
      <div>
        <div className="py-10">
          <div className="text-center mb-6">
            <h5 className="text-2xl uppercase ">Categories</h5>
            <h2 className="text-3xl font-semibold text-logoColor1">
              Popular Topics To Explore
            </h2>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10 md:mx-20 mx-10">
              <div className=" py-4 px-10 flex flex-col flex-1 items-center shadow-xl">
                <img
                  src={moonImg}
                  alt="Moon Image"
                  className="w-14 h-14 mb-4"
                />
                <h2 className="text-xl font-semibold">Islamic Education</h2>
              </div>
              <div className=" py-4 px-10 flex flex-col flex-1 items-center shadow-xl">
                <img
                  src={globalImg}
                  alt="Global Image"
                  className="w-14 h-14 mb-4"
                />
                <h2 className="text-xl font-semibold">Global Education</h2>
              </div>
              <div className=" py-4 px-10 flex flex-col flex-1 items-center shadow-xl">
                <img
                  src={computerImg}
                  alt="Computer Image"
                  className="w-14 h-14 mb-4"
                />
                <h2 className="text-xl font-semibold">Computer Science</h2>
              </div>
              <div className=" py-4 px-10 flex flex-col flex-1 items-center shadow-2xl">
                <img
                  src={bioImg}
                  alt="Bio Medical Image"
                  className="w-14 h-14 mb-4"
                />
                <h2 className="text-xl font-semibold">BioMedical</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="py-20">
          <div className="text-center mb-20">
            <h5 className="text-2xl uppercase ">InDemand Courses</h5>
            <h2 className="text-5xl font-semibold text-logoColor1">
              Explore InDemand Courses
            </h2>
          </div>
          <div className="mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10 rounded-lg lg:mx-20 mx-10">
              {courses.map((courses) => {
                return <CourseCard key={courses.id} {...courses} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
