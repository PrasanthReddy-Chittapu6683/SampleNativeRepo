import { createContext } from "react";
import { ApiState } from "../../../core/services/api";

export const InvestmentsContext = createContext({
  investmentsLoading: true,
  investments: null,
});

export const InvestmentsProvider = ({ children }) => {
  return (
    <InvestmentsContext.Provider
      value={{
        investments: [
          // {
          //   id: 1,
          //   amount: 100000,
          //   moic: 1,
          //   irr: 22,
          //   dpi: 21,
          //   fund: {
          //     name: "Motive Capital Fund III",
          //   },
          // },
          // {
          //   id: 2,
          //   amount: 50000,
          //   moic: 1.2,
          //   irr: 23.5,
          //   dpi: 24.2,
          //   fund: {
          //     name: "Motive Capital Fund III",
          //   },
          // },
        ],
        investmentsLoading: ApiState.Success,
      }}
    >
      {children}
    </InvestmentsContext.Provider>
  );
};
