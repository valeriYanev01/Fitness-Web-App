import React, { useContext, useState } from "react";
import axios from "axios";
import { WorkoutContext } from "../../context/WorkoutContext";
import "./CreateWorkout.css";
import { LoginContext } from "../../context/LoginContext";

const CreateWorkout = () => {
  const [exercise, setExercise] = useState("");
  const [weight, setWeight] = useState(null);
  const [reps, setReps] = useState(null);

  const { setShowSettings } = useContext(WorkoutContext);
  const { user } = useContext(LoginContext);

  const newWorkout = () => {
    axios
      .post(
        "http://localhost:6969/api/workouts",
        { title: exercise, load: weight, reps },
        { headers: { Authorization: `Bearer ${user.token}` } }
      )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="create-workout">
      <div className="create-workout-info">
        <div className="create-workout-info-title">
          <span>Exercise:</span>
          <input autoComplete="off" onChange={(e) => setExercise(e.target.value)} />
        </div>

        <div className="create-workout-info-load">
          <span>Weight:</span>
          <input autoComplete="off" onChange={(e) => setWeight(e.target.value)} />
        </div>

        <div className="create-workout-info-reps">
          <span>Repetitions:</span>
          <input autoComplete="off" onChange={(e) => setReps(e.target.value)} />
        </div>
      </div>
      <span
        className="create-workout-button"
        onClick={() => {
          setShowSettings("Show Workout");
          newWorkout();
        }}
      >
        Add
      </span>
    </div>
  );
};

export default CreateWorkout;
