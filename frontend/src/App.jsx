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
import Protein from "./components/storeComponents/Protein";
import Bcaa from "./components/storeComponents/Bcaa";
import Carbohydrate from "./components/storeComponents/Carbohydrate";
import Vitamins from "./components/storeComponents/Vitamins";
import Minerals from "./components/storeComponents/Minerals";
import Creatine from "./components/storeComponents/Creatine";

function App() {
  const { loggedIn } = useContext(LoginContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="store" element={<Store />}>
          <Route path="protein" element={<Protein />} />
          <Route path="creatine" element={<Creatine />} />
          <Route path="bcaa" element={<Bcaa />} />
          <Route path="carbohydrate" element={<Carbohydrate />} />
          <Route path="vitamins" element={<Vitamins />} />
          <Route path="minerals" element={<Minerals />} />
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
