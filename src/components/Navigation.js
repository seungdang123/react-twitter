import React from "react";
import { Link } from "react-router-dom";
import Home from "routes/Home";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
