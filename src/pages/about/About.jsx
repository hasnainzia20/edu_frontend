import React from "react";
import img1 from "../../assets/img/carousel-1.jpg";
import Header from "../../components/header/Header";

function About() {
  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
  ];
  return (
    <div>
      <Header title={"About"} breadCrumbs={breadcrumbs} />

      <div className="md:w-[90%] mx-auto p-10">
        <div>
          <h3 className="mb-2 font-semibold">ABOUT US</h3>
          <p className="mb-8 text-linkColor1 text-4xl font-bold">
            Welcome to &nbsp;
            <span className="text-logoColor1 font-semibold text-3xl">Edu.</span>
            <span className="text-logoColor2 font-semibold text-3xl">
              Champs
            </span>
          </p>
          <p className="text-gray-600 mb-4">
            At Edu.CHAPMS, we believe in accessible, innovative learning
            experiences that adapt to your schedule and learning style. Join us
            in embracing the future of education and unlock your potential with
            our immersive online courses.
          </p>
          <p className="text-gray-600 mb-4">
            Welcome to Edu.CHAPMS, where learning knows no boundaries. Our
            mission is to empower individuals worldwide through accessible and
            innovative education. Here's what sets us apart:
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600 mb-4">
            At Edu.CHAPMS, we envision a world where learning is accessible to
            everyone, regardless of their location, background, or
            circumstances. We strive to break barriers and make education a
            transformative and inclusive experience for all.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            A Commitment to Excellence
          </h2>
          <p className="text-gray-600 mb-4">
            We are dedicated to providing top-quality education. Our team
            collaborates with industry experts and educators to curate courses
            that meet the highest standards, ensuring our learners receive
            valuable and up-to-date knowledge.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Empowering Learners</h2>
          <p className="text-gray-600 mb-4">
            We believe in the transformative power of education. Edu.CHAPMS is
            designed to empower individuals to pursue their passions, advance
            their careers, and acquire new skills in a dynamic and supportive
            environment.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Innovation in Learning
          </h2>
          <p className="text-gray-600 mb-4">
            Embracing technology, we offer innovative learning methods and
            tools. From interactive modules to live sessions, we're committed to
            providing a cutting-edge learning experience that fosters engagement
            and knowledge retention.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Community-Centric Approach
          </h2>
          <p className="text-gray-600 mb-4">
            Edu.CHAPMS is more than just courses; it's a vibrant community. We
            encourage collaboration, discussion, and knowledge sharing among
            learners, fostering an environment of growth and camaraderie.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Diverse and Inclusive Education
          </h2>
          <p className="text-gray-600 mb-4">
            We celebrate diversity in perspectives, cultures, and ideas. Our
            diverse course offerings cater to various interests and skill
            levels, ensuring that everyone finds a learning path that resonates
            with them.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Continuous Improvement
          </h2>
          <p className="text-gray-600 mb-4">
            We are always evolving. Feedback from our learners helps us
            continually enhance our platform, ensuring it remains dynamic,
            responsive, and aligned with the evolving needs of our users.
          </p>
        </div>
        <div>
          <p className="text-gray-600 mb-4">
            Thank you! for being a part of Edu.CHAPMS Together, let's embark on
            a journey of lifelong learning and growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
