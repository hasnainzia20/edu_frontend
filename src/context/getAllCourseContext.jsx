import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

import { AuthContext } from "../context/AuthContext";

const GetAllCoursesContext = createContext();

export const useGetAllCourses = () => useContext(GetAllCoursesContext);

export const CoursesProvider = ({ children }) => {
  const { auth } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/courses`
      ); // your GET
      setCourses(res.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch courses");
    } finally {
      setLoading(false);
    }
  };

  const addCourse = async (newData) => {
    setLoading(true);
    try {
      // const auth = JSON.parse(localStorage.getItem("auth")); // no hooks here
      const token = auth?.token;
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/courses`,
        newData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // critical
          },
        }
      );
      setCourses((prev) => [...prev, res.data]); // append new course
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to add course");
    } finally {
      setLoading(false);
    }
  };

  // UPDATE an existing course
  const updateCourse = async (id, updatedData) => {
    debugger;
    setLoading(true);
    try {
      // const auth = JSON.parse(localStorage.getItem("auth")); // no hooks here
      const token = auth?.token;
      const res = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/api/courses/${id}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // critical
          },
        }
      );
      setCourses(
        (prev) => prev.map((course) => (course._id === id ? res.data : course)) // use _id, not id
      );
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to update course");
    } finally {
      setLoading(false);
    }
  };

  // DELETE a course
  const deleteCourse = async (id) => {
    setLoading(true);
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/api/courses/${id}`
      );
      setCourses((prev) => prev.filter((course) => course.id !== id));
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to delete course");
    } finally {
      setLoading(false);
    }
  };

  // NEW FUNCTION TO HANDLE ENROLLMENT
  const enrollInCourse = async (courseId, token) => {
    // debugger;
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/courses/${courseId}/enroll`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // critical
          },
        }
      );
      return res.data;
    } catch (err) {
      console.error(err);
      throw new Error(err.response?.data?.message || "Failed to enroll");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <GetAllCoursesContext.Provider
      value={{
        courses,
        loading,
        error,
        fetchCourses,
        addCourse,
        updateCourse,
        deleteCourse,
        enrollInCourse,
      }}
    >
      {children}
    </GetAllCoursesContext.Provider>
  );
};
