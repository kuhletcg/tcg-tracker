import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="left-nav-item"></div>
      <div className="right-nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/StudentForm">Register student</Link>
          </li>
          <li>
            <Link to="/displayStudents">View students</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
