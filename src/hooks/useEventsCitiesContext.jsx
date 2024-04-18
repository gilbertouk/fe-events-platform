import { useContext } from "react";
import { EventsCitiesContext } from "../contexts/eventsCitiesContext";

const useEventsCitiesContext = () => {
  return useContext(EventsCitiesContext);
};

export default useEventsCitiesContext;
