import React, { useContext, useState } from "react";
import axios from "axios";
import { WorkoutContext } from "../../context/WorkoutContext";

const CreateWorkout = () => {
  const [exercise, setExercise] = useState("");
  const [weight, setWeight] = useState(null);
  const [reps, setReps] = useState(null);

  const { setShowSettings } = useContext(WorkoutContext);

  const newWorkout = () => {
    axios
      .post("http://localhost:6969/api/workouts", { title: exercise, load: weight, reps })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <label>Exercise:</label>
        <input onChange={(e) => setExercise(e.target.value)} />
        <label>Weight:</label>
        <input onChange={(e) => setWeight(e.target.value)} />
        <label>Reps:</label>
        <input onChange={(e) => setReps(e.target.value)} />
      </div>
      <div
        onClick={() => {
          setShowSettings("Show Workout");
          newWorkout();
        }}
      >
        CreateWorkout
      </div>
    </>
  );
};

export default CreateWorkout;
