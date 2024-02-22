import React, { useContext, useState } from "react";
import { WorkoutContext } from "../../context/MyPortal Page/WorkoutContext";

const WorkoutList = ({
  workout,
  title,
  load,
  reps,
  onSetTitle,
  onSetLoad,
  onSetReps,
  editWorkout,
  onSetEditWorkout,
  onHandleDelete,
  onHandleUpdate,
}) => {
  const [currentItem, setCurrentItem] = useState("");
  const [editBtnContent, setEditBtnContent] = useState("Edit");

  const { setLoading } = useContext(WorkoutContext);

  return (
    <div key={workout._id} className="workouts-single-workout">
      <div className="single-workout-title">
        <span>Exercise:</span>
        {workout._id === currentItem && editWorkout ? (
          <input autoComplete="off" id="title" value={title} onChange={(e) => onSetTitle(e.target.value)} />
        ) : (
          <span className="single-workout-value">{workout.title}</span>
        )}
      </div>

      <div className="single-workout-load">
        <span>Weight:</span>
        {workout._id === currentItem && editWorkout ? (
          <input autoComplete="off" id="load" value={load} onChange={(e) => onSetLoad(e.target.value)} />
        ) : (
          <span className="single-workout-value">{workout.load}</span>
        )}
      </div>

      <div className="single-workout-reps">
        <span>Repetitions:</span>
        {workout._id === currentItem && editWorkout ? (
          <input autoComplete="off" id="reps" value={reps} onChange={(e) => onSetReps(e.target.value)} />
        ) : (
          <span className="single-workout-value">{workout.reps}</span>
        )}
      </div>

      <div className="single-workout-buttons">
        <span
          className="workout-buttons-delete"
          onClick={() => {
            setLoading(true);
            onHandleDelete(workout._id);
          }}
        >
          Delete
        </span>

        {workout._id === currentItem && editBtnContent === "Discard" ? (
          <span
            className="workout-buttons-discard"
            onClick={() => {
              setEditBtnContent("Edit");
              onSetEditWorkout(false);
            }}
          >
            Discard Changes
          </span>
        ) : (
          <span
            className="workout-buttons-edit"
            onClick={() => {
              onSetEditWorkout(true);
              setCurrentItem(workout._id);
              onSetTitle(workout.title);
              onSetLoad(workout.load);
              onSetReps(workout.reps);
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
              setLoading(true);
              setEditBtnContent("Edit");
              onHandleUpdate(workout._id);
            }}
          >
            Update
          </span>
        )}
      </div>
    </div>
  );
};

export default WorkoutList;
