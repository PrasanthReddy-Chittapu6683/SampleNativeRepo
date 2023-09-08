import { useColorMode, useTheme } from "native-base";

export const useMenuFillColor = (isActive) => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  if (colorMode === "light") {
    return isActive ? "#706FCF" : "#466584";
  }

  return isActive ? "#706FCF" : "#FFFFFF";
};
