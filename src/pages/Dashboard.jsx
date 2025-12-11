import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Dashboard({ employees = [], departments = [] }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/"); // redirect to login
  };

  return (
    <div className="dashboard-page">

      <h1 className="dashboard-title">Dashboard</h1>

      {/* Cards */}
      <div className="dashboard-cards">

        <div className="dashboard-card fade-card">
          <span className="card-icon">📊</span>
          <h2>Total Employees</h2>
          <p>{employees.length}</p>
        </div>

        <div className="dashboard-card fade-card delay-1">
          <span className="card-icon">👥</span>
          <h2>Active Employees</h2>
          <p>{employees.length}</p>
        </div>

        <div className="dashboard-card fade-card delay-2">
          <span className="card-icon">🏢</span>
          <h2>Departments</h2>
          <p>{departments.length}</p>
        </div>

      </div>

      {/* Logout */}
      <div className="logout-container">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

    </div>
  );
}
