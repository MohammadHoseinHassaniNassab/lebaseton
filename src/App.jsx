import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import SingleCourse from "./Pages/SingleCourse";
import SingleTeacher from "./Pages/SingleTeacher";
import SingleLesson from "./Pages/SingleLesson";
import Buy from "./Pages/Buy";
import Courses from "./Pages/Courses";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="bg-gray-100 max-w-[2000px] mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:courseID" element={<SingleCourse />} />
          <Route path="/teachers/:teacherID" element={<SingleTeacher />} />
          <Route path="/lessons/:episodeID" element={<SingleLesson />} />
          <Route path="/buy/:courseID" element={<Buy />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;