import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginForm from "./pages/LoginForm";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Departments from "./pages/Departments";
import Reports from "./pages/Reports";
import EmployeeModal from "./components/EmployeeModal";

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page — Hide Sidebar */}
        <Route path="/" element={<LoginForm />} />

        {/* Pages with Sidebar */}
        <Route
          path="/dashboard"
          element={
            <>
              <Sidebar />
              <Dashboard />
            </>
          }
        />

        <Route
          path="/employees"
          element={
            <>
              <Sidebar />
              <Employees />
            </>
          }
        />

        <Route
          path="/departments"
          element={
            <>
              <Sidebar />
              <Departments />
            </>
          }
        />

        <Route
          path="/reports"
          element={
            <>
              <Sidebar />
              <Reports />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
