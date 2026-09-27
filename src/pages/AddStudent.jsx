import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent({ setStudents }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    studentNumber: "",
    course: "",
    courseDescription: "",
    yearLevel: "",
    sex: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fullName || !form.studentNumber) {
      alert("Please fill in at least the Full Name and Student Number.");
      return;
    }

    setStudents((prev) => [...prev, form]);
    navigate("/students");
  };

  return (
    <div className="page-container form-page">
      <div className="form-card">
        <h2 className="form-title">Add Student</h2>
        <form onSubmit={handleSubmit} className="student-form">
          <div className="form-group">
            <label htmlFor="fullName">Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="e.g. Juan Dela Cruz"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="studentNumber">Student Number</label>
            <input
              type="text"
              id="studentNumber"
              name="studentNumber"
              value={form.studentNumber}
              onChange={handleChange}
              placeholder="e.g. S0004"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="course">Course</label>
            <select
              id="course"
              name="course"
              value={form.course}
              onChange={handleChange}
              required
            >
              <option value="">Select Course</option>
              <option value="BSIT">BSIT</option>
              <option value="BSCS">BSCS</option>
              <option value="BSIS">BSIS</option>
              <option value="BSECE">BSECE</option>
              <option value="BSCpE">BSCpE</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="courseDescription">Course Description</label>
            <input
              type="text"
              id="courseDescription"
              name="courseDescription"
              value={form.courseDescription}
              onChange={handleChange}
              placeholder="e.g. Bachelor of Science in Information Technology"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="yearLevel">Year Level</label>
            <select
              id="yearLevel"
              name="yearLevel"
              value={form.yearLevel}
              onChange={handleChange}
              required
            >
              <option value="">Select Year Level</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="sex">Sex</label>
            <select
              id="sex"
              name="sex"
              value={form.sex}
              onChange={handleChange}
              required
            >
              <option value="">Select Sex</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <button type="submit" className="btn-submit">
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
