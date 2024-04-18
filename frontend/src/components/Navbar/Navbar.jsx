import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo";
import Links from "./Links";
import "./Navbar.css";
import useUser from "../../hooks/useUser";
import useLogout from "../../hooks/useLogout";
import { LoginContext } from "../../context/LoginContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { loggedIn } = useContext(LoginContext);

  const username = useUser();
  const logout = useLogout();

  const hideMenuItems = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navigation-container">
      <nav className="navigation">
        <Link to="/">
          <Logo />
        </Link>
        <a className="icon">
          <i className="fa fa-bars" onClick={hideMenuItems}></i>
        </a>

        <ul className={`navigation-list ${showMenu ? "show" : ""}`}>
          <Links onShowMenu={setShowMenu} />
          <li className="navigation-user">
            {loggedIn ? (
              <>
                <span className="navigation-greet">{username}</span>
                <div className="navigation-menu">
                  <Link className="navigation-menu-link" to="checkout">
                    Basket
                  </Link>
                  <div className="navigation-menu-link" onClick={logout}>
                    Logout
                  </div>
                </div>
              </>
            ) : (
              <NavLink
                onClick={() => {
                  setShowMenu(false);
                }}
                to="account"
              >
                Account
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
