import React from "react";
import PropTypes from "prop-types";
import IconWrapper from "../components/IconWrapper";
import Svg, { Path } from "react-native-svg";

const DollarIcon = ({ fillColor = "#ffffff", ...props }) => {
  return (
    <IconWrapper width={24} height={48} {...props}>
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
        <Path d="M12 1L12 23" />
        <Path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </Svg>
    </IconWrapper>
  );
};

DollarIcon.propTypes = {
  ...IconWrapper.propTypes,
  fillColor: PropTypes.string,
};

export default DollarIcon;
