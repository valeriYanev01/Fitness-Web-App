import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const useLogout = () => {
  const navigate = useNavigate();

  const { setLoggedIn } = useContext(LoginContext);

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem("user");
    navigate("/myportal");
  };

  return logout;
};

export default useLogout;
