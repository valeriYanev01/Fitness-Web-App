import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import MyPortal from "./pages/MyPortal";
import WorkoutsFetch from "./components/portalComponents/WorkoutsFetch";
import BMICalculator from "./components/portalComponents/BMICalculator";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Account from "./pages/Account";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AuthVerify from "./components/AuthVerify";
import { LoginContext } from "./context/LoginContext";
import Store from "./pages/Store";
import Products from "./components/storeComponents/Products";
import SingleProduct from "./pages/SingleProduct";

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
          {/* <Route path="protein" element={<Products />} />
          <Route path="protein/:id" element={<SingleProduct />} />
          <Route path="creatine" element={<Products />} />
          <Route path="creatine/:id" element={<SingleProduct />} />
          <Route path="bcaa" element={<Products />} />
          <Route path="bcaa/:id" element={<SingleProduct />} />
          <Route path="carbohydrate" element={<Products />} />
          <Route path="carbohydrate/:id" element={<SingleProduct />} />
          <Route path="vitamins" element={<Products />} />
          <Route path="vitamins/:id" element={<SingleProduct />} />
          <Route path="minerals" element={<Products />} />
          <Route path="minerals/:id" element={<SingleProduct />} /> */}
        </Route>
        <Route path="myportal" element={<MyPortal />}>
          <Route path="workouts" element={<WorkoutsFetch />} />
          <Route path="bmi-calculator" element={<BMICalculator />} />
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
