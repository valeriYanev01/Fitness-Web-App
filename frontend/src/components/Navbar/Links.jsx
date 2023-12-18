import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <>
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
    </>
  );
};

export default Links;
