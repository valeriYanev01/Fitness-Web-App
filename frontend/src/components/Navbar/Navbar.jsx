import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Logo";
import Links from "./Links";

const Navbar = () => {
  return (
    <div className="navigation-container">
      <nav className="navigation">
        <Link to="/">
          <Logo />
        </Link>

        <ul className="navigation-list">
          <Links />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
