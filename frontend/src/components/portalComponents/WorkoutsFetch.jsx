import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./WorkoutsFetch.css";
import { CalendarContext } from "../../context/CalendarContext";
import { WorkoutContext } from "../../context/WorkoutContext";
import WorkoutList from "./WorkoutList";
import { LoginContext } from "../../context/LoginContext";

const WorkoutsFetch = () => {
  const [workouts, setWorkouts] = useState([]);
  const [editWorkout, setEditWorkout] = useState(false);
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");

  const { workoutDate } = useContext(CalendarContext);
  const { loading, setLoading } = useContext(WorkoutContext);
  const { user } = useContext(LoginContext);

  useEffect(() => {
    axios
      .get("http://localhost:6969/api/workouts", {
        params: { date: workoutDate },
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((data) => {
        setLoading(false);
        setEditWorkout(false);
        setWorkouts(data.data.workouts);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [loading]);

  const handleDelete = (id) => {
    setLoading(true);
    axios
      .delete(`http://localhost:6969/api/workouts/${id}`, { headers: { Authorization: `Bearer ${user.token}` } })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleUpdate = (id) => {
    setLoading(true);
    axios
      .put(
        `http://localhost:6969/api/workouts/${id}`,
        { title, load, reps },
        { headers: { Authorization: `Bearer ${user.token}` } }
      )
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <>
      {loading ? (
        <div className="workouts-fetch-loading">Loading</div>
      ) : (
        <div className="workouts-fetch">
          {workouts.length > 0 ? (
            workouts.map((workout) => (
              <WorkoutList
                key={workout._id}
                workout={workout}
                title={title}
                load={load}
                reps={reps}
                onSetTitle={setTitle}
                onSetLoad={setLoad}
                onSetReps={setReps}
                editWorkout={editWorkout}
                onSetEditWorkout={setEditWorkout}
                onHandleDelete={handleDelete}
                onHandleUpdate={handleUpdate}
              />
            ))
          ) : (
            <div>No workouts!</div>
          )}
        </div>
      )}
    </>
  );
};

export default WorkoutsFetch;
