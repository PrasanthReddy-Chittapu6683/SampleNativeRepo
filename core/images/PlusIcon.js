import React from "react";
import IconWrapper from "../components/IconWrapper";
import Svg, { Circle, Path } from "react-native-svg";
import { useColorMode, useTheme } from "native-base";

const PlusIcon = (props) => {
  const { colorMode } = useColorMode();
  const { colors } = useTheme();
  const strokeColor =
    colorMode === "light" ? colors.accent[400] : colors.accent[200];
  return (
    <IconWrapper width={18} {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx={9} cy={9} r={8.5} stroke={strokeColor} />
        <Path d="M9 6v6M12 9H6" stroke={strokeColor} strokeLinecap="round" />
      </Svg>
    </IconWrapper>
  );
};

PlusIcon.propTypes = {
  ...IconWrapper.propTypes,
};

export default PlusIcon;
