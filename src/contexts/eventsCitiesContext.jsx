import { createContext, useEffect, useState } from "react";

import { api } from "../services/api";

export const EventsCitiesContext = createContext(null);
EventsCitiesContext.displayName = "Event Cities Context";

const EventCitiesProvider = ({ children }) => {
  const [eventsCities, setEventsCities] = useState([]);
  const [isLoadingEventsCities, setIsLoadingEventsCities] = useState(true);

  useEffect(() => {
    api
      .get("/events/cities")
      .then((response) => {
        setEventsCities(response.data.body);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoadingEventsCities(false);
      });
  }, []);

  return (
    <EventsCitiesContext.Provider
      value={{ eventsCities, isLoadingEventsCities }}
    >
      {children}
    </EventsCitiesContext.Provider>
  );
};

export default EventCitiesProvider;
