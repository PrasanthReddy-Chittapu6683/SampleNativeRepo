import Bugsnag from "@bugsnag/expo";
import React from "react";
import { NativeBaseProvider } from "native-base";
import theme from "./core/theme";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import Router from "./core/components/Router";
import { useFonts } from "expo-font";
import { AuthProvider } from "./core/contexts/AuthContext";
import { UserProvider } from "./core/contexts/UserContext";
import { StatusBar } from "expo-status-bar";
import { AppProvider } from "./core/contexts/AppContext";
import { LinearGradient } from "expo-linear-gradient";
import {
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
} from "@expo-google-fonts/roboto";
import { Rochester_400Regular } from "@expo-google-fonts/rochester";
import { AgreementsProvider } from "./modules/agreements/contexts/AgreementsContext";

import { navigationRef } from "./core/services/navigation";
import ErrorBoundary from "./core/components/ErrorBoundary";
import { useRefreshDataOnAppFocus } from "./core/services/api";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ModalsProvider } from "./core/contexts/ModalsContext";
import { routes } from "./routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";

Bugsnag.start();
console.log("theme in app.js....", theme);
export default function App() {
  const themeFlag = "apollo";
  const [themeSelected, setThemeSelected] = useState(themeFlag);
  useRefreshDataOnAppFocus();
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Rochester_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <GestureHandlerRootView testID={"app-container"} style={{ flex: 1 }}>
          <NativeBaseProvider
            theme={theme}
            config={{
              dependencies: {
                "linear-gradient": LinearGradient,
              },
            }}
          >
            <NavigationContainer
              documentTitle={{
                enabled: true,
                formatter: () => "EDNA",
              }}
              linking={{
                enabled: true,
                config: {
                  screens: {
                    ...Object.values(routes).reduce(
                      (a, b) => ({ ...a, [b.name]: b.route }),
                      {}
                    ),
                  },
                },
              }}
              ref={navigationRef}
              theme={{
                ...DefaultTheme,
                colors: {
                  ...DefaultTheme.colors,
                  background: "#ffffff",
                  // background: "#12121A",
                },
              }}
            >
              <StatusBar style={"light"} />
              <AppProvider>
                <ModalsProvider>
                  <AuthProvider>
                    <UserProvider>
                      <AgreementsProvider>
                        <Router />
                      </AgreementsProvider>
                    </UserProvider>
                  </AuthProvider>
                </ModalsProvider>
              </AppProvider>
            </NavigationContainer>
          </NativeBaseProvider>
        </GestureHandlerRootView>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}
