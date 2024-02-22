import axios from "axios";
import { useContext, useEffect } from "react";
import { AccountSettingsContext } from "../context/MyPortal Page/AccountSettingsContext";

const useUser = () => {
  const { username, setUsername } = useContext(AccountSettingsContext);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const { email } = JSON.parse(localStorage.getItem("user"));
      axios
        .get("https://fitness-backend1.onrender.com/api/users/", { params: { email: email } })
        .then((data) => {
          setUsername(data.data.user.username);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  return username;
};

export default useUser;
