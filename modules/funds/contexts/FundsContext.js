import { createContext } from "react";
import { ApiState, useApi } from "../../../core/services/api";

export const FundsContext = createContext({
  availableFunds: [],
  availableFundsLoading: ApiState.Idle,
  subscribedFunds: [],
  addFund: async () => {},
});

export const FundsProvider = ({ children }) => {
  const [fundsLoading, availableFunds] = useApi("opportunity");
  const fundsToUse = availableFunds || [];

  return (
    <FundsContext.Provider
      value={{
        availableFunds: fundsToUse,
        availableFundsLoading: fundsLoading,
        subscribedFunds: [],
        addFund: async () => {},
      }}
    >
      {children}
    </FundsContext.Provider>
  );
};
