import React from "react";
import { Link, Outlet } from "react-router-dom";

const MyPortal = () => {
  return (
    <div>
      <Link to="workouts">Workouts</Link>
      <Outlet />
    </div>
  );
};

export default MyPortal;
