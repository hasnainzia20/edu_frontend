import icon1 from "../../assets/img/icon1.png";
import icon2 from "../../assets/img/icon2.png";
import icon3 from "../../assets/img/icon3.png";
import icon4 from "../../assets/img/icon4.png";
import aboutImg from "../../assets/img/wel.jpg";
import { FaArrowRight } from "react-icons/fa";
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

function AboutSection() {
  return (
    <motion.div
      variants={group}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      className="container mx-auto "
    >
      <div className="text-center pt-10">
        <motion.div variants={slideUp} className="items-center mb-5 p-2">
          <motion.h3 className="text-2xl font-bold">
            Invest in your professional goals with
          </motion.h3>
          {/* <p> */}
          <motion.span
            variants={slideUp}
            className="text-logoColor1 font-semibold text-2xl"
          >
            Edu.
          </motion.span>
          <motion.span
            variants={slideUp}
            className="text-logoColor2 font-semibold text-2xl"
          >
            Champs
          </motion.span>
          {/* </p> */}
        </motion.div>
        <motion.p variants={slideUp} className="text-gray-900 mb-10">
          Get unlimited access to over 90% of courses, Projects,
          Specializations, and Professional Certificates on Edu.CHAMPS, taught
          by top instructors.
        </motion.p>
      </div>
      <motion.div
        variants={slideUp}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 "
      >
        <div className="text-center shadow-lg hover:bg-logoColor2 hover:text-white m-8 p-8 hover:-translate-y-3 group duration-300 ease-in">
          <img src={icon1} alt="Icon" className="mx-auto mb-6" />
          <h2 className="text-xl font-bold mb-2 group-hover:text-white">
            Learn Anything
          </h2>
          <p className="text-gray-600 group-hover:text-white">
            Explore any interest or trending topic, take prerequisites, and
            advance your skills
          </p>
        </div>
        <div className="text-center shadow-xl hover:bg-logoColor2 hover:text-white m-8 p-8 hover:-translate-y-3 group duration-300 ease-in">
          <img src={icon2} alt="Icon 2" className="mx-auto mb-6" />
          <h2 className="text-xl font-bold mb-2 group-hover:text-white">
            Save Money
          </h2>
          <p className="text-gray-600 group-hover:text-white">
            Spend less money on your learning if you plan to take multiple
            courses this year
          </p>
        </div>
        <div className="text-center shadow-xl hover:bg-logoColor2 hover:text-white m-8 p-8 hover:-translate-y-3 group duration-300 ease-in">
          <img src={icon3} alt="Icon 3" className="mx-auto mb-6" />
          <h2 className="text-xl font-bold mb-2 group-hover:text-white">
            Flexible Learning
          </h2>
          <p className="text-gray-600 group-hover:text-white">
            Learn at your own pace, move between multiple courses, or switch to
            a different course
          </p>
        </div>
        <div className="text-center shadow-xl hover:bg-logoColor2 hover:text-white m-8 p-8 hover:-translate-y-3 group duration-300 ease-in">
          <img src={icon4} alt="Icon 4" className="mx-auto mb-6" />
          <h2 className="text-xl font-bold mb-2 group-hover:text-white">
            Unlimited Certificates
          </h2>
          <p className="text-gray-600 group-hover:text-white">
            Earn a certificate for every learning program that you complete at
            no additional cost
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={group}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className="flex md:flex-row flex-col md:mt-20 mt-10 gap-5 relative items-stretch"
      >
        {/* left */}
        <motion.div variants={slideUp} className="w-full lg:w-1/2">
          <img
            src={aboutImg}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* right */}
        <motion.div
          variants={slideUp}
          className="w-full lg:w-1/2 px-4 lg:px-10 flex flex-col justify-between"
        >
          <div>
            <div>
              <h5 className="uppercase text-xl font-bold mb-2">about us</h5>
            </div>
            <div>
              <h2 className="text-4xl text-wrap font-semibold mb-2">
                Welcome to
                <span className="pl-1 text-logoColor1 font-semibold text-3xl">
                  Edu.
                </span>
                <span className="text-logoColor2 font-semibold text-3xl">
                  Champs
                </span>
              </h2>
            </div>
            <div>
              <p className="text-gray-500 mb-2">
                At Edu.CHAMPS, we believe in accessible, innovative learning
                experiences that adapt to your schedule and learning style. Join
                us in embracing the future of education and unlock your
                potential with our immersive online courses.
              </p>
            </div>
            <div>
              <p className="text-gray-500 mb-2">
                Welcom to Edu.CHAMPS, your gateway to boundless learning
                opportunities. We're dedicated to democratizing education,
                offering a diverse range of courses taught by industry experts.
                Our mission is to empower learners worldwide, fostering a
                community-driven platform where knowledge knows no limits.
              </p>
            </div>
            <div>
              <div className="grid lg:grid-cols-2 gap-2 ">
                <div>
                  <p className="text-gray-500">
                    <FaArrowRight className="inline mr-0" />
                    Expert Instructors
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">
                    <FaArrowRight className="inline mr-0" /> Live interactive
                    Sessions
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">
                    <FaArrowRight className="inline mr-0" /> Comprehensive
                    Course Catalog
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">
                    <FaArrowRight className="inline mr-0" /> Community
                    Engagement
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">
                    <FaArrowRight className="inline mr-0" /> Male and Female
                    Instructors
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">
                    <FaArrowRight className="inline mr-0" /> Flexible Timing
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">
                    <FaArrowRight className="inline mr-0" /> Personalized
                    Learning Path
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">
                    <FaArrowRight className="inline mr-0" /> Certification and
                    Recognition
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">
                    <FaArrowRight className="inline mr-0" /> Personalized
                    Learning Path
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">
                    <FaArrowRight className="inline mr-0" /> Certification and
                    Recognition
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Link className="inline-block py-3 px-10 bg-logoColor2 rounded-[20px] text-white text-lg border-2 border-transparent transition-all duration-500 hover:text-logoColor2 hover:bg-transparent hover:border-logoColor2 hover:border-2 hover:duration-300">
              Read More
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default AboutSection;
