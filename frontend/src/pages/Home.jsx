import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
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
            <li>Exercise: {workout.title}</li>
            <li>Weight: {workout.load}</li>
            <li>Reps: {workout.reps}</li>
            <li>On: {workout.day}</li>
          </ul>
        ))}
    </div>
  );
};

export default Home;
