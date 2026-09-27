import React from "react";
import { useParams, Link } from "react-router-dom";

function StudentDetails({ students }) {
  const { studentNumber } = useParams();

  const student = students.find(
    (s) => String(s.studentNumber).toLowerCase() === String(studentNumber).toLowerCase()
  );

  if (!student) {
    return (
      <div className="page-container">
        <div className="details-card">
          <h2>Student Not Found</h2>
          <p>No student record matches student number "{studentNumber}".</p>
          <Link to="/students" className="btn-secondary">
            ← Back to Student List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="details-card">
        <h2>Student Full Details</h2>
        <div className="details-field">
          <strong>Full Name:</strong> <span>{student.fullName}</span>
        </div>
        <div className="details-field">
          <strong>Student Number:</strong> <span>{student.studentNumber}</span>
        </div>
        <div className="details-field">
          <strong>Course:</strong> <span>{student.course}</span>
        </div>
        <div className="details-field">
          <strong>Course Description:</strong>{" "}
          <span>{student.courseDescription}</span>
        </div>
        <div className="details-field">
          <strong>Year Level:</strong> <span>{student.yearLevel}</span>
        </div>
        <div className="details-field">
          <strong>Sex:</strong> <span>{student.sex}</span>
        </div>

        <div className="details-actions">
          <Link to="/students" className="btn-secondary">
            ← Back to Student List
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;
