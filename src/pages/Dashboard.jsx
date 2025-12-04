import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Dashboard({ employees = [], departments = [] }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/"); // redirect to login page
  };

  return (
    <div className="page-container">
      <h1>Dashboard</h1>

      <div className="cards-container">
        <div className="card">
          <span className="card-icon">📊</span>
          <h2 className="card-title">Total Employees</h2>
          <p className="card-value">{employees.length}</p>
        </div>

        <div className="card">
          <span className="card-icon">👥</span>
          <h2 className="card-title">Active Employees</h2>
          <p className="card-value">{employees.length}</p>
        </div>

        <div className="card">
          <span className="card-icon">🏢</span>
          <h2 className="card-title">Departments</h2>
          <p className="card-value">{departments.length}</p>
        </div>
      </div>

      {/* Logout button below cards */}
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <button
          onClick={handleLogout}
          style={{
            padding: "10px 24px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
