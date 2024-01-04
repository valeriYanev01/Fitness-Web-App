import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const AuthVerify = () => {
  const { setLoggedIn } = useContext(LoginContext);
  const location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const decodedJwt = JSON.parse(atob(user.token.split(".")[1]));

      if (decodedJwt.exp * 1000 < Date.now()) {
        setLoggedIn(false);
        localStorage.clear();
      }
    }
  }, [location]);
};

export default AuthVerify;
