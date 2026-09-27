import React from "react";
import StudentCard from "../components/StudentCard";

function StudentList({ students }) {
  return (
    <div className="page-container student-list-page">
      <h1 className="page-title">Student Lists!</h1>

      {students && students.length > 0 ? (
        <div className="cards-grid">
          {students.map((student) => (
            <StudentCard key={student.studentNumber} student={student} />
          ))}
        </div>
      ) : (
        <p className="no-students">No students found.</p>
      )}
    </div>
  );
}

export default StudentList;
