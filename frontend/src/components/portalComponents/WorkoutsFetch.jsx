import { useContext, useEffect, useState } from "react";
import axios from "axios";
import WorkoutList from "./WorkoutList";
import { CalendarContext } from "../../context/MyPortal Page/CalendarContext";
import { WorkoutContext } from "../../context/MyPortal Page/WorkoutContext";
import { LoginContext } from "../../context/LoginContext";
import "./WorkoutsFetch.css";

const WorkoutsFetch = () => {
  const [workouts, setWorkouts] = useState([]);
  const [editWorkout, setEditWorkout] = useState(false);
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");

  const { workoutDate } = useContext(CalendarContext);
  const { loading, setLoading } = useContext(WorkoutContext);
  const { user } = useContext(LoginContext);

  const URL = import.meta.env.VITE_URL;

  useEffect(() => {
    if (user) {
      const fetchData = () =>
        axios
          .get(`${URL}workouts`, {
            params: { date: workoutDate },
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          })
          .then((data) => {
            console.log(data);
            setWorkouts(data.data.workouts);
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
      fetchData();
    }
  }, [loading]);

  const handleDelete = (id) => {
    axios
      .delete(`${URL}workouts/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleUpdate = (id) => {
    axios
      .put(`${URL}workouts/${id}`, { title, load, reps }, { headers: { Authorization: `Bearer ${user.token}` } })
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
      ) : workouts.length === 0 ? (
        <div>No Workouts</div>
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
