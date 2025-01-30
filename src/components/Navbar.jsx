import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        {/* Home - Left Corner */}
        <li className="navbar-item">
          <Link to="/home">Home</Link>
        </li>

        {/* Projects - Next to Home */}
        <li className="navbar-item">
          <Link to="/projects">Projects</Link>
        </li>

        {/* Donation - Next to Projects */}
        <li className="navbar-item">
          <Link to="/donation">Donation</Link>
        </li>

        {/* About - Right Corner */}
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>

        
      </ul>
    </nav>
  );
};

export default Navbar;
