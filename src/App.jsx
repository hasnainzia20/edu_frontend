import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import AdminDashboard from "./features/admin/AdminDashboard";
import UserDashboard from "../src/features/user/pages/userDashboard/UserDashboard";
import InstructorDashboard from "./features/Instructor/pages/instructorDasboard/InstructorDashboard";
import AllCourses from "./features/Instructor/pages/allCourses/AllCourses";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Courses from "./pages/courses/Courses";
import Testimonial from "./pages/testimonials/Testimonials";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import CourseDetail from "./pages/courses/CourseDetail";
import ProtectedRoute from "./components/ProRoute/ProtectedRoute";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashBoardLayout";
import MyCourses from "./features/user/pages/courses/MyCourses";
import MyProfile from "./features/user/pages/profile/MyProfile";
import Logout from "./features/user/pages/logout/Logout";
import CourseForm from "./features/Instructor/pages/allCourses/CourseForm";
import InstructorProfile from "./features/Instructor/pages/profile/InstructorProfile";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/testimonials" element={<Testimonial />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/courses/:id/:courseSlug" element={<CourseDetail />} />
          </Route>

          {/* stduent dashborad route */}
          <Route element={<DashboardLayout />}>
            <Route
              path="/student/dashboard"
              element={
                <ProtectedRoute role={"student"}>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/mycourses"
              element={
                <ProtectedRoute role={"student"}>
                  <MyCourses />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/myprofile"
              element={
                <ProtectedRoute role={"student"}>
                  <UserProvider>
                    <MyProfile />
                  </UserProvider>
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/logout"
              element={
                <ProtectedRoute role={"student"}>
                  <Logout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute role={"admin"}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            {/* instructor dashborad route */}
            <Route
              path="/instructor/dashboard"
              element={
                <ProtectedRoute role={"instructor"}>
                  <InstructorDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="instructor/courses"
              element={
                <ProtectedRoute role={"instructor"}>
                  <AllCourses />
                </ProtectedRoute>
              }
            />
            <Route
              path="instructor/courses/edit/:id"
              element={
                <ProtectedRoute role={"instructor"}>
                  <CourseForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/instructor/courses/addnewcourse"
              element={
                <ProtectedRoute role={"instructor"}>
                  <CourseForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="instructor/profile"
              element={
                <ProtectedRoute role={"instructor"}>
                  <UserProvider>
                    <InstructorProfile />
                  </UserProvider>
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
