import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LocationContext } from "../../context/MyPortal Page/LocationContext";
import { ProductTypeContext } from "../../context/Store Page/ProductTypeContext";
import useNullify from "../../hooks/useNullify";

const Links = ({ onShowMenu }) => {
  const { setCurrentLocation } = useContext(LocationContext);
  const { setType } = useContext(ProductTypeContext);

  const handleNullify = useNullify();

  return (
    <>
      <li>
        <NavLink
          onClick={() => {
            handleNullify();
            setCurrentLocation("/");
            onShowMenu(false);
          }}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => {
            handleNullify();
            setCurrentLocation("/");
            onShowMenu(false);
          }}
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => {
            handleNullify();
            setCurrentLocation("/store");
            setType("");
            onShowMenu(false);
          }}
          to="store"
        >
          Store
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => {
            handleNullify();
            setCurrentLocation("/myportal");
            onShowMenu(false);
          }}
          to="myportal"
        >
          My Portal
        </NavLink>
      </li>
    </>
  );
};

export default Links;
