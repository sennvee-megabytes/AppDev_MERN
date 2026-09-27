import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page-container home-page">
      <div className="home-card">
        <h1>Welcome to Cavite State University</h1>
        <h2>DCIT 26: Application Development and Emerging Technologies</h2>
        <p className="home-subtitle">Laboratory Exercise 3: Use State (Add Student)</p>
        <div className="home-info">
          <p>
            This portal allows you to manage student records, view registered
            students, and add new student entries dynamically using React state
            management and React Router.
          </p>
        </div>
        <div className="home-buttons">
          <Link to="/students" className="btn-primary">
            View Student Lists
          </Link>
          <Link to="/add-student" className="btn-secondary">
            Add New Student
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
