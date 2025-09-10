import { useState, useEffect } from "react";
import { useGetAllCourses } from "../../../../context/getAllCourseContext";
import SideNav from "../../components/SideNav";
import { useNavigate, useParams } from "react-router-dom";

const CourseForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { courses, loading, error, updateCourse, addCourse } =
    useGetAllCourses();

  const [skillInput, setSkillInput] = useState("");

  const [formData, setFormData] = useState({
    id: id,
    slug: "",
    name: "",
    category: "",
    image: null,
    type: "",
    rating: 0,
    learners: 0,
    level: "",
    duration: "",
    price: "",
    // href: "/courses/nazra-e-quran-course",
    course_description: "",
    about_the_course: "",
    instructor_image: null,
    skills_gained: [],
    lectures: 0,
    students_enrolled: 0,
    language: "",
    certificate_provided: "",
    course_content: [
      {
        module_id: Date.now(),
        module_title: "",
        lessons: [
          { lesson_id: Date.now() + 1, lesson_title: "", duration: "" },
        ],
      },
    ],
  });

  // prefill when editing
  useEffect(() => {
    if (id && courses?.length) {
      const courseToEdit = courses.find((c) => String(c._id) === id);
      if (courseToEdit) {
        setFormData(courseToEdit);
      }
    }
  }, [id, courses]);

  // skills
  const addSkill = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills_gained: [...prev.skills_gained, skill],
    }));
    setSkillInput("");
  };

  const removeSkill = (i) => {
    setFormData((prev) => ({
      ...prev,
      skills_gained: prev.skills_gained.filter((_, idx) => idx !== i),
    }));
  };

  // module updates
  const handleModuleChange = (mIndex, value) => {
    setFormData((prev) => {
      const updated = [...prev.course_content];
      updated[mIndex] = { ...updated[mIndex], module_title: value };
      return { ...prev, course_content: updated };
    });
  };

  const addModule = () => {
    setFormData((prev) => ({
      ...prev,
      course_content: [
        ...prev.course_content,
        {
          module_id: Date.now(),
          module_title: "",
          lessons: [
            { lesson_id: Date.now() + 1, lesson_title: "", duration: "" },
          ],
        },
      ],
    }));
  };
  const deleteModule = (moduleId) => {
    setFormData((prev) => ({
      ...prev,
      course_content: prev.course_content.filter(
        (module) => module.module_id !== moduleId
      ),
    }));
  };

  // lesson updates
  const handleLessonChange = (mIndex, lIndex, key, value) => {
    setFormData((prev) => {
      const updated = [...prev.course_content];
      const lessons = [...updated[mIndex].lessons];
      lessons[lIndex] = { ...lessons[lIndex], [key]: value };
      updated[mIndex] = { ...updated[mIndex], lessons };
      return { ...prev, course_content: updated };
    });
  };

  const addLesson = (mIndex) => {
    setFormData((prev) => {
      const updated = [...prev.course_content];
      const lessons = [
        ...updated[mIndex].lessons,
        { lesson_id: Date.now(), lesson_title: "", duration: "" },
      ];
      updated[mIndex] = { ...updated[mIndex], lessons };
      return { ...prev, course_content: updated };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          data.append(key, value);
        } else if (Array.isArray(value) || typeof value === "object") {
          data.append(key, JSON.stringify(value));
        } else if (value !== undefined && value !== null) {
          data.append(key, value);
        }
      });

      if (id) {
        await updateCourse(id, data); // must send FormData
      } else {
        for (let [key, val] of data.entries()) {
          console.log(key, val);
          console.log(data, "data");
        }

        await addCourse(data);
      }
      navigate("/instructor/courses");
    } catch (err) {
      console.error("Failed to save course:", err);
    }
  };

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="flex bg-gray-200 min-h-screen">
      <div className="w-1/5 box-border relative">
        {/* <div className="w-full  min-h-screen"> */}
        <SideNav />
        {/* </div> */}
      </div>
      <div className="lg:w-4/5">
        <div className="w-full p-10 bg-gray-400">
          <form onSubmit={handleSubmit} className="bg-white p-10 rounded-xl">
            <div>
              <h2 className="text-2xl font-semibold mb-5">
                {id ? "Edit Course" : "Add Course"}
              </h2>
            </div>
            <div className="flex gap-10">
              <div className="w-1/2 flex flex-col  mb-5">
                <label className="text-gray-600 text-sm">Course Name</label>
                <input
                  className=" border border-gray-500 p-2 w-full rounded-md focus:border-logoColor2 outline-none"
                  type="text"
                  value={formData?.name || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="w-1/2 flex flex-col  mb-5">
                <label className="text-gray-600 text-sm">Slug</label>
                <input
                  className=" border border-gray-500 p-2 w-full rounded-md focus:border-logoColor2 outline-none"
                  type="text"
                  value={formData?.slug || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="flex gap-10">
              <div className="w-1/2 flex flex-col  mb-5">
                <label className="text-gray-600 text-sm">Category</label>
                <select
                  className=" border border-gray-500 p-2 w-full rounded-md focus:border-logoColor2 outline-none"
                  value={formData?.category || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  required
                >
                  <option value="">Select a category</option>
                  <option value="islamic">Islamic</option>
                  <option value="general">General Education</option>
                  <option value="technology">Technology</option>
                  <option value="biomedical">Biomedical</option>
                  <option value="finance">Finance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="w-1/2 flex flex-col  mb-5">
                <label className="text-gray-600 text-sm">Type</label>
                <select
                  className=" border border-gray-500 p-2 w-full rounded-md focus:border-logoColor2 outline-none"
                  value={formData?.type || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  required
                >
                  <option value="FREE">Free</option>
                  <option value="PAID">Paid</option>
                </select>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="w-1/2 flex flex-col  mb-5">
                <label className="text-gray-600 text-sm">Level</label>
                <select
                  className=" border border-gray-500 p-2 w-full rounded-md focus:border-logoColor2 outline-none"
                  value={formData?.level || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, level: e.target.value })
                  }
                  required
                >
                  <option value={"Beginner"}>Beginner</option>
                  <option value={"Intermediate"}>Intermediate</option>
                  <option value={"Advanced"}>Advanced</option>
                </select>
              </div>
              {formData?.type === "PAID" ? (
                <div className="w-1/2 flex flex-col  mb-5">
                  <label className="text-gray-600 text-sm">Price ($)</label>
                  <input
                    type="number"
                    className=" border border-gray-500 p-2 w-full rounded-md focus:border-logoColor2 outline-none"
                    value={formData?.price || 0}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    required
                  ></input>
                </div>
              ) : (
                <div className="w-1/2 flex flex-col  mb-5"></div>
              )}
            </div>

            <div className="flex gap-10">
              <div className="w-1/2 flex flex-col  mb-5">
                <label className="text-gray-600 text-sm">
                  Course Description
                </label>
                <textarea
                  className=" border h-40 border-gray-500 p-2 w-full focus:border-logoColor2 outline-none rounded-md"
                  value={formData?.course_description || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      course_description: e.target.value,
                    })
                  }
                  required
                ></textarea>
              </div>
              <div className="w-1/2 flex flex-col  mb-5">
                <label className="text-gray-600 text-sm">
                  About the Course
                </label>
                <textarea
                  className=" border h-40 border-gray-500 p-2 w-full focus:border-logoColor2 outline-none rounded-md"
                  value={formData?.about_the_course || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      about_the_course: e.target.value,
                    })
                  }
                  required
                ></textarea>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="w-1/2 flex flex-col mb-5">
                <label className="text-gray-600 text-sm">Course Image</label>
                <input
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.files[0] })
                  }
                />
              </div>

              <div className="w-1/2 flex flex-col mb-5">
                <label className="text-gray-600 text-sm">
                  Instructor Image
                </label>
                <input
                  name="instructor_image"
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      instructor_image: e.target.files[0],
                    })
                  }
                />
              </div>
            </div>
            <div className="flex gap-10">
              <div className="w-1/2 flex flex-col  mb-5">
                <label name="skill gained" className="text-gray-600 text-sm">
                  Skills Gained
                </label>
                <input
                  className=" border mb-5 border-gray-500 p-2 w-full focus:border-logoColor2 outline-none rounded-md"
                  type="text"
                  name="skill gained"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                />
                <div className="w-1/5 ">
                  <button
                    className=" bg-[#181D38] p-2 text-white rounded-md w-20 align-top"
                    type="button"
                    onClick={() => addSkill(skillInput)}
                    disabled={!skillInput}
                  >
                    Add Skill
                  </button>
                </div>
              </div>
              {!formData.skills_gained.length ? (
                <div className="w-1/2"> </div>
              ) : (
                <div className="w-1/2">
                  <ul className="w-full flex flex-wrap border border-gray-500 rounded-md p-1  h-28 gap-2 overflow-y-scroll">
                    {formData.skills_gained.map((s, i) => (
                      <li key={i} className="m-1">
                        <span className="bg-gray-400 p-1 rounded mb-1">
                          {s}
                        </span>
                        <button
                          className="ml-1 bg-black px-1 rounded-sm text-red-500 text-lg"
                          type="button"
                          onClick={() => removeSkill(i)}
                        >
                          x
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="flex gap-10">
              <div className="lg:w-1/3 flex flex-col  mb-5">
                <label className="text-gray-600 text-sm">Lectures</label>
                <input
                  className=" border border-gray-500 p-2 w-full focus:border-logoColor2 outline-none rounded-md"
                  type="number"
                  value={formData?.lectures || 0}
                  onChange={(e) =>
                    setFormData({ ...formData, lectures: e.target.value })
                  }
                />
              </div>
              <div className="lg:w-1/3 flex flex-col  mb-5">
                <label className="text-gray-600 text-sm">Language</label>
                <input
                  className=" border border-gray-500 p-2 w-full focus:border-logoColor2 outline-none rounded-md"
                  type="text"
                  value={formData?.language || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, language: e.target.value })
                  }
                />
              </div>
              <div className="lg:w-1/3 flex flex-col mb-5">
                <label className="text-gray-600 text-sm">
                  Certificate Provided
                </label>
                <select
                  className="border border-gray-500 p-2 w-full focus:border-logoColor2 outline-none rounded-md"
                  value={formData?.certificate_provided ? "true" : "false"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      certificate_provided: e.target.value === "true",
                    })
                  }
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              {formData.course_content.map((module, mIndex) => (
                <div
                  key={module.module_id}
                  className=" relative border border-gray-500 rounded-md p-3 my-2"
                >
                  <label className="text-gray-600 text-sm">Module</label>

                  <input
                    type="text"
                    placeholder="Module Title"
                    value={module.module_title || ""}
                    onChange={(e) => handleModuleChange(mIndex, e.target.value)}
                    className="border border-gray-500 rounded-md p-1 w-full "
                  />

                  {module.lessons.map((lesson, lIndex) => (
                    <div key={lesson.lesson_id} className=" my-2">
                      <label className="text-gray-600 text-sm">Lesson</label>

                      <input
                        type="text"
                        placeholder="Lesson Title"
                        value={lesson.lesson_title || ""}
                        onChange={(e) =>
                          handleLessonChange(
                            mIndex,
                            lIndex,
                            "lesson_title",
                            e.target.value
                          )
                        }
                        className="border border-gray-500 rounded-md p-1 w-1/2 "
                      />
                      <input
                        type="text"
                        placeholder="Duration"
                        value={lesson.duration || ""}
                        onChange={(e) =>
                          handleLessonChange(
                            mIndex,
                            lIndex,
                            "duration",
                            e.target.value
                          )
                        }
                        className="border border-gray-500 rounded-md p-1 ml-2"
                      />
                    </div>
                  ))}
                  <button
                    onClick={() => deleteModule(module.module_id)}
                    className="absolute top-1 right-5 font-bold text-lg text-red-600"
                  >
                    X
                  </button>

                  <button
                    type="button"
                    className="bg-[#181D38] text-white p-2 rounded-md"
                    onClick={() => addLesson(mIndex)}
                  >
                    + Add Lesson
                  </button>
                </div>
              ))}

              <button
                type="button"
                className="bg-[#181D38] text-white p-2 rounded-md"
                onClick={addModule}
              >
                + Add Module
              </button>
            </div>

            <div>
              <input
                type="submit"
                className="bg-red-400 text-white p-2 rounded-md w-full"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
