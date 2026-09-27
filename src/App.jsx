import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import studentsData from "./data/students.json";
import Home from "./pages/Home";
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";
import StudentDetails from "./pages/StudentDetails";
import "./App.css";

function App() {
  const [students, setStudents] = useState(studentsData);

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/students" className="nav-link">
              Student Lists
            </Link>
            <Link to="/add-student" className="nav-link">
              Add Students
            </Link>
          </div>
        </nav>

        {/* Route Configuration */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/students"
              element={<StudentList students={students} />}
            />
            <Route
              path="/add-student"
              element={<AddStudent setStudents={setStudents} />}
            />
            <Route
              path="/students/:studentNumber"
              element={<StudentDetails students={students} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
