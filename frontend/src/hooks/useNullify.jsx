import { CalendarContext } from "../context/MyPortal Page/CalendarContext";
import { WorkoutContext } from "../context/MyPortal Page/WorkoutContext";
import { PortalContext } from "../context/MyPortal Page/PortalContext";
import { ProductTypeContext } from "../context/Store Page/ProductTypeContext";
import { AccountSettingsContext } from "../context/MyPortal Page/AccountSettingsContext";
import { useContext } from "react";

const useNullify = () => {
  const { setShowCalendar } = useContext(CalendarContext);
  const { setShowSettings } = useContext(WorkoutContext);
  const { setOutletName, setCloseBtnContent } = useContext(PortalContext);
  const { setType } = useContext(ProductTypeContext);
  const { setShowAccountSettings } = useContext(AccountSettingsContext);

  const handleNullify = () => {
    setType("");
    setCloseBtnContent(null);
    setShowSettings(null);
    setShowCalendar(false);
    setShowAccountSettings(false);
    setOutletName(null);
  };

  return handleNullify;
};

export default useNullify;
