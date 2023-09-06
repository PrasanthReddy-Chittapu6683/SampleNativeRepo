import React from "react";
import IconWrapper from "../components/IconWrapper";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "native-base";
import PropTypes from "prop-types";

const ChevronIcon = ({ fillColor, ...props }) => {
  const { colors } = useTheme();
  return (
    <IconWrapper {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M1 1l5 5-5 5"
          stroke={fillColor || colors.accent[100]}
          strokeLinecap="round"
        />
      </Svg>
    </IconWrapper>
  );
};

ChevronIcon.propTypes = {
  ...IconWrapper.propTypes,
  fillColor: PropTypes.string,
};

export default ChevronIcon;
