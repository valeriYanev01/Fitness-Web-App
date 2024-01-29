import React, { useContext, useState } from "react";
import axios from "axios";
import { WorkoutContext } from "../../context/MyPortal Page/WorkoutContext";
import { LoginContext } from "../../context/LoginContext";
import "./CreateWorkout.css";

const CreateWorkout = () => {
  const [exercise, setExercise] = useState("");
  const [weight, setWeight] = useState(null);
  const [reps, setReps] = useState(null);
  const [error, setError] = useState("");

  const { setShowSettings, setLoading } = useContext(WorkoutContext);
  const { user } = useContext(LoginContext);

  const newWorkout = () => {
    setLoading(true);
    setError("");
    axios
      .post(
        "http://localhost:6969/api/workouts",
        { title: exercise, load: weight, reps },
        { headers: { Authorization: `Bearer ${user.token}` } }
      )
      .then(() => {
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  return (
    <>
      {error && <div>{error}</div>}
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
            setLoading(true);
          }}
        >
          Add
        </span>
        <span
          className="workout-buttons-discard"
          onClick={() => {
            setLoading(true);
            setShowSettings("Show Workout");
          }}
        >
          Cancel
        </span>
      </div>
    </>
  );
};

export default CreateWorkout;
