// import React, { useState } from "react";
// import { useNewCourseUploadContext } from "../context/CourseUploadContext";
// import axios from "axios";

// const NewCourse = () => {
//   const {
//     formData,
//     updateForm,
//     addSkill,
//     removeSkill,
//     addModule,
//     removeModule,
//     addLesson,
//     removeLesson,
//     loading,
//     setLoading,
//     success,
//     setSuccess,
//   } = useNewCourseUploadContext();

//   const [imagePreview, setImagePreview] = useState(null);
//   const [instructorPreview, setInstructorPreview] = useState(null);
//   const [newSkill, setNewSkill] = useState("");

//   const handleChange = (e) => {
//     const { name, value, files, type, checked } = e.target;
//     if (files) {
//       updateForm(name, files[0]);
//       if (name === "image") setImagePreview(URL.createObjectURL(files[0]));
//       if (name === "instructor_image")
//         setInstructorPreview(URL.createObjectURL(files[0]));
//     } else if (type === "checkbox") {
//       updateForm(name, checked);
//     } else {
//       updateForm(name, value);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const data = new FormData();
//       Object.entries(formData).forEach(([key, value]) => {
//         if (value instanceof File) {
//           data.append(key, value);
//         } else if (key === "skills_gained" || key === "course_content") {
//           data.append(key, JSON.stringify(value));
//         } else {
//           data.append(key, value);
//         }
//       });

//       await axios.post("/api/courses", data);
//       setSuccess(true);
//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex bg-gray-200 min-h-screen">
//       {/* left */}
//       <div className="lg:w-[20%]">
//         <SideNav />
//       </div>
//       {/* right */}
//       <div className="lg:w-[80%]">
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white p-6 rounded shadow space-y-4"
//         >
//           <h2 className="text-xl font-bold">Upload New Course</h2>

//           {/* Basic info */}
//           <div>
//             <label className="block font-semibold">Course Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>

//           <div>
//             <label className="block font-semibold">Slug</label>
//             <input
//               type="text"
//               name="slug"
//               value={formData.slug}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>

//           <div>
//             <label className="block font-semibold">Category</label>
//             <input
//               type="text"
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>

//           <div>
//             <label className="block font-semibold">Type</label>
//             <select
//               name="type"
//               value={formData.type}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded"
//             >
//               <option value="PAID">Paid</option>
//               <option value="FREE">Free</option>
//             </select>
//           </div>

//           <div>
//             <label className="block font-semibold">Price</label>
//             <input
//               type="text"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>

//           <div>
//             <label className="block font-semibold">Course Image</label>
//             <input
//               type="file"
//               name="image"
//               accept="image/*"
//               onChange={handleChange}
//             />
//             {imagePreview && (
//               <img
//                 src={imagePreview}
//                 className="mt-2 w-40 h-24 object-cover rounded"
//               />
//             )}
//           </div>

//           <div>
//             <label className="block font-semibold">Instructor Name</label>
//             <input
//               type="text"
//               name="instructor_name"
//               value={formData.instructor_name}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>

//           <div>
//             <label className="block font-semibold">Instructor Image</label>
//             <input
//               type="file"
//               name="instructor_image"
//               accept="image/*"
//               onChange={handleChange}
//             />
//             {instructorPreview && (
//               <img
//                 src={instructorPreview}
//                 className="mt-2 w-32 h-32 object-cover rounded-full"
//               />
//             )}
//           </div>

//           {/* Skills */}
//           <div>
//             <label className="block font-semibold">Skills Gained</label>
//             <div className="flex gap-2 mb-2">
//               <input
//                 type="text"
//                 value={newSkill}
//                 onChange={(e) => setNewSkill(e.target.value)}
//                 className="border px-2 py-1 rounded"
//               />
//               <button
//                 type="button"
//                 onClick={() => {
//                   if (newSkill) {
//                     addSkill(newSkill);
//                     setNewSkill("");
//                   }
//                 }}
//                 className="bg-blue-600 text-white px-2 rounded"
//               >
//                 Add
//               </button>
//             </div>
//             <div className="flex gap-2 flex-wrap">
//               {formData.skills_gained.map((skill, i) => (
//                 <span
//                   key={i}
//                   className="bg-gray-200 px-2 py-1 rounded flex items-center gap-1"
//                 >
//                   {skill}{" "}
//                   <button type="button" onClick={() => removeSkill(i)}>
//                     x
//                   </button>
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Modules and lessons */}
//           <div>
//             <h3 className="font-bold">Course Content</h3>
//             {formData.course_content.map((mod, mIndex) => (
//               <div key={mIndex} className="border p-2 rounded mb-2">
//                 <div className="flex justify-between items-center mb-2">
//                   <input
//                     type="text"
//                     placeholder="Module Title"
//                     value={mod.module_title}
//                     onChange={(e) => {
//                       const modules = [...formData.course_content];
//                       modules[mIndex].module_title = e.target.value;
//                       updateForm("course_content", modules);
//                     }}
//                     className="border px-2 py-1 rounded w-full"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => removeModule(mIndex)}
//                     className="ml-2 text-red-600"
//                   >
//                     Remove Module
//                   </button>
//                 </div>
//                 {mod.lessons.map((lesson, lIndex) => (
//                   <div key={lIndex} className="flex gap-2 mb-1">
//                     <input
//                       type="text"
//                       placeholder="Lesson Title"
//                       value={lesson.lesson_title}
//                       onChange={(e) => {
//                         const modules = [...formData.course_content];
//                         modules[mIndex].lessons[lIndex].lesson_title =
//                           e.target.value;
//                         updateForm("course_content", modules);
//                       }}
//                       className="border px-2 py-1 rounded w-1/2"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Duration"
//                       value={lesson.duration}
//                       onChange={(e) => {
//                         const modules = [...formData.course_content];
//                         modules[mIndex].lessons[lIndex].duration =
//                           e.target.value;
//                         updateForm("course_content", modules);
//                       }}
//                       className="border px-2 py-1 rounded w-1/4"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => removeLesson(mIndex, lIndex)}
//                       className="text-red-600"
//                     >
//                       x
//                     </button>
//                   </div>
//                 ))}
//                 <button
//                   type="button"
//                   onClick={() => addLesson(mIndex)}
//                   className="bg-green-600 text-white px-2 rounded mt-1"
//                 >
//                   Add Lesson
//                 </button>
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={addModule}
//               className="bg-blue-600 text-white px-2 rounded mt-2"
//             >
//               Add Module
//             </button>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-blue-700 text-white px-4 py-2 rounded"
//           >
//             {loading ? "Uploading..." : "Upload Course"}
//           </button>

//           {success && (
//             <p className="text-green-600">Course uploaded successfully!</p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NewCourse;
