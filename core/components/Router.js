import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { renderRoutes } from "../services/router";
import { useMenuRoutes, useRoutes } from "../../routes";

const Stack = createNativeStackNavigator();

const Router = () => {
  const menuRoutes = useMenuRoutes();
  const routesToUse = useRoutes();

  if (!routesToUse.length) {
    // todo: add splash screen route here?
    return null;
  }

  return (
    <Stack.Navigator>
      {renderRoutes(routesToUse, Stack, {
        tabs: menuRoutes,
        stack: routesToUse,
      })}
    </Stack.Navigator>
  );
};

export default Router;
