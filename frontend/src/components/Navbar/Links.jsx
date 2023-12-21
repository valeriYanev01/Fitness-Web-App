import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="store">Store</NavLink>
      </li>
      <li>
        <NavLink to="myportal">My Portal</NavLink>
      </li>
      <li>
        <NavLink to="account">Account</NavLink>
      </li>
    </>
  );
};

export default Links;
