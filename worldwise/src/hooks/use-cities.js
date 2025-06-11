import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";

function useCities() {
  const context = useContext(CitiesContext);
  if (!context)
    throw new Error("CitiesContext is used outside the CitiesProvider");
  return context;
}

export { useCities };
