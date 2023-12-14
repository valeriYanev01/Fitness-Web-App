import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Trainers from "./pages/Trainers";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StoreMain from "./pages/store/StoreMain";
import WorkoutsFetch from "./components/portalComponents/WorkoutsFetch";
import MyPortal from "./pages/portal/MyPortal";

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
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
