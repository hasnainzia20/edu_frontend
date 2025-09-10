import img from "../../assets/img/online-5059831.jpg";
import { Link } from "react-router-dom";
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

function Instructor() {
  return (
    <motion.div
      variants={group}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full bg-[url(assets/img/banner-3.jpg)]"
    >
      <motion.div
        variants={slideUp}
        className="lg:p-20 flex lg:flex-row flex-col"
      >
        <div className="lg:w-1/2">
          <img src={img} alt="Instructor Image" className="w-full h-full" />
        </div>
        <div className="lg:w-1/2">
          <div className=" p-10">
            <h2 className="text-6xl font-semibold text-white mb-4">
              Become An Instructor
            </h2>
            <p className="text-white text-xl">
              Instructors from around the world teach millions of learners on
              Udemy. We provide the tools and skills to teach what you love.
            </p>
            <div className="mt-6">
              <Link className="inline-block py-3 px-10 bg-logoColor2 rounded-[20px] text-white text-lg border-2 border-transparent transition-all duration-500 hover:text-logoColor2 hover:bg-transparent hover:border-logoColor2 hover:border-2 hover:duration-300">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Instructor;
