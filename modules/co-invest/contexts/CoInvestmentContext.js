import { createContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { investments } from "../data/investments";

export const CoInvestmentContext = createContext({
  investment: {},
});

export const CoInvestmentProvider = ({ children }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const investmentId = route.params?.investmentId;
  const investment = investments.find(
    (investment) => investment.id === investmentId
  );

  return (
    <CoInvestmentContext.Provider
      value={{
        investment,
      }}
    >
      {children}
    </CoInvestmentContext.Provider>
  );
};
