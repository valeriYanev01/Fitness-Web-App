import axios from "axios";
import { useContext, useEffect } from "react";
import { AccountSettingsContext } from "../context/MyPortal Page/AccountSettingsContext";
import { LoginContext } from "../context/LoginContext";

const useUser = () => {
  const { loggedIn } = useContext(LoginContext);
  const { username, setUsername } = useContext(AccountSettingsContext);

  useEffect(() => {
    if (loggedIn) {
      const { email } = JSON.parse(localStorage.getItem("user"));
      axios
        .get("http://localhost:6969/api/users/", { params: { email: email } })
        .then((data) => {
          setUsername(data.data.user.username);
          console.log(username);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  return username;
};

export default useUser;
