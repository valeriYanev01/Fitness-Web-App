import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { LoginContextProvider } from "./context/LoginContext.jsx";
import { WorkoutContextProvider } from "./context/./MyPortal Page/WorkoutContext.jsx";
import { CalendarContextProvider } from "./context/./MyPortal Page/CalendarContext.jsx";
import { PortalContextProvider } from "./context/./MyPortal Page/PortalContext.jsx";
import { LocationContextProvider } from "./context/./MyPortal Page/LocationContext.jsx";
import { CalculatorContextProvider } from "./context/./MyPortal Page/CalculatorContext.jsx";
import { ProductTypeContextProvider } from "./context/Store Page/ProductTypeContext.jsx";
import { AccountSettingsContextProvider } from "./context/MyPortal Page/AccountSettingsContext.jsx";
import { SettingsContextProvider } from "./context/MyPortal Page/SettingsContext.jsx";
import { ChangeBgContextProvider } from "./context/ChangeBgContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginContextProvider>
        <AccountSettingsContextProvider>
          <SettingsContextProvider>
            <WorkoutContextProvider>
              <CalendarContextProvider>
                <PortalContextProvider>
                  <LocationContextProvider>
                    <CalculatorContextProvider>
                      <ProductTypeContextProvider>
                        <ChangeBgContextProvider>
                          <App />
                        </ChangeBgContextProvider>
                      </ProductTypeContextProvider>
                    </CalculatorContextProvider>
                  </LocationContextProvider>
                </PortalContextProvider>
              </CalendarContextProvider>
            </WorkoutContextProvider>
          </SettingsContextProvider>
        </AccountSettingsContextProvider>
      </LoginContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
