import React, { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./WorkoutCalendar.css";
import { WorkoutContext } from "../../context/WorkoutContext";
import { CalendarContext } from "../../context/CalendarContext";

const WorkoutCalendar = () => {
  const [calendarLoaded, setCalendarLoaded] = useState(false);
  const [showCreateWorkoutVisibility, setShowCreateWorkoutVisibility] = useState(false);

  const { setShowSettings, setLoading } = useContext(WorkoutContext);
  const { setWorkoutDate } = useContext(CalendarContext);

  const currentDay = document.querySelectorAll(".react-calendar__month-view__days button");

  useEffect(() => {
    if (currentDay) {
      setCalendarLoaded(true);
    }
  }, [calendarLoaded]);

  return (
    <>
      <Calendar
        calendarType="iso8601"
        className="Workouts-Calendar"
        minDate={new Date(new Date().setFullYear(new Date().getFullYear() - 2))}
        minDetail="year"
        maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
        next2Label={null}
        nextLabel="Next"
        onClickDay={(e) => {
          setShowSettings("Show Workout");
          setShowCreateWorkoutVisibility(true);
          setWorkoutDate(e);
          setLoading(true);
        }}
        prev2Label={null}
        prevLabel="Previous"
        showNeighboringMonth={false}
      />

      {showCreateWorkoutVisibility ? (
        <div
          onClick={() => {
            setShowSettings("Create Workout");
          }}
        >
          Create Workout
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default WorkoutCalendar;
