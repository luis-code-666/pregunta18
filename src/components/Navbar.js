import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar-container">
      <ul>
        <Link className="Navbar__brand" to="/">
          <li>Home</li>
        </Link>
        <Link className="Navbar__brand" to="/about">
          <li>About</li>
        </Link>
        <Link className="Navbar__brand" to="/dashboard">
          <li>Dashboard</li>
        </Link>
      </ul>
    </div>
  );
}
