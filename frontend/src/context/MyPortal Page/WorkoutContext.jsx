import React, { createContext, useState } from "react";

export const WorkoutContext = createContext();

export const WorkoutContextProvider = ({ children }) => {
  const [showSettings, setShowSettings] = useState("");
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [loading, setLoading] = useState(true);

  return (
    <WorkoutContext.Provider
      value={{
        showSettings,
        setShowSettings,
        title,
        setTitle,
        load,
        setLoad,
        reps,
        setReps,
        loading,
        setLoading,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};
