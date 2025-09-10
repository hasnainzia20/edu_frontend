import { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useGetAllCourses } from "../../context/getAllCourseContext";
import { Link, useParams } from "react-router-dom";
import { FaStar, FaUserGraduate, FaUser } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import instructor from "../../assets/img/instructor-2.jpg";
import img1 from "../../assets/img/web dev.jpg";
import { TiTick } from "react-icons/ti";
import { courses } from "../../data/coursesData";
import { motion } from "motion/react";
import Header from "../../components/header/Header";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const group = {
  offscreen: {},
  onscreen: {
    transition: { staggerChildren: 0.18, ease: "easeOut" },
  },
};

const slideUp = {
  offscreen: { y: 80 }, // start below
  onscreen: {
    y: 0, // end at natural position
    transition: { duration: 2, ease: [0.22, 1, 0.36, 1] },
  },
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function CourseDetail() {
  const { id, courseSlug } = useParams();
  const [open, setOpen] = useState(0);
  const { enrollInCourse } = useGetAllCourses();
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const course = courses.find((course) => course.slug === courseSlug);

  // if (!course) {
  //   alert("Course not found");
  // }

  useEffect(() => {
    // Scrolls the window to the top of the page (0,0)
    window.scrollTo(0, 0);
  }, []);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  console.log(auth);
  // debugger;
  // NEW FUNCTION TO HANDLE ENROLLMENT
  const handleEnroll = async () => {
    const courseId = id;

    // Check if the user is authenticated
    if (!auth || !auth.token) {
      // If not authenticated, store the current page and redirect to login
      localStorage.setItem("redirectPath", window.location.pathname);
      return navigate("/login");
    }

    try {
      // Call the new context function
      // debugger;
      const res = await enrollInCourse(courseId, auth.token);
      console.log(res.message);
      // alert(res.message); // Temporarily commented out

      // Fetch user data again to update the enrolledCourses array
      fetchUser();
    } catch (err) {
      console.error(err);
      // alert(err.message); // Temporarily commented out
    }
  };

  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Courses",
      href: "/course",
    },
    {
      label: course.name,
      href: "/course",
    },
  ];
  return (
    <div>
      <Header title={"Course Details"} breadCrumbs={breadcrumbs} />
      <motion.div
        variants={group}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col lg:flex-row Lg:w-[90%] m-auto p-10 gap-7 justify-between"
      >
        {/* left */}
        <motion.div variants={slideUp} className="lg:w-3/4">
          <div className="flex flex-col w-full">
            <div>
              <h2 className="lg:text-5xl text-3xl mb-2 font-semibold text-linkColor1">
                {course.name}
              </h2>
            </div>
            <div>
              <p>{course.course_description}</p>
            </div>
            {/* star row */}
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:inline-grid py-3  text-gray-500">
                <div>
                  <div className="flex lg:justify-center gap-2 items-center ">
                    <FaStar className="text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 lg:justify-center items-center ">
                    <FaUserGraduate />
                    <span>{course.learners} learners</span>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 lg:justify-center items-center ">
                    <FaUser />
                    <span>{course.level}</span>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 lg:justify-center items-center  ">
                    <MdOutlineAccessTimeFilled />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border border-logoColor1" />
            {/* instructor details */}
            <div className="flex py-5 gap-3 ">
              <div className="self-center">
                <img
                  src={instructor}
                  alt="Instructor Image"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div className="self-center flex flex-col">
                <span className="text-md font-bold">Instructor Name</span>
                <span>{course.instructor_name}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-3xl font-semibold text-linkColor1">
                About This Course
              </h2>
            </div>
            <div>
              <p>{course.about_the_course}</p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-linkColor1">
                Skills you'll gain
              </h3>
            </div>
            <div className="flex gap-3 flex-wrap">
              {course.skills_gained.map((skill, i) => {
                return (
                  <span
                    key={i}
                    className="bg-logoColor2 p-2 rounded-lg text-white"
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
            <div>
              {/* Accordion */}
              <motion.div
                variants={group}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div
                  variants={slideUp}
                  className=" py-10 text-gray-500 border shadow-xl rounded-lg p-5"
                >
                  <motion.div variants={slideUp}>
                    <h2 className="text-5xl font-semibold text-linkColor1 text-center mb-10">
                      Syllabus
                    </h2>
                  </motion.div>
                  {course.course_content.map((content, i) => {
                    return (
                      <Accordion
                        key={i}
                        variants={slideUp}
                        open={open === content.module_id}
                        icon={<Icon id={1} open={open} />}
                      >
                        <AccordionHeader
                          onClick={() => handleOpen(content.module_id)}
                        >
                          {content.module_title}
                        </AccordionHeader>
                        <AccordionBody>
                          <ul>
                            {content.lessons.map((lesson, i) => {
                              return (
                                <li key={i} className="flex items-center gap-3">
                                  <TiTick className="text-lg text-green-500" />
                                  <span>{lesson.lesson_title}</span>
                                  <span>{lesson.duration}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </AccordionBody>
                      </Accordion>
                    );
                  })}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        {/* right */}
        <div className="lg:w-1/4">
          <div className="flex flex-col gap-5 justify-between border shadow-lg rounded-lg p-5">
            <div>
              <img
                src={course.image}
                className="md:h-40 w-full object-cover"
                alt="Course Image"
              />
            </div>
            <div>
              <span className="text-3xl font-bold">{course.price}</span>
              <div className="text-center">
                <button
                  onClick={handleEnroll}
                  className="bg-logoColor2 text-white text-3xl py-2 px-10 mt-2 rounded-lg w-full"
                >
                  Enroll Now
                </button>
              </div>
            </div>
            <div className="flex flex-col py-3 gap-2 text-gray-700">
              <div className="flex gap-3 justify-between">
                <span>Duration</span>
                <span>{course.duration}</span>
              </div>
              <div className="flex gap-3 justify-between">
                <span>Lectures</span>
                <span>{course.lectures}</span>
              </div>
              <div className="flex gap-3 justify-between">
                <span>Enrolled</span>
                <span>{course.students_enrolled}</span>
              </div>
              <div className="flex gap-3 justify-between">
                <span>Language</span>
                <span>{course.language}</span>
              </div>
              <div className="flex gap-3 justify-between">
                <span>Skill Level</span>
                <span>{course.level}</span>
              </div>
              <div className="flex gap-3 justify-between">
                <span>Certificate</span>
                <span>{course.certificate_provided ? "Yes" : "No"}</span>
              </div>
              <div className="text-center">
                <Link className="text-logoColor2">Share This Course</Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CourseDetail;
