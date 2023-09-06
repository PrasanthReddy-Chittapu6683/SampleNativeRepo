import React from "react";
import PropTypes from "prop-types";
import IconWrapper from "../components/IconWrapper";
import Svg, { Path } from "react-native-svg";

const TrendIcon = ({ fillColor = "#ffffff", ...props }) => {
  return (
    <IconWrapper width={48} height={48} {...props}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={"100%"}
        viewBox="0 0 24 24"
        fill="none"
        stroke={fillColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M23 6L13.5 15.5 8.5 10.5 1 18" />
        <Path d="M17 6L23 6 23 12" />
      </Svg>
    </IconWrapper>
  );
};

TrendIcon.propTypes = {
  ...IconWrapper.propTypes,
  fillColor: PropTypes.string,
};

export default TrendIcon;
