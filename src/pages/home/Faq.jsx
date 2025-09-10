import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
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

function Faq() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <motion.div
      variants={group}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={slideUp}
        className="w-[90%] m-auto py-20 text-gray-500"
      >
        <motion.div variants={slideUp}>
          <h2 className="text-5xl font-semibold text-linkColor1 text-center mb-10">
            Frequently Asked Questions
          </h2>
        </motion.div>
        <Accordion
          variants={slideUp}
          open={open === 1}
          icon={<Icon id={1} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(1)}>
            What is Edu.CHAMPS
          </AccordionHeader>
          <AccordionBody>
            The Edu.CHAMPS is an initiative taken by educhamps001, where we
            offer 100+ online courses in cutting-edge technologies and have
            successfully enrolled a whopping 5 Million+ learners across all
            domains. Edu CHAPMS covers courses on Islamic, General Education,
            Artificial Intelligence, Software Development, Sales and Business
            Development, Digital Marketing, Big Data, and many more.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            Why should I choose Great Learning Academy for free courses with
            certificates ?
          </AccordionHeader>
          <AccordionBody>
            Great Learning Academy is an excellent choice for free courses with
            certificates because of the high quality of the learning content.
            The courses are well-crafted, offer a great learning experience, and
            are interactive and engaging, making them ideal for learners in
            identifying what works best for their career goals.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            How many free courses can I enroll in at the same time?
          </AccordionHeader>
          <AccordionBody>
            You can simultaneously enroll in multiple courses at Edu.CHAMPS.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            How can I enroll in these free online courses?{" "}
          </AccordionHeader>
          <AccordionBody>
            You can click on the “Sign Up” button at the top-right of the page
            and register with your email address, or you can sign up using your
            Google Account.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(5)}>
            What are the most popular free courses?{" "}
          </AccordionHeader>
          <AccordionBody>
            Edu CHAMPS focuses on in-demand concepts and skills, where learners
            can develop industry-relevant knowledge in their chosen sector. It
            provides a wide range of courses in prestigious fields, assisting
            learners across the globe in achieving their professional goals.
            Some of the most popular free courses offered by Edu CHAMPS that are
            in high demand today include:
            <ol>
              <li>Free Islamic Courses</li>
              <li>Free General Education Courses</li>
              <li>Free Artificial Intelligence Courses</li>
              <li>Free Software Courses</li>
              <li>Free Digital Marketing Courses</li>
            </ol>
          </AccordionBody>
        </Accordion>
      </motion.div>
    </motion.div>
  );
}

export default Faq;
