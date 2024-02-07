import React from "react";
import { NavLink } from "react-router-dom";

import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <strong>EMPLOYEES DASHBOARD</strong>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/graphs">Graphs</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
