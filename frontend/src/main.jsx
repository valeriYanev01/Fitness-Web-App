import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { LoginContextProvider } from "./context/LoginContext.jsx";
import { WorkoutContextProvider } from "./context/WorkoutContext.jsx";
import { CalendarContextProvicer } from "./context/CalendarContext.jsx";
import { PortalContextProvider } from "./context/PortalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginContextProvider>
      <WorkoutContextProvider>
        <CalendarContextProvicer>
          <PortalContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PortalContextProvider>
        </CalendarContextProvicer>
      </WorkoutContextProvider>
    </LoginContextProvider>
  </React.StrictMode>
);
