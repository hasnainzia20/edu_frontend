import CourseCard from "../../components/courseCard/CourseCard";
import { motion } from "motion/react";

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

function IslamicCourse({ courses }) {
  return (
    <motion.div
      variants={group}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="py-20">
        <motion.div variants={slideUp} className="text-center mb-20">
          <h5 className="text-2xl uppercase ">Popular Courses</h5>
          <h2 className="text-5xl font-semibold text-logoColor1">
            Explore Islamic Online Courses
          </h2>
        </motion.div>
        <motion.div variants={slideUp}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10 rounded-lg lg:mx-20 mx-10">
            {courses.map((courses) => {
              return <CourseCard key={courses.id} {...courses} />;
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default IslamicCourse;
