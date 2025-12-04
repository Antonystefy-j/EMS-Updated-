import React from "react";
import "../App.css";

export default function Reports() {
  return (
    <div className="page-container">
      <h1>Reports</h1>
      <br></br>
      <p style={{ marginBottom: "20px" }}>

        Here you can generate PDF or Excel reports for Employees and Departments📄📊

      </p>
      <br></br>
      <div style={{ display: "flex", gap: "250px", flexWrap: "wrap" }}>
        <button className="form-button">Generate Employee PDF</button>
        <button className="form-button">Generate Employee Excel</button>
        <button className="form-button">Generate Department PDF</button>
        <button className="form-button">Generate Department Excel</button>
      </div>
    </div>
  );
}
