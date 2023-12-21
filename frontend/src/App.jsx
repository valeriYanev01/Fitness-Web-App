import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Trainers from "./pages/Trainers";
import StoreMain from "./pages/store/StoreMain";
import MyPortal from "./pages/portal/MyPortal";
import WorkoutsFetch from "./components/portalComponents/WorkoutsFetch";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Account from "./pages/Account";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="plans" element={<Plans />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="store" element={<StoreMain />} />
        <Route path="myportal" element={<MyPortal />}>
          <Route path="workouts" element={<WorkoutsFetch />} />
        </Route>
        <Route path="account" element={<Account />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>

      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
