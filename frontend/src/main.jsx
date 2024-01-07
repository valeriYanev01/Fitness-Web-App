import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { LoginContextProvider } from "./context/LoginContext.jsx";
import { WorkoutContextProvider } from "./context/WorkoutContext.jsx";
import { CalendarContextProvider } from "./context/CalendarContext.jsx";
import { PortalContextProvider } from "./context/PortalContext.jsx";
import { LocationContextProvider } from "./context/LocationContext.jsx";
import { CalculatorContextProvider } from "./context/CalculatorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginContextProvider>
        <WorkoutContextProvider>
          <CalendarContextProvider>
            <PortalContextProvider>
              <LocationContextProvider>
                <CalculatorContextProvider>
                  <App />
                </CalculatorContextProvider>
              </LocationContextProvider>
            </PortalContextProvider>
          </CalendarContextProvider>
        </WorkoutContextProvider>
      </LoginContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
