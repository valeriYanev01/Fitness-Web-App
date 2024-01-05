import React, { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./WorkoutCalendar.css";
import { WorkoutContext } from "../../context/WorkoutContext";
import { CalendarContext } from "../../context/CalendarContext";

const WorkoutCalendar = () => {
  const [calendarLoaded, setCalendarLoaded] = useState(false);

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
        defaultValue={new Date()}
        minDate={new Date(new Date().setFullYear(new Date().getFullYear() - 2))}
        minDetail="year"
        maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
        next2Label={null}
        nextLabel="Next"
        onClickDay={(e) => {
          setShowSettings("Show Workout");
          setWorkoutDate(e);
          setLoading(true);
        }}
        prev2Label={null}
        prevLabel="Previous"
        showNeighboringMonth={false}
      />

      <div className="create-new-workout-btn-container" onClick={() => setShowSettings("Create Workout")}>
        <span className="create-new-workout-btn">Add new workout</span>
      </div>
    </>
  );
};

export default WorkoutCalendar;
