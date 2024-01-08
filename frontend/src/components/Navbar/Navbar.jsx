import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Logo";
import Links from "./Links";

import { LoginContext } from "../../context/LoginContext";
import useUser from "../../hooks/useUser";
import useLogout from "../../hooks/useLogout";

const Navbar = () => {
  const { loggedIn } = useContext(LoginContext);

  const greet = useUser();
  const logout = useLogout();

  return (
    <div className="navigation-container">
      <nav className="navigation">
        <Link to="/">
          <Logo />
        </Link>

        <ul className="navigation-list">
          <Links />
          <li className="navigation-user">
            {loggedIn ? (
              <>
                <span className="navigation-greet">{greet}</span>
                <div className="navigation-menu">
                  <div className="logout-button" onClick={logout}>
                    Logout
                  </div>
                </div>
              </>
            ) : (
              <NavLink to="account">Account</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
