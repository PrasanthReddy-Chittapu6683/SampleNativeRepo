import { createContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

export const CoInvestStep = {
  Landing: "landing",
  Terms: "terms",
  Invest: "invest",
};

export const CoInvestContext = createContext({
  nextStep: () => {},
  previousStep: () => {},
  setStep: () => {},
});

export const CoInvestProvider = ({ children }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const stepArray = Object.values(CoInvestStep);

  const handleSetStep = (newStep) => {
    navigation.push("Co-Investment", {
      screen: `Co-Investment-${newStep}`,
      investmentId: route.params?.investmentId,
    });
  };

  const handleNextStep = (currentStep) => {
    const currentIndex = stepArray.indexOf(currentStep);
    const nextIndex = Math.min(stepArray.length - 1, currentIndex + 1);
    const nextStep = stepArray[nextIndex];

    navigation.push("Co-Investment", {
      screen: `Co-Investment-${nextStep}`,
      investmentId: route.params?.investmentId,
    });
  };

  const handlePreviousStep = (currentStep) => {
    const currentIndex = stepArray.indexOf(currentStep);
    const nextIndex = Math.max(0, currentIndex - 1);
    const nextStep = stepArray[nextIndex];

    navigation.push("Co-Investment", {
      screen: `Co-Investment-${nextStep}`,
      investmentId: route.params?.investmentId,
    });
  };

  return (
    <CoInvestContext.Provider
      value={{
        setStep: handleSetStep,
        nextStep: handleNextStep,
        previousStep: handlePreviousStep,
      }}
    >
      {children}
    </CoInvestContext.Provider>
  );
};
