const useUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  let greet = "";
  if (user) {
    greet = user.email.split("@")[0];
  }

  return greet;
};

export default useUser;
