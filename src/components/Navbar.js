import React from "react";
import "./Navbar.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleclick = (e) => {
    e.preventDefault();
    navigate("/codecrafter/v1/editor");
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a>Logo</a>
        </li>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a onClick={handleclick}>Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
