import { createContext } from "react";
import { ApiState } from "../../../core/services/api";

export const InvestmentContext = createContext({
  investment: null,
  investmentLoading: ApiState.Loading,
});

export const InvestmentProvider = ({ children }) => {
  return (
    <InvestmentContext.Provider
      value={{ investment: null, investmentLoading: ApiState.Loading }}
    >
      {children}
    </InvestmentContext.Provider>
  );
};
