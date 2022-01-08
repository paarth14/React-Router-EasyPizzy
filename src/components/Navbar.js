import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeStyle={{ color: "red" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" exact activeStyle={{ color: "red" }}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" exact activeStyle={{ color: "red" }}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
