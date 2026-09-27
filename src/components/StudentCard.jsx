import React from "react";
import { Link } from "react-router-dom";

function StudentCard({ student }) {
  if (!student) return null;

  return (
    <div className="student-card">
      <div className="student-card-field">
        <span className="field-label">Fullname:</span> {student.fullName}
      </div>
      <div className="student-card-field">
        <span className="field-label">Student Number:</span> {student.studentNumber}
      </div>
      <div className="student-card-field">
        <span className="field-label">Course:</span> {student.course}
      </div>
      <div className="student-card-field">
        <span className="field-label">Course Description:</span> {student.courseDescription}
      </div>
      <div className="student-card-field">
        <span className="field-label">Year Level:</span> {student.yearLevel}
      </div>
      <div className="student-card-field">
        <span className="field-label">Sex:</span> {student.sex}
      </div>
      <div className="card-actions">
        <Link
          to={`/students/${student.studentNumber}`}
          className="btn-details"
        >
          View full details
        </Link>
      </div>
    </div>
  );
}

export default StudentCard;
