import React, { createContext, useState } from "react";

export const CalendarContext = createContext();

export const CalendarContextProvicer = ({ children }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [workoutDate, setWorkoutDate] = useState(new Date().toISOString());

  return (
    <CalendarContext.Provider value={{ showCalendar, setShowCalendar, workoutDate, setWorkoutDate }}>
      {children}
    </CalendarContext.Provider>
  );
};
