import { createContext } from "react";
import { investments } from "../data/investments";

export const CoInvestmentsContext = createContext({
  investments: [],
});

export const CoInvestmentsProvider = ({ children }) => {
  return (
    <CoInvestmentsContext.Provider
      value={{
        investments,
      }}
    >
      {children}
    </CoInvestmentsContext.Provider>
  );
};
