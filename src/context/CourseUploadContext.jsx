// import { createContext, useContext, useState } from "react";

// const CourseUploadContext = createContext();

// export const useNewCourseUploadContext = () => useContext(CourseUploadContext);

// export const NewCourseProvider = ({ children }) => {
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     slug: "",
//     category: "",
//     image: null,
//     type: "PAID",
//     rating: 0,
//     learners: "",
//     level: "Beginner",
//     duration: "",
//     price: "",
//     course_description: "",
//     about_the_course: "",
//     instructor_name: "",
//     instructor_image: null,
//     skills_gained: [],
//     lectures: 0,
//     students_enrolled: 0,
//     language: "",
//     certificate_provided: false,
//     course_content: [
//       {
//         module_title: "",
//         lessons: [{ lesson_title: "", duration: "" }],
//       },
//     ],
//   });

//   const updateForm = (key, value) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//   };

//   const addSkill = (skill) => {
//     setFormData((prev) => ({
//       ...prev,
//       skills_gained: [...prev.skills_gained, skill],
//     }));
//   };

//   const removeSkill = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       skills_gained: prev.skills_gained.filter((_, i) => i !== index),
//     }));
//   };

//   const addModule = () => {
//     setFormData((prev) => ({
//       ...prev,
//       course_content: [
//         ...prev.course_content,
//         { module_title: "", lessons: [] },
//       ],
//     }));
//   };

//   const removeModule = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       course_content: prev.course_content.filter((_, i) => i !== index),
//     }));
//   };

//   const addLesson = (moduleIndex) => {
//     setFormData((prev) => {
//       const modules = [...prev.course_content];
//       modules[moduleIndex].lessons.push({ lesson_title: "", duration: "" });
//       return { ...prev, course_content: modules };
//     });
//   };

//   const removeLesson = (moduleIndex, lessonIndex) => {
//     setFormData((prev) => {
//       const modules = [...prev.course_content];
//       modules[moduleIndex].lessons = modules[moduleIndex].lessons.filter(
//         (_, i) => i !== lessonIndex
//       );
//       return { ...prev, course_content: modules };
//     });
//   };

//   return (
//     <CourseUploadContext.Provider
//       value={{
//         formData,
//         updateForm,
//         addSkill,
//         removeSkill,
//         addModule,
//         removeModule,
//         addLesson,
//         removeLesson,
//         loading,
//         setLoading,
//         success,
//         setSuccess,
//       }}
//     >
//       {children}
//     </CourseUploadContext.Provider>
//   );
// };
