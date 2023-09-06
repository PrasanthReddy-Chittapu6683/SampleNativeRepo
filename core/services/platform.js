import { Dimensions, Platform } from "react-native";
import { useEffect, useState } from "react";

export const isWeb = Platform.OS === "web";
export const isAndroid = Platform.OS === "android";
export const isIOS = Platform.OS === "ios";

export const alert = (title, message, buttons) => {
  if (isWeb) {
    alert(title, message, buttons);
  }
};

export const ORIENTATION = {
  LANDSCAPE: "landscape",
  PORTRAIT: "portrait",
};

function getWindowOrientation() {
  const { width, height } = Dimensions.get("window");
  return height >= width ? ORIENTATION.PORTRAIT : ORIENTATION.LANDSCAPE;
}
export const useDeviceOrientation = () => {
  const [deviceOrientation, setDeviceOrientation] =
    useState(getWindowOrientation);

  useEffect(() => {
    function updateState() {
      setDeviceOrientation(getWindowOrientation());
    }
    Dimensions.addEventListener("change", updateState);
    return () => Dimensions?.removeEventListener?.("change", updateState);
  }, []);

  return {
    isPortrait: deviceOrientation === ORIENTATION.PORTRAIT,
    isLandscape: deviceOrientation === ORIENTATION.LANDSCAPE,
  };
};
