import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import useUser from "../../hooks/useUser";

const Panel = () => {
  const { loggedIn } = useContext(LoginContext);

  const greet = useUser();

  return (
    <div className="myportal-dashboard">
      {loggedIn ? (
        <>
          <h2 className="myportal-dashboard-greet">Hello {greet}</h2>
          <div>
            <ul className="myportal-dashboard-links">
              <li>
                <Link
                  onClick={() => {
                    setOutletName("Workouts");
                    setShowCalendar(true);
                  }}
                  to="workouts"
                >
                  Workouts &rarr;
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setOutletName("Calculator");
                    setShowCalendar(false);
                  }}
                  to="bmi-calculator"
                >
                  BMI Calculator &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div>
          You need to be logged in to use this page!{" "}
          <span>
            <Link to="/account/login">Login</Link>
          </span>{" "}
        </div>
      )}
    </div>
  );
};

export default Panel;
