import React from "react";
import { CoInvestStep } from "../contexts/CoInvestContext";
import CoInvestmentLanding from "./CoInvestmentLanding";
import CoInvestmentTerms from "./CoInvestmentTerms";
import CoInvestmentInvest from "./CoInvestmentInvest";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const CoInvestmentScreen = () => {
  const coInvestRoutes = [
    {
      name: "Co-Investment-" + CoInvestStep.Landing,
      component: CoInvestmentLanding,
    },
    {
      name: "Co-Investment-" + CoInvestStep.Terms,
      component: CoInvestmentTerms,
    },
    {
      name: "Co-Investment-" + CoInvestStep.Invest,
      component: CoInvestmentInvest,
    },
  ];
  return (
    <Stack.Navigator>
      {coInvestRoutes.map((route) => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{ headerShown: false }}
        ></Stack.Screen>
      ))}
    </Stack.Navigator>
  );
};

export default CoInvestmentScreen;
