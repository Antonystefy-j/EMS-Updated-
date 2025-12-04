import React from "react";
import "./EmployeeModal.css";

export default function EmployeeModal({ mode, data, form, onChange, onClose, onSave, nameInputRef }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        {/* TITLE */}
        <h2 className="modal-title">
          {mode === "view" && "Employee Details"}
          {mode === "edit" && "Edit Employee"}
          {mode === "add" && "Add Employee"}
        </h2>

        {/* VIEW MODE */}
        {mode === "view" && (
          <div className="view-content">
            <p><strong>Name:</strong> {data?.name}</p>
            <p><strong>Role:</strong> {data?.role}</p>
            <p><strong>Email:</strong> {data?.email}</p>
            <p><strong>Salary:</strong> {data?.salary}</p>
            <div className="modal-footer">
              <button className="btn cancel" onClick={onClose}>Close</button>
            </div>
          </div>
        )}

        {/* EDIT / ADD MODE */}
        {(mode === "edit" || mode === "add") && (
          <form className="modal-form" onSubmit={onSave}>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Full Name"
              required
              ref={mode === "add" ? nameInputRef : null} // focus only in Add mode
            />
            <input
              name="role"
              value={form.role}
              onChange={onChange}
              placeholder="Role"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="Email"
              required
            />
            <input
              name="salary"
              value={form.salary}
              onChange={onChange}
              placeholder="Salary"
              required
            />

            <div className="modal-footer">
              <button type="button" className="btn cancel" onClick={onClose}>Cancel</button>
              <button type="submit" className="btn add">
                {mode === "add" ? "Add" : "Save"}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
