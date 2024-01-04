import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./WorkoutsFetch.css";
import { CalendarContext } from "../../context/CalendarContext";
import { WorkoutContext } from "../../context/WorkoutContext";

const WorkoutsFetch = () => {
  const [workouts, setWorkouts] = useState([]);
  const [editWorkout, setEditWorkout] = useState(false);
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [currentItem, setCurrentItem] = useState("");
  const [editBtnContent, setEditBtnContent] = useState("Edit");

  const { workoutDate } = useContext(CalendarContext);
  const { loading, setLoading } = useContext(WorkoutContext);

  useEffect(() => {
    axios
      .get("http://localhost:6969/api/workouts", { params: { date: workoutDate.toISOString() } })
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
      .delete(`http://localhost:6969/api/workouts/${id}`)
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
      .put(`http://localhost:6969/api/workouts/${id}`, { title, load, reps })
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
        <div>Loading</div>
      ) : (
        <div className="workouts-fetch">
          {workouts.length > 0 ? (
            workouts.map((workout) => (
              <div key={workout._id} className="workouts-single-workout">
                <div className="single-workout-title">
                  <span>Exercise:</span>
                  {workout._id === currentItem && editWorkout ? (
                    <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                  ) : (
                    <span>{workout.title}</span>
                  )}
                </div>

                <div className="single-workout-load">
                  <span>Weight:</span>
                  {workout._id === currentItem && editWorkout ? (
                    <input id="load" value={load} onChange={(e) => setLoad(e.target.value)} />
                  ) : (
                    <span>{workout.load}</span>
                  )}
                </div>

                <div className="single-workout-reps">
                  <span>Repetitions:</span>
                  {workout._id === currentItem && editWorkout ? (
                    <input id="reps" value={reps} onChange={(e) => setReps(e.target.value)} />
                  ) : (
                    <span>{workout.reps}</span>
                  )}
                </div>

                <div className="single-workout-buttons">
                  <span className="workout-buttons-delete" onClick={() => handleDelete(workout._id)}>
                    Delete
                  </span>

                  {workout._id === currentItem && editBtnContent === "Discard" ? (
                    <span
                      className="workout-buttons-discard"
                      onClick={() => {
                        setEditBtnContent("Edit");
                        setEditWorkout(false);
                      }}
                    >
                      Discard Changes
                    </span>
                  ) : (
                    <span
                      className="workout-buttons-edit"
                      onClick={() => {
                        setEditWorkout(true);
                        setCurrentItem(workout._id);
                        setTitle(workout.title);
                        setLoad(workout.load);
                        setReps(workout.reps);
                        setEditBtnContent("Discard");
                      }}
                    >
                      Edit
                    </span>
                  )}

                  {workout._id === currentItem && editWorkout && (
                    <span
                      className="workout-buttons-update"
                      onClick={() => {
                        setEditBtnContent("Edit");
                        handleUpdate(workout._id);
                      }}
                    >
                      Update
                    </span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div>No workouts from that day!</div>
          )}
        </div>
      )}
    </>
  );
};

export default WorkoutsFetch;
