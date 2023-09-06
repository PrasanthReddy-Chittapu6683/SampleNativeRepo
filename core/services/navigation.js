import { createNavigationContainerRef } from "@react-navigation/native";
import { isWeb } from "./platform";

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function resetNavigation(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{ name, params }],
    });
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    if (!navigationRef.canGoBack()) {
      if (isWeb) {
        window.history.back();
      } else {
        navigate("Main");
      }
    } else {
      navigationRef.goBack();
    }
  }
}
