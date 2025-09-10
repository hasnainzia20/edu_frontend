import { courses, getInDemandCourses } from "../../data/coursesData";
import MySlider from "../../components/slider/MySlider";
import AboutSection from "./AboutSection";
import CourseSection from "./CourseSection";
import IslamicCourse from "./IslamicCourse";
import CollegeCourse from "./CollegeCourse";
import InDemandCourse from "./InDemandCourse";
import Instructor from "./Instructor";
import Faq from "./Faq";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    // Scrolls the window to the top of the page (0,0)
    window.scrollTo(0, 0);
  }, []);
  const islamicCourses = courses.filter((c) => c.category === "islamic");
  const generalCourses = courses.filter((c) => c.category === "general");

  const inDemandCourses = getInDemandCourses();

  return (
    <div className="pt-[65px]">
      <MySlider />
      <AboutSection />
      <CourseSection />
      <IslamicCourse courses={islamicCourses} />
      <CollegeCourse courses={generalCourses} />
      <InDemandCourse courses={inDemandCourses} />
      <Instructor />
      <Faq />
    </div>
  );
}

export default Home;
