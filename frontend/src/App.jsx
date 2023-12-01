import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:6969/api/workouts")
      .then((data) => {
        setWorkouts(data.data.workouts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {workouts &&
        workouts.map((workout) => (
          <ul key={workout._id}>
            <li>{workout.title}</li>
            <li>{workout.load}</li>
            <li>{workout.reps}</li>
          </ul>
        ))}
    </div>
  );
}

export default App;
