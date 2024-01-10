import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import StoreMain from "./pages/store/StoreMain";
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

function App() {
  const { loggedIn } = useContext(LoginContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="plans" element={<Plans />} />
        <Route path="store" element={<StoreMain />} />
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
