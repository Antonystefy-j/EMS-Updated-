import React, { useState } from "react";
import "../App.css";

export default function Departments({ departments =[], setDepartments=[]}) {
  const [deptName, setDeptName] = useState("");

  const addDept = () => {
    if (deptName) {
      setDepartments([...departments, deptName]);
      setDeptName("");
    }
  };

  const removeDept = (name) => {
    setDepartments(departments.filter(d => d !== name));
  };

  return (
    <div className="page-container">
      <h1>Departments</h1>
      
     
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
        <input
          className="form-input"
          placeholder="New Department"
          value={deptName}
          onChange={(e) => setDeptName(e.target.value)}
        />
        <button className="form-button" onClick={addDept}>Add</button>
      </div>

      {/* Departments Table */}
      <table className="table">
        <thead>
          <tr>
          <th></th>
            <th>Department Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{dept}</td>
              <td>
                <button
                  className="form-button"
                  style={{ background: "#e53935" }}
                  onClick={() => removeDept(dept)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
