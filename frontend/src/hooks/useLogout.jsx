import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import useNullify from "./useNullify";

const useLogout = () => {
  const navigate = useNavigate();

  const { setLoggedIn } = useContext(LoginContext);
  const handleNullify = useNullify();

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem("user");
    navigate("/");
    handleNullify();
  };

  return logout;
};

export default useLogout;
