import React, { useState, useEffect, useRef } from "react";
import EmployeeModal from "../components/EmployeeModal";
import "../App.css";

export default function Employees() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", role: "Developer", email: "john@example.com", salary: 50000 },
    { id: 2, name: "Jane Smith", role: "Designer", email: "jane@example.com", salary: 45000 }
  ]);

  // Modal state
  const [modalMode, setModalMode] = useState(null); // "view" | "edit" | "add"
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", role: "", email: "", salary: "" });

  // Ref for focus
  const nameInputRef = useRef(null);

  // Open Add Employee modal
  const openAddModal = () => {
    setEditForm({ name: "", role: "", email: "", salary: "" });
    setModalMode("add");
  };

  // Open View Employee modal
  const openViewModal = (emp) => {
    setSelectedEmployee(emp);
    setModalMode("view");
  };

  // Open Edit Employee modal
  const openEditModal = (emp) => {
    setSelectedEmployee(emp);
    setEditForm(emp);
    setModalMode("edit");
  };

  // Close modal
  const closeModal = () => {
    setModalMode(null);
    setSelectedEmployee(null);
  };

  // Handle input change
  const onEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  // Save edited employee
  const saveEditEmployee = (e) => {
    e.preventDefault();
    setEmployees(
      employees.map((emp) =>
        emp.id === selectedEmployee.id ? editForm : emp
      )
    );
    closeModal();
  };

  // Save new employee
  const saveNewEmployee = (e) => {
    e.preventDefault();
    const newEmployee = { id: Date.now(), ...editForm };
    setEmployees([...employees, newEmployee]);
    closeModal();
  };

  // Decide Save action
  const onSave = (e) => {
    if (modalMode === "edit") saveEditEmployee(e);
    if (modalMode === "add") saveNewEmployee(e);
  };

  // Delete employee
  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  // Focus Name input when Add modal opens
  useEffect(() => {
    if (modalMode === "add" && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [modalMode]);

  return (
    <div className="page-container">

      {/* HEADER WITH ADD BUTTON */}
      <div className="employee-header">
        <h1>Employees</h1>
        <button className="add-btn" onClick={openAddModal}>+ Add Employee</button>
      </div>

      {/* EMPLOYEE TABLE */}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.role}</td>
              <td>{emp.email}</td>
              <td>{emp.salary}</td>
              <td>
                <button className="btn btn-view" onClick={() => openViewModal(emp)}>View</button>
                <button className="btn btn-edit" onClick={() => openEditModal(emp)}>Edit</button>
                <button className="btn btn-danger" onClick={() => deleteEmployee(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL POPUP */}
      {modalMode && (
        <EmployeeModal
          mode={modalMode}
          data={selectedEmployee}
          form={editForm}
          onChange={onEditChange}
          onClose={closeModal}
          onSave={onSave}
          nameInputRef={nameInputRef} // pass ref for Add modal
        />
      )}

    </div>
  );
}
