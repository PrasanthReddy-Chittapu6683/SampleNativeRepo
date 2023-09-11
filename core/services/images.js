import { useColorMode, useTheme } from "native-base";

export const useMenuFillColor = (isActive) => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();
  console.log("colors >>>", colors.accent[325])
  if (colorMode === "light") {
    return isActive ? colors.accent[300] : colors.accent[400];
  }

  return isActive ? colors.accent[325] : colors.accent[300];
};
