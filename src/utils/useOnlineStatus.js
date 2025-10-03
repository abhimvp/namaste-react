import React, { useEffect,useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  // check if online and return the status - boolean value
  useEffect(() => {
    // will put the event listeners once the component is mounted
    window.addEventListener("online", () => {
      console.log("we are online");
      setOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      console.log("we are offline");
      setOnlineStatus(false);
    });
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
