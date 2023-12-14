import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="navigation-container">
      <nav className="navigation">
        <Link to="/">
          <Logo />
        </Link>

        <ul className="navigation-list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="plans">Workout Plans</NavLink>
          </li>
          <li>
            <NavLink to="trainers">Trainers</NavLink>
          </li>
          <li>
            <NavLink to="store">Store</NavLink>
          </li>
          <li>
            <NavLink to="myportal">My Portal</NavLink>
          </li>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
          <li>
            <NavLink to="signup">Signup</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
