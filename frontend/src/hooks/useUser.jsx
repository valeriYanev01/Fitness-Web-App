import axios from "axios";
import { useContext, useEffect } from "react";
import { AccountSettingsContext } from "../context/MyPortal Page/AccountSettingsContext";

const useUser = () => {
  const { username, setUsername } = useContext(AccountSettingsContext);

  const URL = import.meta.env.VITE_URL;

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const { email } = JSON.parse(localStorage.getItem("user"));
      axios
        .get(`${URL}users/`, { params: { email: email } })
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
