import React from "react";
import IconWrapper from "../components/IconWrapper";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { useColorModeValue } from "native-base";

const CloseIcon = ({ fillColor, ...props }) => {
  const defaultColor = useColorModeValue("black", "white");
  return (
    <IconWrapper width={15} {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M1 1l13 13M14 1L1 14"
          stroke={fillColor || defaultColor}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </Svg>
    </IconWrapper>
  );
};

CloseIcon.propTypes = {
  ...IconWrapper.propTypes,
  fillColor: PropTypes.string,
};

export default CloseIcon;
