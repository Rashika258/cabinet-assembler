
import { createContext, useContext, useState } from "react";
import { cabinetPartsData } from "./data";

const CabinetContext = createContext();

export const CabinetContextProvider = ({ children }) => {
  const [cabinetSharedState, setCabinetSharedState] = useState(cabinetPartsData);

  return (
    <CabinetContext.Provider value={{ cabinetSharedState, setCabinetSharedState }}>
      {children}
    </CabinetContext.Provider>
  );
};

export const useCabinetStateContext = () => {
  return useContext(CabinetContext);
};
