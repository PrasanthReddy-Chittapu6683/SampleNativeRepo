import React from "react";
import IconWrapper from "../components/IconWrapper";
import Svg, { Circle, Path } from "react-native-svg";
import { useColorMode, useTheme } from "native-base";

const SearchIcon = (props) => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();
  const fillColor =
    colorMode === "light" ? colors.accent[300] : colors.accent[100];

  return (
    <IconWrapper {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx={6.66667} cy={6.66667} r={6.16667} stroke={fillColor} />
        <Path
          d="M10.666 11.333L14 14.667"
          stroke={fillColor}
          strokeLinecap="round"
        />
      </Svg>
    </IconWrapper>
  );
};

SearchIcon.propTypes = {
  ...IconWrapper.propTypes,
};

export default SearchIcon;
