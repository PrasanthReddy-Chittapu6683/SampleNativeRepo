import React, { useContext } from "react";
import { InvestContext } from "../contexts/InvestContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { investScreens } from "../constants/routes";

const Stack = createNativeStackNavigator();

const InvestScreen = () => {
  const { step } = useContext(InvestContext);
  const Component = investScreens[step];

  if (!Component) {
    return null;
  }
  return <Component />;
};

export default InvestScreen;
