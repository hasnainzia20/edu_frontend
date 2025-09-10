import { FaStar, FaUserGraduate, FaUser } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
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

export default function CourseCard({
  id,
  slug,
  image,
  type,
  name,
  rating,
  learners,
  level,
  duration,
  price,
  href,
}) {
  return (
    <motion.div
      variants={group}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      key={id}
      className="flex flex-col flex-1 items-center shadow-xl hover:-translate-y-2 transition-all duration-500 group"
    >
      <motion.div
        variants={slideUp}
        className="relative w-full h-full overflow-hidden"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-60 mb-4 rounded-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-2"
        />
        <div className="absolute top-3 left-3 bg-green-400 py-1 px-2 rounded-lg text-sm">
          {type}
        </div>
      </motion.div>
      <motion.div variants={slideUp} className="flex flex-col w-full p-3">
        <h2 className="text-xl font-bold text-linkColor1 mb-3">
          <Link to={`/courses/${id}/${slug}`}>{name}</Link>
        </h2>

        {/* star row */}
        <div className="flex justify-between text-gray-500">
          <div className="flex flex-col items-center">
            <FaStar className="text-yellow-400" />
            <p>{rating}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex gap-2 items-center">
              <FaUserGraduate />
              <p>{learners}</p>
            </div>
            <p>Learners</p>
          </div>
          <div className="flex flex-col items-center">
            <FaUser />
            <p>{level}</p>
          </div>
        </div>

        {/* enroll row */}
        <div className="flex justify-between text-gray-500 mt-3">
          <div className="flex gap-1 items-center">
            <MdOutlineAccessTimeFilled />
            <p>{duration}</p>
          </div>
          <p>{price}</p>
          <Link
            to={`/courses/${id}/${slug}`}
            className="flex items-center text-logoColor2 font-semibold"
          >
            Enroll Now <IoIosArrowForward />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
