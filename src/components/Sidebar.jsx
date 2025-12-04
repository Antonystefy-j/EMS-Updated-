import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

// Icons
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";

export default function Sidebar() {
  return (
    <div style={{
      width: "220px",
      height: "100vh",
      background: "#1e1e2f",
      color: "#fff",
      padding: "20px",
      position: "fixed",
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
      
      <Logo />

      <ul style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: "15px"
      }}>

        {/* Dashboard */}
        <li>
          <Link
            to="/dashboard"
            style={{
              color: "#fff",
              textDecoration: "none",
              padding: "10px 15px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderRadius: "8px"
            }}
            onMouseEnter={(e) => e.target.style.background = "#333"}
            onMouseLeave={(e) => e.target.style.background = "transparent"}
          >
            <MdDashboard size={20} /> Dashboard
          </Link>
        </li>

        {/* Employees */}
        <li>
          <Link
            to="/employees"
            style={{
              color: "#fff",
              textDecoration: "none",
              padding: "10px 15px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderRadius: "8px"
            }}
            onMouseEnter={(e) => e.target.style.background = "#333"}
            onMouseLeave={(e) => e.target.style.background = "transparent"}
          >
            <FaUsers size={20} /> Employees
          </Link>
        </li>

        {/* Departments */}
        <li>
          <Link
            to="/departments"
            style={{
              color: "#fff",
              textDecoration: "none",
              padding: "10px 15px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderRadius: "8px"
            }}
            onMouseEnter={(e) => e.target.style.background = "#333"}
            onMouseLeave={(e) => e.target.style.background = "transparent"}
          >
            <FaBuilding size={20} /> Departments
          </Link>
        </li>

        {/* Reports */}
        <li>
          <Link
            to="/reports"
            style={{
              color: "#fff",
              textDecoration: "none",
              padding: "10px 15px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderRadius: "8px"
            }}
            onMouseEnter={(e) => e.target.style.background = "#333"}
            onMouseLeave={(e) => e.target.style.background = "transparent"}
          >
            <HiDocumentReport size={20} /> Reports
          </Link>
        </li>

      </ul>
    </div>
  );
}
