// import Swiper core and required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import "swiper/css/effect-fade";

import { Swiper, SwiperSlide } from "swiper/react";
import slideimg1 from "../../assets/img/carousel-1.jpg";
import slideimg2 from "../../assets/img/wel.jpg";
import slideimg3 from "../../assets/img/tran-laptop.jpg";
import slideimg4 from "../../assets/img/welcom img.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      spaceBetween={30}
      speed={500}
      // loop={true}
      slidesPerView={1}
      effect="fade"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div
          className="w-full h=[500px] md:h-[600px]"
          style={{
            backgroundImage: `url(${slideimg1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "rgba(24, 29, 56, 0.7)",
          }}
        >
          <motion.div
            variants={group}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full h-full bg-[rgba(24,29,56,0.7)] "
          >
            <motion.div
              variants={slideUp}
              className=" lg:px-20 lg:pt-40 p-5 lg:w-3/5"
            >
              <motion.p className="uppercase text-logoColor2 font-semibold text-xl mb-5">
                Welcome to Edu.CHAMPS
              </motion.p>
              <motion.h1 className="text-6xl font-nunito text-white font-bold mb-5">
                Interactive Learning
                <br /> Experience
              </motion.h1>
              <motion.p className="text-white mb-5 text-wrap text-xl">
                Engage with interactive lessons, quizzes, and projects.
                Experience hands-on learning that keeps you motivated and
                inspired.
              </motion.p>
              <div className="mt-10">
                <motion.ul className="flex md:gap-5">
                  <li>
                    <Link className="py-3 px-10 bg-logoColor2 rounded-[20px] text-white text-lg border-2 border-transparent transition-all duration-500 hover:text-logoColor2 hover:bg-transparent hover:border-logoColor2 hover:border-2 hover:duration-300">
                      Read More
                    </Link>
                  </li>
                  <li>
                    <Link className="py-3 px-10 bg-white rounded-[20px] text-logoColor2 text-lg border-2 border-logoColor2 transition-all duration-500 hover:text-logoColor2 hover:bg-transparent hover:border-logoColor2 hover:border-2 hover:duration-300">
                      Join Now
                    </Link>
                  </li>
                </motion.ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="w-full h=[500px] md:h-[600px]"
          style={{
            backgroundImage: `url(${slideimg2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "rgba(24, 29, 56, 0.7)",
          }}
        >
          <div className="w-full h-full bg-[rgba(24,29,56,0.7)]">
            <div className="lg:px-20 lg:pt-40 p-5 lg:w-3/5">
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="uppercase text-logoColor2 font-semibold text-xl mb-5"
              >
                Welcome to Edu.CHAMPS
              </motion.p>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-6xl font-nunito text-white font-bold mb-5"
              >
                Interactive Learning
                <br /> Experience
              </motion.h1>
              <motion.p className="text-white mb-5 text-wrap text-xl">
                Engage with interactive lessons, quizzes, and projects.
                Experience hands-on learning that keeps you motivated and
                inspired.
              </motion.p>
              <div className="mt-10">
                <motion.ul className="flex md:gap-5">
                  <li>
                    <Link className="py-3 px-10 bg-logoColor2 rounded-[20px] text-white text-lg border-2 border-transparent transition-all-500 hover:text-logoColor2 hover:bg-transparent hover:border-logoColor2 hover:border-2 hover:transition-all-300">
                      Read More
                    </Link>
                  </li>
                  <li>
                    <Link className="py-3 px-10 bg-white rounded-[20px] text-logoColor2 text-lg border-2 border-logoColor2 transition-all-500 hover:text-logoColor2 hover:bg-transparent hover:border-logoColor2 hover:border-2 hover:transition-all-300">
                      Join Now
                    </Link>
                  </li>
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="w-full h=[500px] md:h-[600px]"
          style={{
            backgroundImage: `url(${slideimg3})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "rgba(24, 29, 56, 0.7)",
          }}
        >
          <div className="w-full h-full bg-[rgba(24,29,56,0.7)]">
            <div className="lg:px-20 lg:pt-40 p-5 lg:w-3/5">
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="uppercase text-logoColor2 font-semibold text-xl mb-5"
              >
                Welcome to Edu.CHAMPS
              </motion.p>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-6xl font-nunito text-white font-bold mb-5"
              >
                Interactive Learning
                <br /> Experience
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-white mb-5 text-wrap text-xl"
              >
                Engage with interactive lessons, quizzes, and projects.
                Experience hands-on learning that keeps you motivated and
                inspired.
              </motion.p>
              <div className="mt-10">
                <motion.ul
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex md:gap-5"
                >
                  <li>
                    <Link className="py-3 px-10 bg-logoColor2 rounded-[20px] text-white text-lg border-2 border-transparent transition-all-500 hover:text-logoColor2 hover:bg-transparent hover:border-logoColor2 hover:border-2 hover:transition-all-300">
                      Read More
                    </Link>
                  </li>
                  <li>
                    <Link className="py-3 px-10 bg-white rounded-[20px] text-logoColor2 text-lg border-2 border-logoColor2 transition-all-500 hover:text-logoColor2 hover:bg-transparent hover:border-logoColor2 hover:border-2 hover:transition-all-300">
                      Join Now
                    </Link>
                  </li>
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="w-full h=[500px] md:h-[600px]"
          style={{
            backgroundImage: `url(${slideimg4})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "rgba(24, 29, 56, 0.7)",
          }}
        >
          <div className="w-full h-full bg-[rgba(24,29,56,0.7)]">
            <div className="lg:px-20 lg:pt-40 p-5 lg:w-3/5">
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="uppercase text-logoColor2 font-semibold text-xl mb-5"
              >
                Welcome to Edu.CHAMPS
              </motion.p>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-6xl font-nunito text-white font-bold mb-5"
              >
                Interactive Learning
                <br /> Experience
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-white mb-5 text-wrap text-xl"
              >
                Engage with interactive lessons, quizzes, and projects.
                Experience hands-on learning that keeps you motivated and
                inspired.
              </motion.p>
              <div className="mt-10">
                <motion.ul
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex md:gap-5"
                >
                  <li>
                    <Link className="py-3 px-10 bg-logoColor2 rounded-[20px] text-white text-lg border-2 border-transparent transition-all-500 hover:text-logoColor2 hover:bg-transparent hover:border-logoColor2 hover:border-2 hover:transition-all-300">
                      Read More
                    </Link>
                  </li>
                  <li>
                    <Link className="py-3 px-10 bg-white rounded-[20px] text-logoColor2 text-lg border-2 border-logoColor2 transition-all-500 hover:text-logoColor2 hover:bg-transparent hover:border-logoColor2 hover:border-2 hover:transition-all-300">
                      Join Now
                    </Link>
                  </li>
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
