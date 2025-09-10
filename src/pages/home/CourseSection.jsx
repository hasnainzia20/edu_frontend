import courseImg from "../../assets/img/free.jpg";
import { Link } from "react-router-dom";
import moonImg from "../../assets/img/moon.png";
import globalImg from "../../assets/img/global.png";
import computerImg from "../../assets/img/computer.png";
import bioImg from "../../assets/img/bio.png";
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

function CourseSection() {
  return (
    <motion.div
      variants={group}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-20"
    >
      <div className=" py-16 px-10 bg-[#f0fbfc]">
        <div className="w-[95%] mx-auto flex md:flex-row flex-col gap-10 items-center">
          {/* left */}
          <motion.div variants={slideUp} className="w-full lg:w-1/2 ">
            {/* <div> */}
            <h1 className="text-5xl text-logoColor1 font-semibold mb-4">
              Explore Free Courses
            </h1>
            <p className="text-gray-500 mb-4">
              Start your online learning journey for free at Great Learning
              Academy with our various Short-term and Long-term foundation
              courses.
            </p>
            <div className="mt-6">
              <Link className="inline-block py-3 px-10 bg-logoColor2 rounded-[20px] text-white text-lg border-2 border-transparent transition-all duration-500 hover:text-logoColor2 hover:bg-transparent hover:border-logoColor2 hover:border-2 hover:duration-300">
                Read More
              </Link>
            </div>
            {/* </div> */}
          </motion.div>
          {/* right */}
          <motion.div
            variants={slideUp}
            className="w-full lg:w-1/2 px- justify-c"
          >
            <img src={courseImg} alt="Courses Image" />
          </motion.div>
        </div>
      </div>

      <motion.div variants={slideUp} className="pt-10">
        <div className="text-center mb-6">
          <h5 className="text-2xl uppercase ">Categories</h5>
          <h2 className="text-3xl font-semibold text-logoColor1">
            Popular Topics To Explore
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10 md:mx-20 mx-10">
            <div className=" py-4 px-10 flex flex-col flex-1 items-center shadow-xl">
              <img src={moonImg} alt="Moon Image" className="w-14 h-14 mb-4" />
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
      </motion.div>
    </motion.div>
  );
}

export default CourseSection;
