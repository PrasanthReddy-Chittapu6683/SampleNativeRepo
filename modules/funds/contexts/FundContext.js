import { createContext } from "react";
import { useRoute } from "@react-navigation/native";
import { ApiState, useApi } from "../../../core/services/api";

export const FundContext = createContext({
  fund: null,
  fundLoading: ApiState.Idle,
});

export const FundProvider = ({ children }) => {
  const route = useRoute();
  const [fundLoading, fund] = useApi(`opportunity/${route.params.fundId}`);
  const fundToUse = fund
    ? {
        ...fund,
        style: fund.style || {},
      }
    : null;

  return (
    <FundContext.Provider
      value={{
        fund: fundToUse,
        fundLoading,
      }}
    >
      {children}
    </FundContext.Provider>
  );
};
