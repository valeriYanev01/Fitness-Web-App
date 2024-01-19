import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import MyPortal from "./pages/MyPortal";
import AuthVerify from "./components/AuthVerify";
import WorkoutsFetch from "./components/portalComponents/WorkoutsFetch";
import BMICalculator from "./components/portalComponents/BMICalculator";
import AccountSettings from "./components/portalComponents/Account/AccountSettings";
import ChangeCredentials from "./components/portalComponents/Account/ChangeCredentials";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Products from "./components/storeComponents/Products";
import Account from "./pages/Account";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Store from "./pages/Store";
import SingleProduct from "./pages/SingleProduct";
import { LoginContext } from "./context/LoginContext";

function App() {
  const { loggedIn } = useContext(LoginContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="store" element={<Store />}>
          {["protein", "creatine", "bcaa", "carbohydrate", "vitamins", "minerals"].map((path, index) => (
            <Route key={index} path={path} element={<Products />} />
          ))}

          {["protein", "creatine", "bcaa", "carbohydrate", "vitamins", "minerals"].map((path, index) => (
            <Route key={index} path={`${path}/:id`} element={<SingleProduct />} />
          ))}
        </Route>
        <Route path="myportal" element={<MyPortal />}>
          <Route path="workouts" element={<WorkoutsFetch />} />
          <Route path="bmi-calculator" element={<BMICalculator />} />
          <Route path="account" element={<AccountSettings />}>
            <Route path="change-email" element={<ChangeCredentials />} />
            <Route path="change-username" element={<ChangeCredentials />} />
            <Route path="change-password" element={<ChangeCredentials />} />
          </Route>
        </Route>
        <Route path="account" element={loggedIn ? <Navigate to="/" /> : <Account />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      <AuthVerify />

      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
