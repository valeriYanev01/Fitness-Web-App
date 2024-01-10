import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./WorkoutsFetch.css";
import WorkoutList from "./WorkoutList";
import { CalendarContext } from "../../context/MyPortal Page/CalendarContext";
import { WorkoutContext } from "../../context/MyPortal Page/WorkoutContext";
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
    const fetchData = () =>
      axios
        .get("http://localhost:6969/api/workouts", {
          params: { date: workoutDate },
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((data) => {
          setWorkouts(data.data.workouts);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    fetchData();
  }, [loading]);

  const handleDelete = (id) => {
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
